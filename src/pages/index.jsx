import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#B1D27B] justify-center items-center h-screen w-full ">
      <ConnectKitButton />
      <button className="mt-10 border  border-white px-4 py-2 rounded-md">
        Continue as Guest
      </button>
    </div>
  );
}
