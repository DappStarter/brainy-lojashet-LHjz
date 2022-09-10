require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name renew sad equip inflict drip fringe genre'; 
let testAccounts = [
"0xff3131d41477d16ee01d6077998654a9918239cbac88c21fb3f5b4553cec059e",
"0x4080168f6e3f838c64f8ef29c259a9a58864b29744fababcd70a1e352963e3fb",
"0x2d149f587cd29531488cc0d5cccd655086476d4ea1b458f52656bacdcc650b93",
"0x236951945209578da37f08d57bf6aa3d7c25f6cfc579cd14189715fbeeb6f316",
"0x66761e43929413247ebef01be0ad8bca13d9b4ea84169172cca1821a108d6606",
"0x1c2673988eab0da1598c0df31c59a645011dd5df8caba6f56c207d54a1d01f5e",
"0xd193c6adf7cad4342c2966023af63447a5da47951fb50b944bdab4681d7228a4",
"0x85b8ed7bcbe69cb42effdee650071925b34cefd2b1514c49c5f56c43ab516f82",
"0xebe17aa77a1762190e432c8bc1a5c21e1320d2cda36194ccb701dfdef73aebac",
"0x147f066febc1e311c35d8b8aebb08c0204f15269f47ae0737a8843c67bf3c0cc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

