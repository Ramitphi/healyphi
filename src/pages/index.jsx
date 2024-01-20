import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

export default function Home() {
  const { push } = useRouter();
  const { isConnected } = useAccount();

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
