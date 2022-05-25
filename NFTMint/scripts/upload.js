fs = require('fs');
nft = require('nft.storage');
const secret = require('../secret.json');

NFTStorage = nft.NFTStorage;
File = nft.File;

const endpoint = 'https://api.nft.storage' // the default
const token = secret.NFT_STORAGE_TOKEN // your API key from https://nft.storage/manage

const tigers = ["bad", "black", "cute", "devil", "king", "ninja", "rebel"];
const storage = new NFTStorage({ endpoint, token })

async function main() {
  tigers.map(async (tiger) => {
    const metadata = await storage.store({
      name: `${tiger.toUpperCase()} Tiger`,
      description:
        `This is an NFT of a ${tiger} tiger`,
      image: new File([await fs.promises.readFile('tigers/' + tiger + 'Tiger.jpg')], tiger + 'Tiger.jpg', {
        type: 'image/jpg',
      }),
    })
    console.log('IPFS URL for the metadata:', metadata.url)
    fs.appendFileSync('tiger_uri.txt', tiger + 'tiger uri: ' + metadata.url + "\n");
    console.log('metadata.json contents:\n', metadata.data)
  })
}
main()