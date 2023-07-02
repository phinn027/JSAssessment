const NFTs = []

function mintNFT (_name,_flavour,_size,) {
    const NFT = {
        "name" : _name,
        "flavour" : _flavour,
        "size": _size,
    }
    NFTs.push(NFT);
    console.log("Minted" + _name);
}

function listNFTs () {
    for (let i = 0; i < NFTs.length; i++){
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Flavour: \t" + NFTs[i].flavour);
        console.log("Size: \t\t" +NFTs[i].size);
    }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}


mintNFT("Ace", "Cookies N Cream", "Large");
mintNFT("Marc", "Rocky Road", "Small");
mintNFT("Kim", "Vanilla", "Medium");
mintNFT("Paul", "Strawberry", "Large");
listNFTs();
getTotalSupply();
