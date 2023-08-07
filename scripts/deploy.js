const hre = require("hardhat");

async function main() 
{
  const token = await hre.ethers.deployContract("myNFT");
  console.log("Token address is:", await token.getAddress());
}

main().catch((error) => 
{
  console.error(error);
  process.exitCode = 1;
});
