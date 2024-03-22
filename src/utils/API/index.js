// Import library
import { ethers } from 'ethers';
import axie from './ABI/AXIE.js';
import weth from './ABI/WETH.js';
import usd from './ABI/USD.js';
import slp from './ABI/SLP.js';
import shards from './ABI/SHARDS.js';
import pixel from "./ABI/PIXEL.js"
const SLP =  "0xa8754b9fa15fc18bb59458815510e40a12cd2014"
const WETH ="0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5"
const USD ="0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"
const SHARDS ="0x97a9107c1793bc407d6f527b77e7fff4d812bece"
const AXIE ="0x32950db2a7164ae833121501c797d79e7b79d74c"
const PIXEL =  "0x7eae20d11ef8c779433eb24503def900b9d28ad7"
const WRON = "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4" 


const connection = {
    url: 'https://api-gateway.skymavis.com/rpc',
    headers: {
      'x-api-key': 'KTVQzlTAehTCUO49zUq3AUnMqO4aon99'
    }
  }
 
const provider = new ethers.providers.JsonRpcProvider(connection);

async function getRonBalance(address){

    const balance = await provider.getBalance(address);
    return balance
}


async function getAxieBalance(address) {
    const contract = new ethers.Contract(AXIE,axie,provider);
    const BIG_balance = await contract.balanceOf(address);
    let axieIds = []
  for (let i = 0; i < BIG_balance; i++) {
    const axieId = await contract.tokenOfOwnerByIndex(address, i)
    if (ethers.BigNumber.isBigNumber(axieId)) {
      axieIds.push(axieId.toNumber())
    }
  }
 
  return axieIds
    
}

async function getWethBalance(address) {
    const contract = new ethers.Contract(WETH,weth,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}

async function getUSDBalance(address) {
    const contract = new ethers.Contract(USD,usd,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}

async function getSlpBalance(address) {
    const contract = new ethers.Contract(SLP,slp,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}

async function getShardsBalance(address) {
    const contract = new ethers.Contract(SHARDS,shards,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}

async function getPixelBalance(address) {
    const contract = new ethers.Contract(PIXEL,pixel,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}

async function getWronBalance(address) {
    const contract = new ethers.Contract(WRON,WRON,provider);
    const BIG_balance = await contract.balanceOf(address);
    const balance = ethers.utils.formatEther(BIG_balance)
    return balance
}



export {getRonBalance,getAxieBalance,getPixelBalance,getShardsBalance,getSlpBalance,getUSDBalance,getWethBalance,getWronBalance}