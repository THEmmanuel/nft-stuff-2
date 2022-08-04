const main = async () => {
    const nftContractFamily = await hre.ethers.getContractFactory('NFTStuff');
    const nftContract = await nftContractFamily.deploy();
    await nftContract.deployed();
    console.log('Contract deployed to:', nftContract.address);

    let txn = await nftContract.makeNFTStuff();
    await txn.wait();

    txn = await nftContract.makeNFTStuff()
    await txn.wait()
};

const runMain = async () => {
    try {
        await main()
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();