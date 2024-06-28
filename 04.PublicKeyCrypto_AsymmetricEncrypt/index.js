import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { decodeUTF8 } from "tweetnacl-util";


const key_pair=Keypair.generate();
const message="this is a secret message";
const message_bytes=decodeUTF8(message);

const signature=nacl.sign.detached(message_bytes,key_pair.secretKey);
//signing with private Key so later the actual source/author can be verified
console.log('signature: ', signature);

const verified=nacl.sign.detached.verify(message_bytes,signature,key_pair.publicKey);
//verifying with public Key
console.log('verified: ', verified);