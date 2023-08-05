const hre = require("hardhat");

async function main() 
{
  const network = hre.network.name;
  console.log("Connected to network:", network);

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyERC721.attach("0xd9145CCE52D386f254917e481eB44e9943F39138");
  console.log("Contract address:", myERC721.address);

  const ipfsUrls = 
  [
    "https://gateway.pinata.cloud/ipfs/QmNvATPSG6TRFRVVUAPpVr9H5HygBeq7JNdUMBMm5u4j6e",
    "https://gateway.pinata.cloud/ipfs/QmPkfDTkEruprfnPhfVoEqn8Tc7TFrccUGkwDjo62C4ALG",
    "https://gateway.pinata.cloud/ipfs/QmZjqazWmamxi6zEWktLP4FQiUrDjnoiUCNkapBFnZVxjH",
    "https://gateway.pinata.cloud/ipfs/QmcmivSkCwispibJHdy5keYCgmPVty4PMFtSoFGZMNVwue",
    "https://gateway.pinata.cloud/ipfs/QmafmBoFnvonrArLj1Eh4X6RKUi3rrXQxs4AFi51LWVw2R"
  ];

  for (let i = 0; i < ipfsUrls.length; i++) {
    const recipient = await hre.ethers.provider.getSigner().getAddress();
    const tx = await myERC721.mint(recipient, ipfsUrls[i]);
    const receipt = await tx.wait();
    const tokenId = receipt.events[0].args.tokenId;
    console.log(`Minted NFT with token ID ${tokenId}`);
  }
   
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });