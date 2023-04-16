var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { d as TEST_NETWORK, N as NETWORK, h as hex, p as p2wpkh, T as Transaction, s as secp256k1, R as RawTx, M as MAGIC_BYTES_TESTNET, g as MAGIC_BYTES_MAINNET, P as PEGIN_OPCODE } from "./utils.7d5a9605.js";
import { n as utils, q as getPublicKey, r as schnorr, v as fetchUtxoSet, w as fetchTransaction, x as fetchCurrentFeeRates, y as decodeStacksAddress } from "./stacks_connect.185d0304.js";
import { a as assert, c as concatByteArrays } from "./structured-data.02eb7e1c.js";
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _ReclaimTransaction = class {
  constructor() {
    __publicField(this, "unconfirmedUtxos", false);
    __publicField(this, "requiredConfirmed", 6);
    __publicField(this, "net");
    __publicField(this, "ready", false);
    __publicField(this, "fromBtcAddress");
    __publicField(this, "reclaimTx");
    __publicField(this, "pegInData", {
      stacksAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN",
      // default for testing
      sbtcWalletAddress: "tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7",
      // default for testing
      amount: 0
    });
    __publicField(this, "addressInfo", {});
    __publicField(this, "fees", [2e4, 35e3, 5e4]);
    __publicField(this, "fee", 0);
    __publicField(this, "scureFee", 0);
    __publicField(this, "dust", 500);
    __publicField(this, "feeInfo", { low_fee_per_kb: 2e4, medium_fee_per_kb: 2e4, high_fee_per_kb: 2e4 });
    __publicField(this, "getInputsForDisplay", () => {
      const inputs = [];
      for (const utxo of this.addressInfo.utxos) {
        inputs.push({ txid: hex.decode(utxo.txid), index: utxo.vout });
      }
      return inputs;
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
    __publicField(this, "setAmount", (amount) => {
      console.log(amount);
    });
    __publicField(this, "getChange", () => {
      return this.maxCommit() - this.pegInData.amount - this.fee;
    });
    __publicField(this, "setPegInData", (pegInData) => {
      this.pegInData = pegInData;
    });
    __publicField(this, "setFeeRate", (rate) => {
      this.fee = rate >= 0 && rate < 3 ? this.fees[rate] : this.fees[1];
      if (this.pegInData.amount + this.fee > this.maxCommit()) {
        this.pegInData.amount = this.maxCommit() - this.fee;
      }
    });
    __publicField(this, "isUTXOConfirmed", (utxo) => {
      return utxo.tx.confirmations >= 0;
    });
    __publicField(this, "calculateFees", () => {
      if (!this.ready)
        throw new Error("Not ready!");
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
    __publicField(this, "buildSignerTransaction", () => {
      var _a, _b, _c;
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const btcTxid = (_a = this.pegInData.requestData) == null ? void 0 : _a.btcTxid;
      const witnessScript = (_b = this.pegInData.requestData) == null ? void 0 : _b.btcTxid;
      if (!btcTxid)
        throw new Error("Missing data required!");
      if (!((_c = this.pegInData.requestData) == null ? void 0 : _c.vout))
        throw new Error("Missing data required!");
      if (!witnessScript)
        throw new Error("Missing data required!");
      const tx = new Transaction({ allowUnknowOutput: true, lockTime: 1, allowLegacyWitnessUtxo: true });
      const nextI = {
        txid: hex.decode(btcTxid),
        index: 0,
        witnessUtxo: {
          script: hex.decode(witnessScript),
          amount: BigInt(this.pegInData.requestData.vout.value)
        }
      };
      tx.addInput(nextI);
      tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.pegInData.amount - this.fee), this.net);
      return tx;
    });
    __publicField(this, "buildReclaimTransaction", () => {
      var _a, _b;
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const btcTxid = (_a = this.pegInData.requestData) == null ? void 0 : _a.btcTxid;
      const witnessScript = (_b = this.pegInData.requestData) == null ? void 0 : _b.timeBasedPegin.witnessScript;
      if (!btcTxid)
        throw new Error("Missing data required!");
      if (!witnessScript)
        throw new Error("Missing data required!");
      const tx = new Transaction({ allowUnknowOutput: true, lockTime: 1, allowLegacyWitnessUtxo: true });
      this.addInputs(tx, btcTxid, witnessScript);
      tx.addOutputAddress(this.fromBtcAddress, BigInt(this.maxCommit() - this.fee), this.net);
      return tx;
    });
    /**
     * The input we want to spend is not in our UTXO set.
     * Instead its the first output of the reclaimTx transaction.
     * This output either pays to the stackers or to the original user
     * depending on time locks.
     * @param tx 
     */
    __publicField(this, "addInputs", (tx, btcTxid, witnessScript) => {
      const script = RawTx.decode(hex.decode(this.reclaimTx.hex));
      const output = script.outputs[0];
      const nextI = {
        txid: hex.decode(btcTxid),
        index: 0,
        witnessScript: hex.decode(witnessScript),
        witnessUtxo: {
          script: output.script,
          //hex.decode(this.pegInData.requestData.timeBasedPegin.witnessScript),
          amount: BigInt(output.amount)
        }
      };
      tx.addInput(nextI);
      for (const utxo of this.addressInfo.utxos) {
        const script2 = RawTx.decode(hex.decode(utxo.tx.hex));
        tx.addInput({
          txid: hex.decode(utxo.txid),
          index: utxo.vout,
          witnessUtxo: {
            script: script2.outputs[utxo.vout].script,
            amount: BigInt(utxo.value)
          }
        });
      }
    });
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
    	private getOpDropP2shScript(stacksAddress:string, sbtcWalletAddress:string) {
    		const data = this.buildData(stacksAddress);
    		const walletUint8 = new TextEncoder().encode(sbtcWalletAddress);
    		let asmScript = btc.Script.encode([data, 'DROP', 'DUP', 'HASH160', walletUint8, 'EQUALVERIFY', 'CHECKSIG'])
    		if (isMini) {
    			asmScript = btc.Script.encode([
    				'IF', 
    				data, 'DROP', 'DUP', 'HASH160', walletUint8, 'EQUALVERIFY', 'CHECKSIG',
    				'ELSE', 
    				144, 'CHECKSEQUENCEVERIFY', 'DROP',
    				btc.OutScript.encode(btc.Address(this.net).decode(this.fromBtcAddress)),
    				'CHECKSIG',
    				'ENDIF'
    			])
    		}
    		return asmScript;
    	}
    	*/
    // code as data
    // one of two multisig
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
  maxCommit() {
    var _a, _b;
    if (!this.ready)
      return 0;
    const summ = (_b = (_a = this.addressInfo) == null ? void 0 : _a.utxos) == null ? void 0 : _b.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);
    return summ || 0;
  }
  //setAmount = (amount:number) => void;
  setStacksAddress(stacksAddress) {
    if (!stacksAddress) {
      throw new Error("Address not found");
    } else if (_ReclaimTransaction.FORMAT.test(stacksAddress)) {
      throw new Error("please remove white space / special characters");
    }
    const decoded = decodeStacksAddress(stacksAddress.split(".")[0]);
    if (this.net === TEST_NETWORK && decoded[0] !== 26) {
      throw new Error("Please enter a valid stacks blockchain testnet address");
    }
    if (this.net === NETWORK && decoded[0] !== 22) {
      throw new Error("Please enter a valid stacks blockchain mainnet address");
    }
    this.pegInData.stacksAddress = stacksAddress;
  }
};
let ReclaimTransaction = _ReclaimTransaction;
__publicField(ReclaimTransaction, "FORMAT", /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/);
__publicField(ReclaimTransaction, "create", async (network, btcTxid, fromBtcAddress, sbtcWalletAddress) => {
  const me = new _ReclaimTransaction();
  me.net = network === "testnet" ? TEST_NETWORK : NETWORK;
  me.fromBtcAddress = fromBtcAddress;
  me.pegInData = {
    amount: 0,
    stacksAddress: void 0,
    sbtcWalletAddress
  };
  me.addressInfo = await fetchUtxoSet(fromBtcAddress);
  me.reclaimTx = await fetchTransaction(btcTxid);
  const btcFeeRates = await fetchCurrentFeeRates();
  me.feeInfo = btcFeeRates.feeInfo;
  me.ready = true;
  return me;
});
__publicField(ReclaimTransaction, "hydrate", (o) => {
  const me = new _ReclaimTransaction();
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
  ReclaimTransaction as R
};
