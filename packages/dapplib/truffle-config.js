require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note pave put hunt robot equal ghost'; 
let testAccounts = [
"0xcdb1d520a5352f80a9e00599b56c410af1eaddd94e486cde6b8484f277b1851a",
"0xe5a818053083371bee0e8882d2a13ed4c882c440e944be2ac75d37dfdb018bd2",
"0x632337c208b5b16c14f116f872b3eec6c99950cd2f24326c95c3272464ddf49e",
"0x58e9941329b8d317c5c5ae91e582526b2b4ff21724f12a1efe18fc2d6855c743",
"0xbf1fe25763c6884adbb1cf6a50d328d6a0450a898124097416e983c0598e3cd4",
"0xeed5b55064f49cb31c3cf63c8dc787f262115f42a87908cf38b5345b03cec723",
"0x38cfb39977acecfa44789678d9ad3c7a21c4f372102ce8e29a613d34ff0f61a7",
"0x44a842062840419028ee5d16b49d8192a44589401d9e8293ae072664b018eb01",
"0xa2a8f9566965e95b1f03879f9026d6ed062e77d36df542767084749dc936d7d7",
"0xf5c77baeefdd907180c26a0ba67e6d812774de3533af274dcf805a3b8d1f87b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


