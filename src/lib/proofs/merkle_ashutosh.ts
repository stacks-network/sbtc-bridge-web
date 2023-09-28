import { sha256 } from '@noble/hashes/sha256';
//const crypto=require('crypto')

//to convert given transction hash to LittleEndian
const LETransaction = (BETransaction:Array<string>) => {
  const bytes = new Array(32);
  for (let i = 0, j = 31; i < BETransaction.length; i+=2, j--)
    bytes[j] = parseInt(BETransaction[i]+BETransaction[i+1],16)
    return new Buffer(bytes)
  }
  //to convert back hex encoded Big Endian
  const BETransaction = function (buffered:Array<Uint8Array>) {
  let hexa = "";
  for (let i = buffered.length-1; i >= 0; i--) {
    const digits =  buffered[i].toString(16);
    hexa += ("0" + digits).slice(-2);
  }
  return hexa
}
//get sha256 hash of byte buffer
//const sha256 = (bytebuffer)=> {
  //return crypto.createHash("SHA256").update(bytebuffer).digest();
  //return crypto.createHash("SHA256").update(bytebuffer).digest();
//}
// 2-D array to save merkle tree and compute proof
const merkletree=[];

const getMerkleRoot = function(transactions:Array<Uint8Array>, callback:any) {
  //adding leaves of transactions to merkle tree
  merkletree[merkletree.length]=transactions
  //return root node
  if(transactions.length===1)
  {
    return callback('', BETransaction(transactions[transactions.length-1]))
  }
  //adding last node to complete merkle tree
  if(transactions.length%2!=0)
  {
    transactions[transactions.length]=transactions[transactions.length-1]
  }
  const merkleleaves=[];
  //iterating over transactions, forming pairs and hashing nodes
  for( let i=0; i < transactions.length; i+=2 )
  {
    for(let j=0; i < transactions.length; j++ )
    {
      const concatenated = Buffer.concat([transactions[i],transactions[i+1]])
      merkleleaves[j] = sha256(sha256(concatenated))
    }
  }
  getMerkleRoot(merkleleaves,callback)
}