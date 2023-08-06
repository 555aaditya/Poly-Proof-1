require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: {
    version: "0.8.0",
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia-public.unifra.io"
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
