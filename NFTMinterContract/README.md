# NFT Mint

Deploy, mint and verify an NFT contract on polygon blockchain

## Minted NFT

The verified contract can be found [here](https://mumbai.polygonscan.com/address/0x94C6cb95d0e5753337613194b7813CE728004716)
Here's also a link to view the minted NFTs on [opensea](https://testnets.opensea.io/collection/tigers-3anzaiwuum)

## Usage

How to use this repository to mint your own NFT
 
### Compile

```
npx hardhat compile
```

### Set up deployment

- Create an account on [MATIC RPC](https://rpc.maticvigil.com/), create a new proect and copy your app id
- Create an account on [polygonscan](https://polygonscan.com/register) and create a new apikey
- Create a `secret.json` file with the following content:
- Get an api key from [NFT Storage](nft.storage)

```
{
    "APP_ID": "Your appId",
    "PRIVATE_KEY1": "Your mumbai testnet account private key",
    "PRIVATE_KEY2": "Another mumbai testnet account private key",
    "POLYGONSCAN_API_KEY": "Your api key",
    "NFT_STORAGE_TOKEN": "Your nft.storage api token"
}
```

### Deploy to mumbai testnet

```
npx hardhat run scripts/deploy.js
```

### Verify on polygonscan

```
npx hardhat verify {DEPLOYED_CONTRACT_ADDRESS}
```

