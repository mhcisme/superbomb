import { InjectedConnector } from "@web3-react/injected-connector";
import { CHAIN_ID } from "./constants";

export const injected = new InjectedConnector({
  // supportedChainIds: [CHAIN_ID],
});

export const desktopWalletList = [
  {
    name: "Metamask",
    connector: injected,
    connectorType: InjectedConnector,
  },
];

export const walletList = desktopWalletList;