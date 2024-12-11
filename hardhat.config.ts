import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@vechain/sdk-hardhat-plugin";

const VECHAIN_DERIVATION_PATH = "m/44'/818'/0'/0";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "paris",
        },
      },
    ],
  },
  networks: {
    vechain_solo: {
      url: "http://localhost:8669",
      accounts: {
        mnemonic: "denial kitchen pet squirrel other broom bar gas better priority spoil cross",
        count: 20,
        path: VECHAIN_DERIVATION_PATH,
      },
      gas: 10000000,
    },
    vechain_testnet: {
      url: "https://testnet.vechain.org",
      accounts: {
        mnemonic: "denial kitchen pet squirrel other broom bar gas better priority spoil cross",
        count: 10,
        path: VECHAIN_DERIVATION_PATH,
      },
      chainId: 100010,
    }
  },
  etherscan: {
    enabled: false,
  },
  sourcify: {
    enabled: true,
  }
};

export default config;
