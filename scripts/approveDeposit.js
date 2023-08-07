// author - Aaditya Sinha [22BCT10047]

const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/myNFT.sol/myNFT.json");

const tokenAddress = "0x5424De28DA3c033a69EF8B2E17c371e0B17052bE";
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xDB2cE9Ad2F4042903878a3eC9D9bD1753620cD29";
const walletAddress = "0x4324E8Ae53400D5aD924c3f5F02526377Cb0b90B";

async function main() 
{
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
  const totalSupply = await tokenContract.totalSupply();

  for (let i = 0; i < totalSupply; i++) 
  {
    const tokenId = await tokenContract.tokenByIndex(i);
    const approveTx = await tokenContract.approve(fxERC721RootAddress, tokenId);
    await approveTx.wait();
    console.log('Approved');
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, tokenId, "0x6556");
    await depositTx.wait();
    console.log("NFT transacted");
  }
}

main().catch((error) => 
{
  console.error(error);
  process.exitCode = 1;
}
);