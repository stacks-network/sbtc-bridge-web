var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { T as TEST_NETWORK, N as NETWORK, p as p2wpkh, h as hex, c as Transaction, s as secp256k1, S as Script, O as OutScript, A as Address, R as RawTx } from "./utils.7b5b399c.js";
import { e as utils, f as getPublicKey, h as schnorr, i as decodeStacksAddress } from "./stacks_connect.7f325cc2.js";
import { a as PegTransaction, b as assert, M as MAGIC_BYTES_TESTNET, c as MAGIC_BYTES_MAINNET, d as PEGIN_OPCODE, e as concatByteArrays } from "./SbtcWalletDisplay.dc134d92.js";
import { c as fetchUtxoSet, d as fetchCurrentFeeRates } from "./bridge_api.fe1b21a1.js";
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _PegInTransaction = class extends PegTransaction {
  constructor() {
    super();
    __publicField(this, "getChange", () => {
      return this.maxCommit() - this.pegInData.amount - this.fee;
    });
    __publicField(this, "setAmount", (amount) => {
      if (amount > this.maxCommit() - this.fee) {
        throw new Error("Amount is more than available " + this.maxCommit() + " less the gas " + this.fee);
      }
      this.pegInData.amount = amount;
    });
    __publicField(this, "calculateFees", () => {
      if (!this.ready)
        throw new Error("Not ready!");
      const stacksAddress = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN";
      const sbtcWalletAddress = "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss";
      const p2Ret = p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
      assert("wpkh" === p2Ret.type);
      const privKey = hex.decode("0101010101010101010101010101010101010101010101010101010101010101");
      const tx = new Transaction({ allowUnknowOutput: true });
      for (const utxo of this.addressInfo.utxos) {
        if (this.isUTXOConfirmed(utxo)) {
          tx.addInput({
            txid: hex.decode(utxo.txid),
            //txid: utxo.txid,
            index: utxo.vout,
            witnessUtxo: {
              amount: 600n,
              script: p2wpkh(secp256k1.getPublicKey(privKey, true)).script
            }
          });
        } else {
          this.unconfirmedUtxos = true;
        }
      }
      if (tx.inputsLength === 0)
        throw new Error("No confirmed UTXOs");
      const asmScript = this.getOpDropP2shScript(stacksAddress, sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(0) });
      const changeAmount = Math.floor(0);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      tx.sign(privKey);
      tx.finalize();
      this.scureFee = Number(tx.fee);
      this.fees = [
        this.scureFee * 0.8,
        //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
        this.scureFee * 1,
        //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
        this.scureFee * 1.2
        //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
      ];
      this.fee = this.fees[1];
      if (this.pegInData.amount === 0) {
        this.pegInData.amount = this.maxCommit() - this.fee;
      }
    });
    __publicField(this, "getOutputsForDisplay", () => {
      const changeAmount = this.getChange();
      const outs = [
        { script: "RETURN " + this.pegInData.stacksAddress, amount: 0 },
        { address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount }
      ];
      if (changeAmount > 0)
        outs.push({ address: this.fromBtcAddress, amount: changeAmount });
      outs.push({ address: "pays " + this.fee + " satoshis to miner." });
      return outs;
    });
    __publicField(this, "buildTransaction", (signature) => {
      if (!this.ready)
        throw new Error("Not ready!");
      if (signature)
        throw new Error("signature only for peg out!");
      return { opReturn: this.buildOpReturnTransaction(), opDrop: this.buildOpDropTransaction() };
    });
    __publicField(this, "buildOpDropTransaction", () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true, lockTime: 0 });
      this.addInputs(tx);
      const asmScript = this.getOpDropP2shScript(this.pegInData.stacksAddress, this.pegInData.sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    });
    __publicField(this, "buildOpReturnTransaction", () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const data = this.buildData(this.pegInData.stacksAddress);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      {
        const asmScript = Script.encode([
          "IF",
          OutScript.encode(Address(this.net).decode(this.pegInData.sbtcWalletAddress)),
          "ELSE",
          144,
          "CHECKSEQUENCEVERIFY",
          "DROP",
          OutScript.encode(Address(this.net).decode(this.fromBtcAddress)),
          "CHECKSIG",
          "ENDIF"
        ]);
        tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
      }
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    });
    __publicField(this, "addInputs", (tx) => {
      for (const utxo of this.addressInfo.utxos) {
        const script = RawTx.decode(hex.decode(utxo.tx.hex));
        if (this.isUTXOConfirmed(utxo)) {
          const nextI = {
            txid: hex.decode(utxo.txid),
            index: utxo.vout,
            witnessUtxo: {
              script: script.outputs[utxo.vout].script,
              amount: BigInt(utxo.value)
            }
          };
          tx.addInput(nextI);
        }
      }
    });
    __publicField(this, "buildData", (sigOrPrin) => {
      const magicBuf = this.net === TEST_NETWORK ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
      const opCodeBuf = hex.decode(PEGIN_OPCODE);
      const addr = decodeStacksAddress(sigOrPrin.split(".")[0]);
      const addr0Buf = hex.decode(addr[0].toString(16));
      const addr1Buf = hex.decode(addr[1]);
      let data;
      if (sigOrPrin.indexOf(".") > -1) {
        const cnameBuf = new TextEncoder().encode(sigOrPrin.split(".")[1]);
        data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf, cnameBuf]);
        console.log(sigOrPrin.split(".")[1]);
      } else {
        data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf]);
      }
      return data;
    });
  }
  /**
  	1. https://medium.com/summa-technology/bitcoins-time-locks-27e0c362d7a1
  	 	# Anyone can spend, so long as 256 blocks have passed since input_1's previous output.
  		# Note that a separate transaction can be created to spend these coins.
  		# The alternate path would specify a lock_time of at least 506321.
  		# The script allows either an absolute or relative time lock, whichever is shorter.
  		tx_3:
  		lock_time: 0
  		input_1:
  			sequence_no: 0x00000100
  			scriptsig:
  			OP_FALSE
  			script:
  			OP_IF
  				506321 OP_CHECKLOCKTIMEVERIFY
  			OP_ELSE
  				0x00000100 OP_CHECKSEQUENCEVERIFY
  			OP_ENDIF
  			OP_DROP
  
  	2. https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki
  	 	IF
          	2 <Alice's pubkey> <Bob's pubkey> <Escrow's pubkey> 3 CHECKMULTISIG
  		ELSE
  			"30d" CHECKSEQUENCEVERIFY DROP
  			<Alice's pubkey> CHECKSIG
  		ENDIF
  	3. see also scure.lockTime https://github.com/paulmillr/scure-btc-signer/blob/d762e4bf994821c3e1b79fe99ee1c7576e323fbf/index.ts#L1755
  	*/
  getOpDropP2shScript(stacksAddress, sbtcWalletAddress) {
    const data = this.buildData(stacksAddress);
    const walletUint8 = new TextEncoder().encode(sbtcWalletAddress);
    let asmScript = Script.encode([data, "DROP", "DUP", "HASH160", walletUint8, "EQUALVERIFY", "CHECKSIG"]);
    {
      asmScript = Script.encode([
        "IF",
        data,
        "DROP",
        "DUP",
        "HASH160",
        walletUint8,
        "EQUALVERIFY",
        "CHECKSIG",
        "ELSE",
        144,
        "CHECKSEQUENCEVERIFY",
        "DROP",
        OutScript.encode(Address(this.net).decode(this.fromBtcAddress)),
        "CHECKSIG",
        "ENDIF"
      ]);
    }
    return asmScript;
  }
};
let PegInTransaction = _PegInTransaction;
__publicField(PegInTransaction, "create", async (network, fromBtcAddress, sbtcWalletAddress) => {
  const me = new _PegInTransaction();
  me.net = network === "testnet" ? TEST_NETWORK : NETWORK;
  me.fromBtcAddress = fromBtcAddress;
  me.pegInData = {
    amount: 0,
    stacksAddress: void 0,
    sbtcWalletAddress
  };
  me.addressInfo = await fetchUtxoSet(fromBtcAddress);
  const btcFeeRates = await fetchCurrentFeeRates();
  me.feeInfo = btcFeeRates.feeInfo;
  me.ready = true;
  return me;
});
__publicField(PegInTransaction, "hydrate", (o) => {
  const me = new _PegInTransaction();
  me.net = o.net;
  if (!o.fromBtcAddress)
    throw new Error("No address - use create instead!");
  me.fromBtcAddress = o.fromBtcAddress;
  me.pegInData = o.pegInData;
  me.addressInfo = o.addressInfo;
  me.feeInfo = o.feeInfo;
  me.fees = o.fees;
  me.fee = o.fee;
  me.scureFee = o.scureFee;
  me.ready = o.ready;
  return me;
});
export {
  PegInTransaction as P
};
