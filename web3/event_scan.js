const Web3 = require("web3");
const web3 = new Web3("wss://goerli.infura.io/ws/v3/xxx");
const abi = []
const contract_address = ""
const contract = new web3.eth.Contract(abi, contract_address);

contract.getPastEvents('allEvents', {fromBlock:1}).then(console.log);
