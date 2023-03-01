const { expect } = require('chai');
const { ethers } = require("hardhat");

describe('MyNFT test', function () {
    before(async function () {
        this.MyNFT = await ethers.getContractFactory('MyNFT');;
    });

    beforeEach(async function () {
    this.myNFT = await this.MyNFT.deploy();
    await this.myNFT.deployed();

    const signers = await ethers.getSigners();
    this.owner = signers[0].address;
    this.visitor = signers[1].address;

    this.collectorContract = this.myNFT.connect(signers[1]);
    await this.myNFT.mintMyNFT(this.owner, 0);
  });

  it('Owner has NFT', async function () {
    expect(await this.myNFT.ownerOf(0)).to.equal(this.owner);
  });

  it('Visitor mint NFT', async function () {
    await this.myNFT.mintMyNFT(this.visitor, 1);
    expect(await this.myNFT.ownerOf(1)).to.equal(this.visitor);
    expect(await this.myNFT.balanceOf(this.visitor)).to.equal(1);
  });
});