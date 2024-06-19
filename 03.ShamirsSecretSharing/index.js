import SSS from "shamirs-secret-sharing";

const Encryption_Key = "secret_key";

const secret = Buffer.from(Encryption_Key);
const shares = SSS.split(secret, { shares: 5, threshold: 4 });
console.log('shares: ', shares);

const smallerShares = shares.slice(0, 3);//have to equal or greater than threshold

const recovered = SSS.combine(smallerShares);

console.log(recovered.map(elem => elem.toString())); 
//cannot print the secret_key in chunks i.e. not any single entity can get any part of the secret_key

console.log(recovered.toString());
// Prints "secret_key" if it satisfies the threshold condition
//else prints gibberish