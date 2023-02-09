
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

const btcPrecision = 100000000

export function fmtSatoshiToBitcoin(amountSats:number) {
  return  Math.round(amountSats) / btcPrecision
}

export function hexToAscii(input:string) {
  const buf = Buffer.from(input, "hex");
  return buf.toString("ascii");
}

export function hexToUTF8(input:string) {
  const buf = Buffer.from(input, "hex");
  return buf.toString("utf8");
}

export function fmtAmount(amount:number, currency:string) {
  if (currency === 'stx') {
    return formatter.format(amount).replace('$', '') // &#931;
  }
}

export function fmtNumber(amount:number|undefined) {
  if (amount === 0) return 0;
  if (amount) return new Intl.NumberFormat().format(amount);
}

export function truncate(stringy:string) {
  return stringy.substring(0, 6) + '..' + stringy.substring(stringy.length - 8);
}

