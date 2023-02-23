import type { SbtcConfig } from '$types/sbtc_config';
import { maxCommit } from "$lib/utxos";
import { sbtcConfig, tx0, tx1, tx0Hex, tx1Hex } from './test_data';
import type { UTXO } from '$types/utxo';
import util from 'util'
import { assert } from 'console';
import { calculateFee } from "$lib/psbt";
import { payments } from 'bitcoinjs-lib';
import { getNetwork } from "$lib/psbt";

const network = getNetwork()

export function getBtcAddress(pubKey:Buffer) {
	return payments.p2sh({
	redeem: payments.p2wpkh({
		pubkey: pubKey,
		network: network,
	}), network: network,
	}).address;
}

export function getBtcAddressLegacy(pubKey:Buffer) {
	const { address } = payments.p2pkh({ pubkey: pubKey });
	return address;
}

export function getBtcAddressP2WPKH(pubKey:Buffer) {
	//const p2shObj = payments.p2sh({redeem: payments.p2wpkh({ pubkey: pubKey, network: network })});
	//const redeemScript = p2shObj?.redeem?.output;
	//if (!redeemScript) throw new Error('')
	const {address} = payments.p2wpkh({ pubkey: pubKey, network });
	return address;
}

export function getBtcAddressP2SHP2WPKH(pubKey:Buffer) {
	const p2shObj = payments.p2sh({redeem: payments.p2wpkh({ pubkey: pubKey, network: network })});
	//const redeemScript = p2shObj?.redeem?.output;
	//if (!redeemScript) throw new Error('')
	//const {address} = payments.p2wpkh({ pubkey: pubKey, network });
	return p2shObj.address;
}

export async function attachTxs(utxos:[UTXO]) {
	for (const utxo of utxos) {
	  if (utxo.txid === '894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04') {
		fetchMock.mockIf(/^.*894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04\/hex/, () => {
		  return JSON.stringify(tx1Hex);
		});
		fetchMock.mockIf(/^.*894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04$/, () => {
		  return JSON.stringify(tx1);
		});
		utxo.tx = tx1;
		utxo.tx.hex = tx1Hex;
	  } else if (utxo.txid === '5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508') {
		fetchMock.mockIf(/^.*5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508\/hex/, () => {
		  return JSON.stringify(tx0Hex);
		});
		fetchMock.mockIf(/^.*5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508$/, () => {
		  return JSON.stringify(tx0);
		});
		utxo.tx = tx0;
		utxo.tx.hex = tx0Hex;
	  }
	  //utxo = await attachTransaction(network, utxo);
	}
	return utxos;
  }
  
  export async function prepareFee(rate:string, utxos:[UTXO], printme:boolean) {
	const conf:SbtcConfig = sbtcConfig;
	conf.utxos = await attachTxs(utxos);
	if (printme) console.log('tx0:', util.inspect(conf.utxos, false, null, true /* enable colors */))
  
	const maxPeg = maxCommit(conf.utxos);
	// fee calculation see: https://github.com/bitcoinjs/bitcoinjs-lib/issues/1566
	// create a transaction with no fee (change output value = input total - send total)
	conf.pegIn = true;
	conf.feeCalc.pegInFeeCalc.pegInAmount = maxPeg / 2;
	const change = maxPeg - conf.feeCalc.pegInFeeCalc.pegInAmount;
	assert(maxPeg === conf.feeCalc.pegInFeeCalc.pegInAmount + change)
	if (rate === 'high') conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.high_fee_per_kb;
	else if (rate === 'medium') conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.medium_fee_per_kb;
	else  conf.feeCalc.pegInFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
  
  
	const res = await calculateFee(conf);
	return res;
  }
  
  