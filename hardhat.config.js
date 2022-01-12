/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "rinkeby",
   // networks: {
   //    hardhat: {},
   //    ropsten: {
   //       url: API_URL,
   //       accounts: [`0x${PRIVATE_KEY}`],
   //       gasPrice: 8000000000
   //    }
   // },
   networks: {
      hardhat: {},
      rinkeby: {
        url: API_URL, //Infura url with projectId
        accounts: [`0x${PRIVATE_KEY}`], // add the account that will deploy the contract (private key)
        gasPrice: 8000000000
      },

     }
}