// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;
    uint256 maxSupply = 1000;
    uint256 cost = 0.00000000001 ether;
    string baseURI = "ipfs://QmYAiRCT8kW9si9FRzrkiGo5S5rDV5uzuw41er6vQgraDT/";

    constructor() ERC721("MyNFT", "MYNFT") {}

    function _baseURI() internal view virtual override returns (string memory){
        return baseURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        _requireMinted(tokenId);
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function changeBaseURI(string memory newBaseURI) public onlyOwner{
        baseURI = newBaseURI;
    }

    function mintMyNFT(address collector) public payable {
        uint256 _currentSupply = totalSupply();
        require(_currentSupply < maxSupply);
        require(msg.value == cost);
        _safeMint(collector, _currentSupply); 
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}