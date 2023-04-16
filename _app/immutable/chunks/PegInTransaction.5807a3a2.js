var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { n as utils, q as getPublicKey, r as schnorr, C as CONFIG, v as fetchUtxoSet, x as fetchCurrentFeeRates, y as decodeStacksAddress } from "./stacks_connect.185d0304.js";
import { i as PegTransaction, d as TEST_NETWORK, N as NETWORK, A as Address, p as p2wpkh, h as hex, T as Transaction, s as secp256k1, S as Script, O as OutScript, R as RawTx, m as p2tr_ms, n as p2wsh, o as p2ms, q as p2tr, M as MAGIC_BYTES_TESTNET, g as MAGIC_BYTES_MAINNET, P as PEGIN_OPCODE } from "./utils.7d5a9605.js";
import { a as assert, c as concatByteArrays } from "./structured-data.02eb7e1c.js";
const priv = utils.randomPrivateKey();
const isMini = CONFIG.VITE_SBTC_MINI;
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
      const data = this.buildData(stacksAddress);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.dust), this.net);
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
      const request = this.getCSVWitnessScript();
      request.status = 1;
      return request;
    });
    __publicField(this, "buildOpReturnTransaction", () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const data = this.buildData(this.pegInData.stacksAddress);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      if (isMini) {
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
      } else {
        tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount), this.net);
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
    __publicField(this, "getMSWitnessScript", () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address is required");
      const data = this.buildData(this.pegInData.stacksAddress);
      const pubkey1 = this.addressInfo.pubkey;
      const pubkey2 = this.addressInfo.pubkey2;
      let script;
      try {
        const pmnt = p2tr_ms(1, [pubkey1, pubkey2]);
        const wsh2 = {
          type: "wsh",
          script: Script.encode([data, "DROP", pmnt.script])
        };
        script = p2wsh(wsh2, this.net);
      } catch (err) {
        try {
          const pmnt = p2ms(1, [pubkey1, pubkey2]);
          const wsh2 = {
            type: "wsh",
            script: Script.encode([data, "DROP", pmnt.script])
          };
          script = p2wsh(wsh2, this.net);
        } catch (err2) {
          script = {
            type: "unknown",
            script: new Uint8Array()
          };
        }
      }
      return {
        status: 1,
        fromBtcAddress: this.fromBtcAddress,
        stacksAddress: this.pegInData.stacksAddress,
        sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
        timeBasedPegin: {
          paymentType: script.type,
          address: script.address,
          script: hex.encode(script.script),
          redeemScript: script.redeemScript ? hex.encode(script.redeemScript) : void 0,
          witnessScript: script.witnessScript ? hex.encode(script.witnessScript) : void 0
        }
      };
    });
    __publicField(this, "getCSVWitnessScript", () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address is required");
      const data = this.buildData(this.pegInData.stacksAddress);
      const csvScript = this.getCSVScript(data);
      if (!csvScript)
        throw new Error("Script not allowed");
      const script = p2wsh(csvScript, this.net);
      return {
        fromBtcAddress: this.fromBtcAddress,
        status: 1,
        stacksAddress: this.pegInData.stacksAddress,
        sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
        timeBasedPegin: {
          wsh: hex.encode(script.script),
          paymentType: script.type,
          address: script.address,
          script: hex.encode(script.script),
          redeemScript: script.redeemScript ? hex.encode(script.redeemScript) : void 0,
          witnessScript: script.witnessScript ? hex.encode(script.witnessScript) : void 0
        }
      };
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
    let asmScript;
    if (isMini) {
      asmScript = Script.encode([
        data,
        "DROP",
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
    }
    return asmScript;
  }
  getCSVScript(data) {
    const addrScript = Address(this.net).decode(this.pegInData.sbtcWalletAddress);
    if (addrScript.type === "wpkh") {
      return {
        type: "wsh",
        script: Script.encode([data, "DROP", p2wpkh(addrScript.hash).script])
      };
    } else if (addrScript.type === "tr") {
      return {
        type: "tr",
        //script: btc.Script.encode([data, 'DROP', btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)), 'CHECKSIG'])
        //script: btc.Script.encode([data, 'DROP', 'IF', 144, 'CHECKSEQUENCEVERIFY', 'DROP', btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)), 'CHECKSIG', 'ELSE', 'DUP', 'HASH160', sbtcWalletUint8, 'EQUALVERIFY', 'CHECKSIG', 'ENDIF'])
        //script: btc.Script.encode([data, 'DROP', btc.p2tr(hex.decode(pubkey2)).script])
        script: Script.encode([data, "DROP", p2tr(addrScript.pubkey).script])
      };
    }
  }
};
let PegInTransaction = _PegInTransaction;
__publicField(PegInTransaction, "create", async (network, fromBtcAddress, sbtcWalletAddress, stacksAddress) => {
  const me = new _PegInTransaction();
  me.net = network === "testnet" ? TEST_NETWORK : NETWORK;
  me.fromBtcAddress = fromBtcAddress;
  me.pegInData = {
    amount: 0,
    stacksAddress,
    sbtcWalletAddress
  };
  me.addressInfo = await fetchUtxoSet(fromBtcAddress);
  const sbtcAddr = Address(me.net).decode(sbtcWalletAddress);
  if (sbtcAddr.type !== "tr")
    throw new Error("sBTC address is not taproot?");
  me.addressInfo.pubkey2 = "deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f";
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
