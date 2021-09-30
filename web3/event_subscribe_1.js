const Web3 = require("web3");
const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/" + 'key');

web3.eth.subscribe('logs', {
    address: 'contractAddress',
    topics: ['topic']           // or [null, '0x000...000cbea...9b']  32 bytes
}, function(error, result) { if (!error) console.log(result); });
