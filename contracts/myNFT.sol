// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract myNFT is ERC721Enumerable, Ownable 
{
    struct NFTMetadata 
    {
        string name;
        string description;
        string image;
    }

    NFTMetadata[] public nfts;
    uint256 public maxQuantity = 5;
    uint256 public currentTokenId = 0;

    constructor() ERC721("NFTs", "Multiple") 
    {
        nfts.push(NFTMetadata('0', 'Shark', 'QmNvATPSG6TRFRVVUAPpVr9H5HygBeq7JNdUMBMm5u4j6e'));
        nfts.push(NFTMetadata('1', 'Rocket', 'QmPkfDTkEruprfnPhfVoEqn8Tc7TFrccUGkwDjo62C4ALG'));
        nfts.push(NFTMetadata('2', 'Dolphin', 'QmZjqazWmamxi6zEWktLP4FQiUrDjnoiUCNkapBFnZVxjH'));
        nfts.push(NFTMetadata('3', 'Diamond', 'QmcmivSkCwispibJHdy5keYCgmPVty4PMFtSoFGZMNVwue'));
        nfts.push(NFTMetadata('4', 'Box', 'QmafmBoFnvonrArLj1Eh4X6RKUi3rrXQxs4AFi51LWVw2R'));
    }

    function _baseURI() internal pure override returns (string memory) 
    {
        return "https://gateway.ipfs.io/ipfs/";
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) 
    {
        require(tokenId < nfts.length, "The TokenId does not exist");
        return nfts[tokenId].description;
    }

    function mintNFT(uint256 quantity) external  
    {
        require(currentTokenId + quantity <= maxQuantity, "Exceeds maximum token limit");
        for (uint256 i = 0; i < quantity; i++) {
            _mint(msg.sender, currentTokenId);
            currentTokenId++;
        }
    }

    // Function to transfer ownership to a new address
    function transferOwnershipTo() external
    {
        transferOwnership(0x4324E8Ae53400D5aD924c3f5F02526377Cb0b90B);
    }
}

contract FxPortalBridge 
{
    event Deposit(address indexed from, address indexed to, uint256 tokenId, string data);

    function deposit(string calldata data, address to, uint256 tokenId) external 
    {
        emit Deposit(msg.sender, to, tokenId, data);
    }
}
