const { ethers } = require('ethers')
import {ABI} from "./Example.abi.mjs"
import {bytecode} from "./Example.bin.mjs"

async function task1() {
  let RPCprovider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545')
  let list = await RPCprovider.listAccounts()
  let signer = RPCprovider.getSigner(list[0])

  let contractFactory = new ethers.ContractFactory(ABI, bytecode, signer)
  let contract = await contractFactory.deploy(100, 200, "Hello")
  await contract.deployTransaction.wait().then(console.log)
  
  console.log(contract.address)
   
  }
  task1()