"use client";

import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Header from "@/component/Header/header";

export default function Home() {
  const { push } = useRouter();
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col bg-[#98ffb7] justify-center items-center h-screen w-full relative">
      <Header />
      {isConnected && (
        <button
          onClick={() => push("/meetings")}
          className="mb-10 px-4 py-2 rounded-md bg-[#242424]"
        >
          Continue
        </button>
      )}
      <ConnectKitButton />
    </div>
  );
}
