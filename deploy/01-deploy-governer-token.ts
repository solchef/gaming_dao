import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const deployGovernanceToken:DeployFunction = async function(hre:HardhatRuntimeEnvironment)

{       
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    log("Deploying Goverance token");
    const governanceTpoken = await deploy("GovernanceToken", {
        from: deployer,
        args:[],
        log:true
    });

    log(`Deployed Governance Token ...${governanceTpoken.address}`);

    await delegate(governanceTpoken.address, deployer)

}


const delegate = async (governanceTokenAddress:string, delegatedAccount:string) => {
        const governanceTpoken =  await ethers.getContractAt("GovernanceToken", governanceTokenAddress);

        const tx = await governanceTpoken.delegate(delegatedAccount);

        await tx.wait(1);

        console.log(`checkpoints ${await governanceTpoken.numCheckPoints()}`);

}

export default delegate;