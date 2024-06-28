import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import pkg from 'tweetnacl-util';
const { decodeUTF8 } = pkg;


const key_pair=Keypair.generate();
const message="this is a secret message";
const message_bytes=decodeUTF8(message);

const signature=nacl.sign.detached(message_bytes,key_pair.secretKey);
//signing with private Key so later the actual source/author can be verified
console.log('signature: ', signature);

const verified=nacl.sign.detached.verify(message_bytes,signature,key_pair.publicKey);
//verifying with public Key
console.log('verified: ', verified);


//also messages encrypted with public key can be decrypted with private key
//encrypted with public key
const message2 = "this is another secret message";
const message_bytes2 = decodeUTF8(message2);
const encrypted2=nacl.box(message_bytes2,key_pair.publicKey,key_pair.secretKey);
console.log('encrypted: ', encrypted);

//decrypted with private key    
const decrypted=nacl.box.open(encrypted2,key_pair.secretKey,key_pair.publicKey);
console.log('decrypted: ', decrypted);