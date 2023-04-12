require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers")
require('dotenv').config({path:__dirname+'/.env'})

const ALCHEMY_API_KEY = "YOUR OWN API KEY HERE";
const GOERLI_PRIVATE_KEY = "YOUR OWN PRIVATE KEY HERE";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.MUMBAI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: "SM17I4QGAGE51ZPNZ91QZ51NSEGMEKAS43",
  },

};
