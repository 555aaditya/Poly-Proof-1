const hre = require("hardhat");

async function main() 
{
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy("Description");
  await myNFT.deployed();

  console.log("MyNFT contract deployed to:", myNFT.address);
  console.log("Transaction hash:", myNFT.deployTransaction.hash);
}

main().catch((error) => 
{
  console.error(error);
  process.exitCode = 1;
});
