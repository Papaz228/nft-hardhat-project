const { ethers } = require("hardhat");

async function main() {

  const [owner] = await ethers.getSigners();
  console.log("Owner address ", owner.address);

  const MyNFT = await ethers.getContractFactory('MyNFT');
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract address ",myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });