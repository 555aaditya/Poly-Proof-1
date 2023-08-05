// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyNFT is ERC721URIStorage, Ownable 
{
    string private _NFT_Description;

    constructor(string memory nftDescription) ERC721("MyNFT", "MNFT") 
    {
        _NFT_Description = nftDescription;
    }

    function NFT_Description() public view returns (string memory) 
    {
        return _NFT_Description;
    }

    function mint(address to, uint256 amount) public onlyOwner 
    {
        _mint(to, amount);
    }
}
