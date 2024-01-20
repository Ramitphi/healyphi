import "@/styles/globals.css";

import { HuddleClient, HuddleProvider } from "@huddle01/react";
import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const chains = [sepolia];

// wallet connection
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "i3ymd5GyRNWVzKHZbPss9roT2ePUobsB", // or infuraId
    walletConnectProjectId: "dff72063779ae5b695713c9433d3d9c7",
    chains,
    // Required
    appName: "connectkitdemo",
  })
);

const huddleClient = new HuddleClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <HuddleProvider client={huddleClient}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </HuddleProvider>
  );
}
