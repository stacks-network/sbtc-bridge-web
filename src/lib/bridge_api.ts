import { CONFIG } from '$lib/config';
import type { PeginRequestI, WrappedPSBT, AddressObject } from 'sbtc-bridge-lib' 
import { hex, base64 } from '@scure/base';
import type { Transaction } from '@scure/btc-signer'
import * as secp from '@noble/secp256k1';
import * as btc from '@scure/btc-signer';
//import { toStorable, getStacksAddressFromSignature } from 'sbtc-bridge-lib' 
import { toStorable } from 'sbtc-bridge-lib' 
import { verifyMessageSignatureRsv } from '@stacks/encryption';
import { hashMessage } from '@stacks/encryption';
import { recoverSignature } from "micro-stacks/connect";
import { c32address } from 'c32check';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';

function addNetSelector (path:string) {
  if (CONFIG.VITE_NETWORK === 'testnet' || CONFIG.VITE_NETWORK === 'devnet') {
    return path.replace('bridge-api', 'bridge-api/testnet');
  } else {
    return path.replace('bridge-api', 'bridge-api/mainnet');
  }
}
async function fetchCatchErrors(path:string) {
  try {
    const response = await fetch(path);
    return response;
  } catch (err:any) {
    console.log('fetchCatchErrors: ', err)
    return new Response(undefined, {
      status: 505,
    }) 
  }
}

async function extractResponse(response:any) {
  try {
    return await response.json();
  } catch(err) {
    try {
      return await response.text();
    } catch(err) {
      console.log('error fetching response.. ', err)
    }
  }
}

export async function sendRawTxDirectBlockCypher(hex:string) {
  //const url = CONFIG.VITE_MEMPOOL_EXPLORER + '/tx';
  const url = addNetSelector(CONFIG.VITE_BLOCKCYPHER_EXPLORER + '/txs/push');
  console.log('sendRawTx:mempoolUrl: ', url)
  const response = await fetch(url, {
    method: 'POST',
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({tx: hex})
  });
  //if (response.status !== 200) console.log('Mempool error: ' + response.status + ' : ' + response.statusText);
  try {
    return await response.json();
  } catch (err) {
    try {
      console.log(err)
      return await response.text();
    } catch (err1) {
      console.log(err1)
    }
  }
  return 'success';
}

export async function sendRawTransaction(tx: { hex: string; }) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/sendrawtx');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tx)
  });

  if (response.status !== 200) {
    console.log('Bitcoin tx send error.');
  }
  return await extractResponse(response);
}

export async function fetchKeys() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/keys');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const res = await extractResponse(response);
  return res;
}

export async function signAndBroadcast(wrappedPsbt:WrappedPSBT) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/signAndBroadcast');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(wrappedPsbt)
  });
  let res:any;
  try {
    res = await response.json();
  } catch (err) {
    try {
      console.log(err)
      res = await response.text();
    } catch (err1) {
      console.log(err1)
    }
  }
  return res;
}

export async function fetchBurnBlockCount() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/blocks/count');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const txs = await extractResponse(response);
  return txs;
}

export async function fetchWalletProcessPsbt(psbt: { hex: string; }) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/walletprocesspsbt');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(psbt)
  });
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const signedPsbt = await extractResponse(response);
  return signedPsbt;
}

export async function savePeginCommit(peginRequest:PeginRequestI):Promise<any> { //<PeginRequestI|{insertedId:string; acknowledged:boolean;}>  {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegins');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(peginRequest)
  });
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const signedPsbt = await extractResponse(response);
  return signedPsbt;
}
export async function updatePeginCommit(peginRequest:PeginRequestI):Promise<any> { //<PeginRequestI|{insertedId:string; acknowledged:boolean;}>  {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegins');
  const response = await fetch(path, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(peginRequest)
  });
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const signedPsbt = await extractResponse(response);
  return signedPsbt;
}

export async function fetchPeginById(_id:string):Promise<PeginRequestI> {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegins/' + _id);
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Commit not found.');
  }
  const pegin = await extractResponse(response);
  return pegin;
}

export async function doPeginScan():Promise<Array<PeginRequestI>> {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegin-scan');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Unable to scan.');
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function fetchPegins():Promise<Array<PeginRequestI>> {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegins');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Request failed to url: ' + path);
    return [];
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function fetchPeginsByStacksAddress(stxAddress:string):Promise<Array<PeginRequestI>> {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/pegins/search/' + stxAddress);
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Request failed to url: ' + path);
    return [];
  }
  const pegins = await extractResponse(response);
  return pegins;
}

export async function fetchCurrentFeeRates() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/blocks/fee-estimate');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    return {
        feeInfo: {
          low_fee_per_kb: 19226,
          medium_fee_per_kb: 29679,
          high_fee_per_kb: 44424
        }
    }
  }
  const txs = await response.json();
  return txs;
}

export async function fetchTransaction(txid:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/' + txid);
  const response = await fetchCatchErrors(path);
  //if (response.status !== 200) {
  // console.log('Bitcoin tx not known - is the network correct?');
  //}
  return await extractResponse(response);
}

export async function fetchTransactionHex(txid:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/' + txid + '/hex');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin hex not known - is the network correct?');
  }
  return await extractResponse(response);
}

export async function fetchAddressTransactions(address:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/txs');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  return await extractResponse(response);
}

export async function fetchUtxoSet(address:string) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/wallet/address/' + address + '/utxos?verbose=true');
  const response = await fetchCatchErrors(path);
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  return await extractResponse(response);
}

export async function fetchSbtcEvents() {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/events/0');
    const response = await fetchCatchErrors(path);
    return await extractResponse(response);
  } catch (err) {
    return [];
  }
}

export async function fetchSbtcWalletAddress() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/wallet-address');
  const response = await fetchCatchErrors(path);
  return await extractResponse(response);
}

export async function fetchSbtcData() {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/data');
  try {
    const response = await fetchCatchErrors(path);
    return await extractResponse(response);
  } catch(err) {
    return {}
  }
}

export async function fetchUserSbtcBalance(stxAddress:string) {
  try {
    const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/address/' + stxAddress + '/balance');
    const response = await fetch(path);
    return await extractResponse(response);
  } catch (err) {
    return { balance: 0 };
  }
}
export async function fetchUserBalances(adrds:AddressObject) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/sbtc/address/balances');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adrds)
  });
  if (response.status !== 200) {
    console.log('Bitcoin address not known - is the network correct?');
  }
  const res = await extractResponse(response);
  return res;
}

export async function sign(wrappedPsbt:WrappedPSBT) {
  const path = addNetSelector(CONFIG.VITE_BRIDGE_API + '/btc/tx/sign');
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(wrappedPsbt)
  });
  let res:any;
  try {
    res = await response.json();
  } catch (err) {
    try {
      console.log(err)
      res = await response.text();
    } catch (err1) {
      console.log(err1)
    }
  }
  return res;
}


/**
export async function signhere(wrappedPsbt:WrappedPSBT): Promise<WrappedPSBT> {
  if (!wrappedPsbt?.stxSignature || !wrappedPsbt?.stxSignature.message) {
    wrappedPsbt.broadcastResult = { failed: true, reason: 'No signature data found.' }
    return wrappedPsbt;
  }
  const verified = verifyMessageSignatureRsv({
    message:wrappedPsbt.stxSignature.message, 
    publicKey: wrappedPsbt.stxSignature.publicKey,
    signature: wrappedPsbt.stxSignature.signature 
  });
  if (!verified) {
    wrappedPsbt.broadcastResult = { failed: true, reason: 'Invalid signature.' }
    return wrappedPsbt;
  }
  const msgHash = hashMessage(wrappedPsbt.stxSignature.message);
  const stxAddresses = await getStacksAddressFromSignature(msgHash, wrappedPsbt.stxSignature.signature, 0, wrappedPsbt.stxSignature.publicKey);
  const stacksAddress = (CONFIG.VITE_NETWORK === 'testnet') ? stxAddresses.tp2pkh : stxAddresses.mp2pkh;

  console.log('sign: ', wrappedPsbt);
  console.log('sign: stxAddresses: ', stxAddresses);
  const pegin:PeginRequestI = await fetchPeginById(wrappedPsbt.depositId);

  if (pegin.originator !== stacksAddress) {
    wrappedPsbt.broadcastResult = { failed: true, reason: 'Stgacks address of signer is different to the deposit originator: ' + pegin.originator + ' p2pkh address recovered: ' + stacksAddress };
    return wrappedPsbt;
  }

  const net = (CONFIG.VITE_NETWORK === 'testnet') ? btc.TEST_NETWORK : btc.NETWORK;

  const transaction:Transaction = new btc.Transaction({ allowUnknowInput: true, allowUnknowOutput: true });
  const script = toStorable(pegin.commitTxScript)
  
  console.log('sign: script: ', script);

  if (pegin.status !== 2 || !pegin.btcTxid || !script)  {
    wrappedPsbt.broadcastResult = { failed: true, reason: 'Incorrect status to be revealed / reclaimed' }
    return wrappedPsbt;
  }
  if (!pegin.commitTxScript || !pegin.commitTxScript.address || !script.tapMerkleRoot || !script.tapInternalKey)  {
    wrappedPsbt.broadcastResult = { failed: true, reason: 'Incorrect data passed' }
    return wrappedPsbt;
  }

  const sbtcWalletAddrScript = btc.Address(net).decode(pegin.sbtcWalletAddress)
  if (sbtcWalletAddrScript.type !== 'tr') throw new Error('Taproot required')
  const commitAddressScript = btc.Address(net).decode(pegin.commitTxScript.address);
  if (commitAddressScript.type !== 'tr') throw new Error('Taproot required')
  
  console.log('sign: commitAddressScript: ', commitAddressScript);

  const commitTx = await fetchTransaction(pegin.btcTxid)
  const nextI:btc.TransactionInput = {
    txid: hex.decode(pegin.btcTxid),
    index: 0,
    nonWitnessUtxo: (commitTx.hex),
    tapLeafScript: script.tapLeafScript,
    tapMerkleRoot: script.tapMerkleRoot as Uint8Array
  }
  console.log('nextI: ', nextI);
  transaction.addInput(nextI);

  let outAddr = pegin.sbtcWalletAddress;
  if (wrappedPsbt.txtype === 'reclaim') outAddr = commitTx.vin[0]?.prevout?.scriptpubkey_address

  const fee = 4000 //transaction.fee;
  //console.log('sign: fee: ', fee);
  if (!pegin.vout) throw new Error('no vout??')
  const amount = pegin.vout.value - fee;
  console.log('pegin.vout.value: ', pegin.vout.value);
  console.log('fee: ', fee);
  
  transaction.addOutputAddress(pegin.fromBtcAddress, BigInt(amount), net);

  try {
    if (wrappedPsbt.txtype === 'reclaim') {
      transaction.sign(hex.decode(BTC_SCHNORR_KEY_RECLAIM));
    } else {
      //transaction.sign(hex.decode(BTC_SCHNORR_KEY_REVEAL));
    }
    console.log('sign: signed');
    transaction.finalize();
  } catch (err:any) {
    console.log('Error signing: ', err)
  }
  //const tx = btc.Transaction.fromRaw(hex.decode(wrappedPsbt.tx), { allowUnknowInput: true, allowUnknowOutput: true });
  wrappedPsbt.signedPsbt = base64.encode(transaction.toPSBT())
  //console.log('b64: ', wrappedPsbt.signedPsbt)
  const ttttt = btc.Transaction.fromPSBT(transaction.toPSBT());
  wrappedPsbt.signedTransaction = hex.encode(ttttt.toBytes());
  //console.log('hex: ', wrappedPsbt.signedTransaction)
  return wrappedPsbt;
}

export async function getStacksAddressFromSignature(messageHash:Uint8Array, signature:string, compression:number, verifiedPubKey:string) {
	//console.log('getStacksAddressFromSignature: messageHash: ' + hex.encode(messageHash))
	//console.log('getStacksAddressFromSignature: signature: ' + signature)
	let pubkey;
	try {
		// works for Hiro sig but not unit test sig ?
		const sigM = recoverSignature({ signature: signature, mode: 'rsv' }); // vrs to rsv
		let sig = new secp.Signature(sigM.signature.r, sigM.signature.s);
		sig = sig.addRecoveryBit(0);
		const pubkeyM = sig.recoverPublicKey(messageHash);
		pubkey = hex.decode(pubkeyM.toHex());
    console.log(pubkeyM.toHex())
    console.log(verifiedPubKey)
	} catch (err) {
		const sig = secp.Signature.fromCompact(signature);
		let s1 = new secp.Signature(sig.r, sig.s, 1)
		s1 = s1.addRecoveryBit(1);
		const pubkey1:secp.ProjectivePoint = s1.recoverPublicKey(messageHash);
		pubkey = hex.decode(pubkey1.toHex());
		//const pubkey0 = getPublicKeyFromSignature({ hash: hex.(msgUint8), signature: s1.signature, recoveryBytes: s1.recoveryBytes });	
	}

	const addresses = {
		tp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2PKH),
		tp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.testnetP2SH),
		mp2pkh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2PKH),
		mp2sh: publicKeyToStxAddress(pubkey, StacksNetworkVersion.mainnetP2SH),
	}
	//console.log('getStacksAddressFromSignature: addresses: ', addresses)
	return addresses;
}
export function publicKeyToStxAddress(
	publicKey: Uint8Array,
	addressVersion: StacksNetworkVersion = StacksNetworkVersion.mainnetP2PKH): string {
	return c32address(addressVersion, hex.encode(hash160(publicKey)));
}
  
export function hash160(input: Uint8Array): Uint8Array {
	const sha = sha256(input);
	return ripemd160(sha);
}
enum StacksNetworkVersion {
	mainnetP2PKH = 22, // 'P'   MainnetSingleSig
	mainnetP2SH = 20, // 'M'    MainnetMultiSig
	testnetP2PKH = 26, // 'T'   TestnetSingleSig
	testnetP2SH = 21, // 'N'    TestnetMultiSig
}
*/