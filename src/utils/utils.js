import { CosmWasmClient } from "cosmwasm";

const settings = {
  decisionsAddr:
    "juno16vwg3krtccs7q28pfhulmexelvh740mhnevvg2p4slrrx0ylkyvsrh5d6h",
  rpcEndpoint: "https://rpc-juno.itastakers.com:443",
};

export const getDecisions = async () => {
  const client = await CosmWasmClient.connect(settings.rpcEndpoint);
  return await client.queryContractSmart(settings.decisionsAddr, {
    list_decisions: {},
  });
};
