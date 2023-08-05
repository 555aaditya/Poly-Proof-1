const hre = require("hardhat");

async function main() 
{
  if (hre.network.name !== "mumbai") {
    throw new Error("Please run the script on the Mumbai network.");
  }

  console.log("Connected to network:", hre.network.name);

  const bridgeAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; 
  const myERC721Address = "0x1AeB8D9F19A2d608b30C77eb98f03B99ed8CFE0E"; 

  const MyNFT = await hre.ethers.getContractFactory("MyERC721");
  const myNFT = await MyERC721.attach(MyNFTAddress);
  console.log("Contract address:", MyNFT.address);

  const tokenIds = [1, 2, 3, 4, 5]; 

  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];
    console.log(`Approving NFT with token ID ${tokenId} for transfer...`);
    await myNFT.approve(bridgeAddress, tokenId);

    console.log(`Depositing NFT with token ID ${tokenId} to the FxPortal Bridge...`);
    await myNFT["safeTransferFrom(address,address,uint256)"](hre.ethers.constants.AddressZero, bridgeAddress, tokenId);
  }

  console.log("Batch transfer of NFTs completed successfully!");
  const balance = await MyERC721.balanceOf(wallet.address);
  console.log("MyERC721 wallet balance", wallet.address, "is:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });