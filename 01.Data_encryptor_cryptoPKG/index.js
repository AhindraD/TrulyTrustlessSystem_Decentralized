const crypto = require('crypto');

const DATA = ["lorem", "ipsum", "dolor", "sit", "amet"];

function encrypt(data, key, iv) {
    const algorithm = "aes-256-cbc";
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    // console.log('encrypted1: ', encrypted);
    encrypted += cipher.final('hex');
    return encrypted;
}


function decrypt(encrypted, key, iv) {
    const algorithm = "aes-256-cbc";
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    // console.log('decrypted1: ', decrypted);
    decrypted += decipher.final('utf8');
    return decrypted;
}

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const Encrypted = DATA.map((elem, indx) => encrypt(elem, key, iv));
console.log('encrypted: ', Encrypted);
const Decrypted = Encrypted.map((encrypted, indx) => decrypt(encrypted, key, iv));
console.log('decrypted: ', Decrypted);