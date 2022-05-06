import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const deployGovernanceTokenList:DeployFunction = async function(hre:HardhatRuntimeEnvironment)

{       
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    log("Deploying Goverance token");
    const governanceTpoken = ethers.getContract("GovernanceToken")

  
    await processVotes(governanceTpoken.address, deployer)

}



const processVotes = async (addressses:[], value:[]) => {
        //chain link logic comes here
     


}

export default processVotes;