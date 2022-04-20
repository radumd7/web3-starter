/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: ALCHEMY_URL,
         accounts: [`0x${WALLET_PK}`]
      }
   },
};
