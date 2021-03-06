import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat"
import { HardhatUserConfig } from "hardhat/types";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.8",
// };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.8",
  networks: {
      hardhat:{
        allowUnlimitedContractSize: true,
        chainId:31337
      },
      localhost: {
        allowUnlimitedContractSize: true,
        chainId:31337
      }
  },
  namedAccounts:{
      deployer: {
        default:0
      }
  }
}

export default config;
