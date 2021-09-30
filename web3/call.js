const Web3 = require("web3")
const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/' + 'token')
const abi = []
const contract_address = ''
const contract = new web3.eth.Contract(abi, contract_address)

contract.methods.getOwner().call().then(console.log)
