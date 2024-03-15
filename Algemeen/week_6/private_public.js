//Create a JWT with public and private key

const jwt = require('jsonwebtoken');

//create 2 new keys with ssl
var crypto = require('crypto');
const { generateKeyPair } = require('crypto');

generateKeyPair('rsa', {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by the Node.js docs
        format: 'pem' // the format to encode the key
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem', // the format to encode the key,
        cipher: 'aes-256-cbc', // the encryption standard
        passphrase: 'your-very-own-secret-passphrase' // the passphrase for the private key
    }
}, (err, publicKey, privateKey) => {
    // Handle errors and use the keys as needed
    if (err) {
        console.error('Error generating key pair: ', err);
    } else {
        console.log('Public Key:', publicKey); //instagram
        console.log('Private Key:', privateKey); //save in epic super safe store


        //create a token with the private key
        var token = jwt.sign({ naam: 'Stijn', favodier: 'Kat' }, privateKey, { expiresIn: '1h' });
        console.log(token);

        // look at token body
        // var decoded = jwt.decode(token, { complete: true });
        // console.log(decoded);

        //verify token with public key
        var verified = jwt.verify(token, publicKey);
        console.log(verified);

    }
});


