# Poly-Proof-1

Welcome to the Polygon-Module-1 repository! This repository contains the code for the first project in the Polygon-Advanced course. In this project, we will be deploying an NFT collection on the Ethereum blockchain, mapping the collection to Polygon, and transferring assets via the Polygon Bridge.

# Installing

* Download the entire repository on your local server and unzip the package
* Open the folder on your recommended IDE and run the following commands
```cmd
npm i
```
* This will install all the required dependencies and hardhat
* Then you have to install a few more dependencies and they are
```cmd
npm install @openzeppelin/contracts
```
```cmd
npm install @nomiclabs/hardhat-waffle
```
* After these dependencies are installed you have to compile the smart contract using hardhat
```cmd
npx hardhat compile
```
* Then you have to run the following commands to deploy the smart contract
```cmd
npx hardhat run scripts/deploy.js --network goerli
```
* This will return an address where the token is deployed on the goerli testnet and you can access that on this link
[goerli testnet](https://goerli.etherscan.io/)
```cmd
npx hardhat run scripts/batchMint.js --network goerli
```
* Change the token address in this file to the one you get and this will mint those NFTs on the address 
```cmd
npx hardhat run scripts/deposit.js --network goerli
```
* Change the token address in this file to the one you got this will deposit and approve those NFTs on the address 
```cmd
npx hardhat run scripts/bridge.js --network mumbai
```
* This will bridge your token with the polygon mumbai and you will be able to see your NFTs on the testnet

# Author

Aaditya Sinha

[Twitter](https://twitter.com/aaadityasinha)

[Linkedin](https://www.linkedin.com/in/aaditya-sinha-53530723a/)

[Telegram](https://t.me/aaditya_sinha)

  
