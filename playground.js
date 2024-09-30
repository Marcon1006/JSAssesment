// create a variable to hold your NFT collection
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_title, _eyeShade, _outfit, _accessory) {
    const nft = {
        title: _title,
        eyeShade: _eyeShade,
        outfit: _outfit,
        accessory: _accessory
    };
    nftCollection.push(nft);  // Store the NFT object in the array
    console.log("Minted: " + _title);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log("Title: " + nftCollection[i].title);
        console.log("Eye Shade: " + nftCollection[i].eyeShade);
        console.log("Outfit: " + nftCollection[i].outfit);
        console.log("Accessory: " + nftCollection[i].accessory);
        console.log("----------------------");
    }
}

// print the total number of NFTs we have minted to the console
function totalNFTCount() {
    console.log("Total NFTs Minted: " + nftCollection.length);
}

// call your functions below this line
mintNFT("CyberTiger", "Yellow", "Jacket", "Gold Ring");
mintNFT("GalaxySamurai", "Purple", "Armor", "Plasma Sword");
mintNFT("RoboArtist", "Silver", "Paint-Splattered Overalls", "Laser Brush");

displayNFTs();
totalNFTCount();

