
const WalletConnectIcon = 'images/wallet/walletconnect.svg';
const MetamaskIcon = 'images/wallet/metamask.svg';
const CoinbaseConnect = 'images/wallet/coinbasewallet.svg';


export const wallets = [
  {
    name: 'Metamask',
    icon: MetamaskIcon,
  },
  {
    name: 'Wallet Connect',
    icon: WalletConnectIcon,
  },
  {
    name: 'CoinBase Wallet',
    icon: CoinbaseConnect,
  }
];

export const CONNECTOR_LOCAL_STORAGE_KEY = 'connector_id';

const bakedBeans = require("../contracts/BakedBeans.json");

export const CONTRACTS_TYPE = {
  BAKED_BEANS: "BAKED_BEANS"
};

export const CONTRACTS = {

  [CONTRACTS_TYPE.BAKED_BEANS]: {
    1: { address: '0xec213aa2763a31dfb3f3c2b0aad7baca7f071715', abi: bakedBeans.abi },
    4: { address: "0xec213Aa2763A31dFb3f3c2b0aAD7BAca7F071715", abi: bakedBeans.abi },
    56: { address: '', abi: '' },
    97: { address: '0xec213aa2763a31dfb3f3c2b0aad7baca7f071715', abi: bakedBeans.abi },
  },
};

