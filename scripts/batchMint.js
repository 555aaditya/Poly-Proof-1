const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/myNFT.sol/myNFT.json");
require('dotenv').config()

const tokenAddress = "0xDB2cE9Ad2F4042903878a3eC9D9bD1753620cD29"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4324E8Ae53400D5aD924c3f5F02526377Cb0b90B"; 

async function main() 
{
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const tx = await token.mintNFT(5);
  await tx.wait();
  console.log(await token.balanceOf(walletAddress) + "NFTs are available");
}

main().catch((error) => 
{
console.error(error);
process.exitCode = 1;
}
);