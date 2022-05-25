// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TIGERS is ERC721, ERC721URIStorage, Ownable {
    uint256 totalSupply = 0;

    constructor() ERC721("TIGERS", "TGS") {}

    function safeMint(string memory uri) public {
        _safeMint(msg.sender, totalSupply);
        _setTokenURI(totalSupply, uri);
        totalSupply++;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
