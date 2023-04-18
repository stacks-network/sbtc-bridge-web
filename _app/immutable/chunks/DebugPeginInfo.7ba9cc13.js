var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { n as utils, q as getPublicKey, r as schnorr, C as CONFIG, v as fetchUtxoSet, x as fetchCurrentFeeRates, y as decodeStacksAddress } from "./stacks_connect.fd09cc29.js";
import { j as PegTransaction, g as TEST_NETWORK, N as NETWORK, A as Address, p as p2wpkh, h as hex, T as Transaction, s as secp256k1, S as Script, O as OutScript, R as RawTx, m as p2tr, n as p2wsh, M as MAGIC_BYTES_TESTNET, i as MAGIC_BYTES_MAINNET, P as PEGIN_OPCODE, c as base64, d as btc } from "./utils.41e44eab.js";
import { a as assert, c as concatByteArrays } from "./SignTransaction.a6eceb81.js";
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, U as validate_store, V as component_subscribe, v as validate_slots, e as empty, g as insert_hydration_dev, Z as noop, l as detach_dev, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, f as claim_space, u as attr_dev, x as add_location, O as append_hydration_dev, W as listen_dev, X as prevent_default, A as set_data_dev } from "./index.605ac338.js";
import { s as sbtcConfig } from "./stores.d1299e51.js";
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
      if (amount > this.maxCommit() - this.fee)
        ;
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
      if (!this.addressInfo.utxos)
        return;
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
    __publicField(this, "getOpDropPeginRequest", (mode, wallet) => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address is required");
      const data = this.buildData(this.pegInData.stacksAddress);
      const csvScript = this.getCSVScript(data);
      if (!csvScript)
        throw new Error("Script not allowed");
      const script = p2wsh(csvScript, this.net);
      const req = {
        fromBtcAddress: this.fromBtcAddress,
        status: 1,
        tries: 0,
        mode: mode === "op_drop" ? mode + "_" + csvScript.type : mode,
        amount: this.pegInData.amount,
        requestType: "wrap",
        wallet,
        stacksAddress: this.pegInData.stacksAddress,
        sbtcWalletAddress: this.pegInData.sbtcWalletAddress
      };
      if (mode === "op_drop") {
        req.timeBasedPegin = {
          wsh: hex.encode(script.script),
          paymentType: script.type,
          address: script.address,
          script: hex.encode(script.script),
          redeemScript: script.redeemScript ? hex.encode(script.redeemScript) : void 0,
          witnessScript: script.witnessScript ? hex.encode(script.witnessScript) : void 0
        };
      }
      return req;
    });
    /**
    getOpReturnPeginRequest = (wallet:string):PeginRequestI => {
    	if (!this.pegInData.stacksAddress) throw new Error('Stacks address is required')
    	return {
    		fromBtcAddress: this.fromBtcAddress,
    		status: 1,
    		mode: 'op_return',
    		requestType: 'wrap',
    		wallet,
    		stacksAddress: this.pegInData.stacksAddress,
    		sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
    	};
    }
    	*/
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
  /**
  getMSWitnessScript = ():PeginRequestI => {
  	if (!this.pegInData.stacksAddress) throw new Error('Stacks address is required')
  	const data = this.buildData(this.pegInData.stacksAddress);
  	const pubkey1 = this.addressInfo.pubkey
  	const pubkey2 = this.addressInfo.pubkey2
  	let script;
  	try {
  		const pmnt = btc.p2tr_ms(1, [pubkey1, pubkey2])
  		const wsh2 = {
  			type: 'wsh',
  			script: btc.Script.encode([data, 'DROP', pmnt.script])
  		}
  		script = btc.p2wsh(wsh2, this.net);
  	} catch (err) {
  		try {
  			const pmnt = btc.p2ms(1, [pubkey1, pubkey2])
  			const wsh2 = {
  				type: 'wsh',
  				script: btc.Script.encode([data, 'DROP', pmnt.script])
  			}
  			script = btc.p2wsh(wsh2, this.net);
  		} catch (err) {
  			script = {
  				type: 'unknown',
  				script: new Uint8Array()
  			};
  		}
  	}
  	return {
  		status: 1,
  		mode: 'op_drop_ms',
  		wallet: 'any',
  		requestType: 'wrap',
  		fromBtcAddress: this.fromBtcAddress,
  		stacksAddress: this.pegInData.stacksAddress,
  		sbtcWalletAddress: this.pegInData.sbtcWalletAddress,
  		timeBasedPegin: {
  			paymentType: script.type,
  			address: script.address,
  			script: hex.encode(script.script),
  			redeemScript: (script.redeemScript) ? hex.encode(script.redeemScript) : undefined,
  			witnessScript: (script.witnessScript) ? hex.encode(script.witnessScript) : undefined,
  		}
  	};
  }
   */
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
const file = "src/lib/components/common/DebugPeginInfo.svelte";
function create_if_block(ctx) {
  let div2;
  let div1;
  let div0;
  let a;
  let t0;
  let t1;
  let mounted;
  let dispose;
  let if_block = (
    /*showDetails*/
    ctx[2] && create_if_block_1(ctx)
  );
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text("Show transaction details");
      t1 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Show transaction details");
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      if (if_block)
        if_block.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      add_location(a, file, 30, 24, 1163);
      attr_dev(div0, "class", "col-12");
      add_location(div0, file, 30, 4, 1143);
      attr_dev(div1, "class", "row");
      add_location(div1, file, 29, 2, 1121);
      attr_dev(div2, "class", "");
      add_location(div2, file, 28, 0, 1104);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, a);
      append_hydration_dev(a, t0);
      append_hydration_dev(div2, t1);
      if (if_block)
        if_block.m(div2, null);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler*/
          ctx[5]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (
        /*showDetails*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div2, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(28:0) {#if showDebugInfo}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let div4;
  let div0;
  let t0;
  let div1;
  let t1_value = (
    /*tx*/
    ctx[0].fromBtcAddress + ""
  );
  let t1;
  let t2;
  let div2;
  let t3;
  let div3;
  let t4_value = (
    /*tx*/
    ctx[0].pegInData.amount + ""
  );
  let t4;
  let t5;
  let if_block = (
    /*peginRequest*/
    ctx[1] && create_if_block_2(ctx)
  );
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      t0 = text("From");
      div1 = element("div");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      t3 = text("Amount");
      div3 = element("div");
      t4 = text(t4_value);
      t5 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "From");
      div0_nodes.forEach(detach_dev);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, t1_value);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t3 = claim_text(div2_nodes, "Amount");
      div2_nodes.forEach(detach_dev);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t4 = claim_text(div3_nodes, t4_value);
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      if (if_block)
        if_block.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 34, 4, 1322);
      attr_dev(div1, "class", "col-10");
      add_location(div1, file, 34, 33, 1351);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 35, 4, 1401);
      attr_dev(div3, "class", "col-10");
      add_location(div3, file, 35, 35, 1432);
      attr_dev(div4, "class", "row");
      add_location(div4, file, 33, 2, 1300);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div4, div1);
      append_hydration_dev(div1, t1);
      append_hydration_dev(div4, t2);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, t3);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, t4);
      append_hydration_dev(div4, t5);
      if (if_block)
        if_block.m(div4, null);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*tx*/
      1 && t1_value !== (t1_value = /*tx*/
      ctx2[0].fromBtcAddress + ""))
        set_data_dev(t1, t1_value);
      if (dirty & /*tx*/
      1 && t4_value !== (t4_value = /*tx*/
      ctx2[0].pegInData.amount + ""))
        set_data_dev(t4, t4_value);
      if (
        /*peginRequest*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          if_block.m(div4, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(33:2) {#if showDetails}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  var _a, _b, _c;
  let div0;
  let t0;
  let div1;
  let t1_value = (
    /*peginRequest*/
    ctx[1].btcTxid + ""
  );
  let t1;
  let t2;
  let div2;
  let t3;
  let div3;
  let t4_value = (
    /*peginRequest*/
    ctx[1].stacksAddress + ""
  );
  let t4;
  let t5;
  let div4;
  let t6;
  let div5;
  let t7_value = (
    /*peginRequest*/
    ctx[1].sbtcWalletAddress + ""
  );
  let t7;
  let t8;
  let div6;
  let t9;
  let div7;
  let t10_value = (
    /*peginRequest*/
    ctx[1].status + ""
  );
  let t10;
  let t11;
  let div8;
  let t12;
  let div9;
  let t13_value = (
    /*peginRequest*/
    ((_a = ctx[1].timeBasedPegin) == null ? void 0 : _a.script) + ""
  );
  let t13;
  let t14;
  let div10;
  let t15;
  let div11;
  let t16_value = (
    /*peginRequest*/
    ((_b = ctx[1].timeBasedPegin) == null ? void 0 : _b.paymentType) + ""
  );
  let t16;
  let t17;
  let div12;
  let t18;
  let div13;
  let t19_value = (
    /*peginRequest*/
    ((_c = ctx[1].timeBasedPegin) == null ? void 0 : _c.witnessScript) + ""
  );
  let t19;
  let t20;
  let div14;
  let t21;
  let div15;
  let t22_value = (
    /*decodedScript*/
    ctx[3]() + ""
  );
  let t22;
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = text("Txid");
      div1 = element("div");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      t3 = text("Stacks Address");
      div3 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div4 = element("div");
      t6 = text("SBTC Wallet");
      div5 = element("div");
      t7 = text(t7_value);
      t8 = space();
      div6 = element("div");
      t9 = text("Pegin Status");
      div7 = element("div");
      t10 = text(t10_value);
      t11 = space();
      div8 = element("div");
      t12 = text("Script Hash");
      div9 = element("div");
      t13 = text(t13_value);
      t14 = space();
      div10 = element("div");
      t15 = text("Payment Type");
      div11 = element("div");
      t16 = text(t16_value);
      t17 = space();
      div12 = element("div");
      t18 = text("Witness Script");
      div13 = element("div");
      t19 = text(t19_value);
      t20 = space();
      div14 = element("div");
      t21 = text("Decoded Script");
      div15 = element("div");
      t22 = text(t22_value);
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Txid");
      div0_nodes.forEach(detach_dev);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, t1_value);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t3 = claim_text(div2_nodes, "Stacks Address");
      div2_nodes.forEach(detach_dev);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t4 = claim_text(div3_nodes, t4_value);
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t6 = claim_text(div4_nodes, "SBTC Wallet");
      div4_nodes.forEach(detach_dev);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      t7 = claim_text(div5_nodes, t7_value);
      div5_nodes.forEach(detach_dev);
      t8 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t9 = claim_text(div6_nodes, "Pegin Status");
      div6_nodes.forEach(detach_dev);
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t10 = claim_text(div7_nodes, t10_value);
      div7_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t12 = claim_text(div8_nodes, "Script Hash");
      div8_nodes.forEach(detach_dev);
      div9 = claim_element(nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t13 = claim_text(div9_nodes, t13_value);
      div9_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      div10 = claim_element(nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      t15 = claim_text(div10_nodes, "Payment Type");
      div10_nodes.forEach(detach_dev);
      div11 = claim_element(nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      t16 = claim_text(div11_nodes, t16_value);
      div11_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      div12 = claim_element(nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t18 = claim_text(div12_nodes, "Witness Script");
      div12_nodes.forEach(detach_dev);
      div13 = claim_element(nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      t19 = claim_text(div13_nodes, t19_value);
      div13_nodes.forEach(detach_dev);
      t20 = claim_space(nodes);
      div14 = claim_element(nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      t21 = claim_text(div14_nodes, "Decoded Script");
      div14_nodes.forEach(detach_dev);
      div15 = claim_element(nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t22 = claim_text(div15_nodes, t22_value);
      div15_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 37, 4, 1507);
      attr_dev(div1, "class", "col-10");
      add_location(div1, file, 37, 33, 1536);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 38, 4, 1589);
      attr_dev(div3, "class", "col-10");
      add_location(div3, file, 38, 43, 1628);
      attr_dev(div4, "class", "col-2");
      add_location(div4, file, 39, 4, 1687);
      attr_dev(div5, "class", "col-10");
      add_location(div5, file, 39, 40, 1723);
      attr_dev(div6, "class", "col-2");
      add_location(div6, file, 40, 4, 1786);
      attr_dev(div7, "class", "col-10");
      add_location(div7, file, 40, 41, 1823);
      attr_dev(div8, "class", "col-2");
      add_location(div8, file, 41, 4, 1875);
      attr_dev(div9, "class", "col-10");
      add_location(div9, file, 41, 40, 1911);
      attr_dev(div10, "class", "col-2");
      add_location(div10, file, 42, 4, 1979);
      attr_dev(div11, "class", "col-10");
      add_location(div11, file, 42, 41, 2016);
      attr_dev(div12, "class", "col-2");
      add_location(div12, file, 43, 4, 2089);
      attr_dev(div13, "class", "col-10");
      add_location(div13, file, 43, 43, 2128);
      attr_dev(div14, "class", "col-2");
      add_location(div14, file, 44, 4, 2203);
      attr_dev(div15, "class", "col-10");
      add_location(div15, file, 44, 43, 2242);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div0, anchor);
      append_hydration_dev(div0, t0);
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, t1);
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, t3);
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, t4);
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, t6);
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, t7);
      insert_hydration_dev(target, t8, anchor);
      insert_hydration_dev(target, div6, anchor);
      append_hydration_dev(div6, t9);
      insert_hydration_dev(target, div7, anchor);
      append_hydration_dev(div7, t10);
      insert_hydration_dev(target, t11, anchor);
      insert_hydration_dev(target, div8, anchor);
      append_hydration_dev(div8, t12);
      insert_hydration_dev(target, div9, anchor);
      append_hydration_dev(div9, t13);
      insert_hydration_dev(target, t14, anchor);
      insert_hydration_dev(target, div10, anchor);
      append_hydration_dev(div10, t15);
      insert_hydration_dev(target, div11, anchor);
      append_hydration_dev(div11, t16);
      insert_hydration_dev(target, t17, anchor);
      insert_hydration_dev(target, div12, anchor);
      append_hydration_dev(div12, t18);
      insert_hydration_dev(target, div13, anchor);
      append_hydration_dev(div13, t19);
      insert_hydration_dev(target, t20, anchor);
      insert_hydration_dev(target, div14, anchor);
      append_hydration_dev(div14, t21);
      insert_hydration_dev(target, div15, anchor);
      append_hydration_dev(div15, t22);
    },
    p: function update(ctx2, dirty) {
      var _a2, _b2, _c2;
      if (dirty & /*peginRequest*/
      2 && t1_value !== (t1_value = /*peginRequest*/
      ctx2[1].btcTxid + ""))
        set_data_dev(t1, t1_value);
      if (dirty & /*peginRequest*/
      2 && t4_value !== (t4_value = /*peginRequest*/
      ctx2[1].stacksAddress + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*peginRequest*/
      2 && t7_value !== (t7_value = /*peginRequest*/
      ctx2[1].sbtcWalletAddress + ""))
        set_data_dev(t7, t7_value);
      if (dirty & /*peginRequest*/
      2 && t10_value !== (t10_value = /*peginRequest*/
      ctx2[1].status + ""))
        set_data_dev(t10, t10_value);
      if (dirty & /*peginRequest*/
      2 && t13_value !== (t13_value = /*peginRequest*/
      ((_a2 = ctx2[1].timeBasedPegin) == null ? void 0 : _a2.script) + ""))
        set_data_dev(t13, t13_value);
      if (dirty & /*peginRequest*/
      2 && t16_value !== (t16_value = /*peginRequest*/
      ((_b2 = ctx2[1].timeBasedPegin) == null ? void 0 : _b2.paymentType) + ""))
        set_data_dev(t16, t16_value);
      if (dirty & /*peginRequest*/
      2 && t19_value !== (t19_value = /*peginRequest*/
      ((_c2 = ctx2[1].timeBasedPegin) == null ? void 0 : _c2.witnessScript) + ""))
        set_data_dev(t19, t19_value);
      if (dirty & /*decodedScript*/
      8 && t22_value !== (t22_value = /*decodedScript*/
      ctx2[3]() + ""))
        set_data_dev(t22, t22_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(div1);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(div2);
      if (detaching)
        detach_dev(div3);
      if (detaching)
        detach_dev(t5);
      if (detaching)
        detach_dev(div4);
      if (detaching)
        detach_dev(div5);
      if (detaching)
        detach_dev(t8);
      if (detaching)
        detach_dev(div6);
      if (detaching)
        detach_dev(div7);
      if (detaching)
        detach_dev(t11);
      if (detaching)
        detach_dev(div8);
      if (detaching)
        detach_dev(div9);
      if (detaching)
        detach_dev(t14);
      if (detaching)
        detach_dev(div10);
      if (detaching)
        detach_dev(div11);
      if (detaching)
        detach_dev(t17);
      if (detaching)
        detach_dev(div12);
      if (detaching)
        detach_dev(div13);
      if (detaching)
        detach_dev(t20);
      if (detaching)
        detach_dev(div14);
      if (detaching)
        detach_dev(div15);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(37:4) {#if peginRequest}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = (
    /*showDebugInfo*/
    ctx[4] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*showDebugInfo*/
        ctx2[4]
      )
        if_block.p(ctx2, dirty);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let decodedScript;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(6, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("DebugPeginInfo", slots, []);
  let { tx } = $$props;
  let { peginRequest } = $$props;
  let showDebugInfo = $sbtcConfig.userSettings.debugMode;
  let showDetails = false;
  $$self.$$.on_mount.push(function() {
    if (tx === void 0 && !("tx" in $$props || $$self.$$.bound[$$self.$$.props["tx"]])) {
      console.warn("<DebugPeginInfo> was created without expected prop 'tx'");
    }
    if (peginRequest === void 0 && !("peginRequest" in $$props || $$self.$$.bound[$$self.$$.props["peginRequest"]])) {
      console.warn("<DebugPeginInfo> was created without expected prop 'peginRequest'");
    }
  });
  const writable_props = ["tx", "peginRequest"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<DebugPeginInfo> was created with unknown prop '${key}'`);
  });
  const click_handler = () => $$invalidate(2, showDetails = !showDetails);
  $$self.$$set = ($$props2) => {
    if ("tx" in $$props2)
      $$invalidate(0, tx = $$props2.tx);
    if ("peginRequest" in $$props2)
      $$invalidate(1, peginRequest = $$props2.peginRequest);
  };
  $$self.$capture_state = () => ({
    sbtcConfig,
    hex,
    base64,
    btc,
    tx,
    peginRequest,
    showDebugInfo,
    showDetails,
    decodedScript,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("tx" in $$props2)
      $$invalidate(0, tx = $$props2.tx);
    if ("peginRequest" in $$props2)
      $$invalidate(1, peginRequest = $$props2.peginRequest);
    if ("showDebugInfo" in $$props2)
      $$invalidate(4, showDebugInfo = $$props2.showDebugInfo);
    if ("showDetails" in $$props2)
      $$invalidate(2, showDetails = $$props2.showDetails);
    if ("decodedScript" in $$props2)
      $$invalidate(3, decodedScript = $$props2.decodedScript);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*peginRequest*/
    2) {
      $$invalidate(3, decodedScript = () => {
        var _a;
        if (!peginRequest || !((_a = peginRequest.timeBasedPegin) == null ? void 0 : _a.witnessScript))
          return "";
        const script = OutScript.decode(hex.decode(peginRequest.timeBasedPegin.witnessScript));
        if (script.type === "ms" || script.type === "tr_ms" || script.type === "tr_ns")
          return script.type + ":" + script.pubkeys;
        if (script.type === "wsh")
          return script.type + ":" + script.hash;
        if (script.type === "wpkh")
          return script.type + ":" + script.hash;
        if (script.type === "pkh")
          return script.type + ":" + script.hash;
        if (script.type === "tr")
          return script.type + ":" + script.pubkey;
        if (script.type === "unknown")
          return script.type + ":" + script.script;
        else
          return script.type + ":" + script;
      });
    }
  };
  return [tx, peginRequest, showDetails, decodedScript, showDebugInfo, click_handler];
}
class DebugPeginInfo extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { tx: 0, peginRequest: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DebugPeginInfo",
      options,
      id: create_fragment.name
    });
  }
  get tx() {
    throw new Error("<DebugPeginInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tx(value) {
    throw new Error("<DebugPeginInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get peginRequest() {
    throw new Error("<DebugPeginInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set peginRequest(value) {
    throw new Error("<DebugPeginInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  DebugPeginInfo as D,
  PegInTransaction as P
};