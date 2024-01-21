import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount, useWrite } from "wagmi";
import { parseUnits } from "viem";
import { createWalletClient, http, custom, webSocket } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import delegation from "../gho/delegation";

console.log({ delegation });
export default function Home() {
  const { push } = useRouter();
  const { isConnected, address } = useAccount();
  const debtTokenContractAddress = "0x67ae46EF043F7A4508BD1d6B94DB6c33F0915844";
  // const delegatorAddress = "0xA6e92503837612F1BB5aD10Aa59461Cf8a53bC54";
  const delegateeAddress = address;
  const amount = parseUnits("50", 18);

  const account = privateKeyToAccount(
    "0xffc067c2c039bc07e877cea01b6eb7ea466111b3c507a19bb996bf673e74892f"
  );
  console.log({ delegation });

  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: webSocket(
      "wss://eth-sepolia.g.alchemy.com/v2/i3ymd5GyRNWVzKHZbPss9roT2ePUobsB"
    ),
  });

  // approve delgation for logged-in user
  useEffect(() => {
    if (isConnected) {
      try {
        const delegate = async () => {
          const hash = await client.writeContract({
            address: debtTokenContractAddress,
            abi: delegation,
            functionName: "approveDelegation",
            args: [delegateeAddress, amount],
          });
          console.log({ hash });
        };

        delegate();
      } catch (e) {
        console.error(e);
      }
    }
  }, [isConnected]);

  return (
    <div className="flex flex-col bg-[#B1D27B] justify-center items-center h-screen w-full ">
      {isConnected && (
        <button
          onClick={() => push("/meetings")}
          className="mb-10 border  border-white px-4 py-2 rounded-md"
        >
          Continue
        </button>
      )}
      <ConnectKitButton />
    </div>
  );
}
