import React, { useState } from "react";
import { useContractWrite } from "wagmi";
import abi from "../../gho/ghoAbi";
import { parseUnits } from "viem";

type Props = {
  address: `0x${string}`;
  displayName: string;
};
const TipButton = ({ address, displayName }: Props) => {
  console.log(address);

  const [amount, setAmount] = useState<string>("");
  const userData = displayName;

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    abi: abi,
    functionName: "transfer",
  });

  const hostamount = Number(amount) * 0.9;
  const projectAmount = Number(amount) * 0.1;

  return (
    <div className="flex flex-col">
      <input
        className="mb-3 h-10 w-full text-black rounded-md"
        placeholder=" Number of Gho"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        className="border mt-3 border-black px-4 py-2 bg-white w-full text-white font-semibold  rounded-md"
        onClick={() => {
          write({
            args: [address, parseUnits(hostamount.toString(), 18)],
          });

          write({
            args: [address, parseUnits(projectAmount.toString(), 18)],
          });
        }}
      >
        {`Tip ${displayName}`}
      </button>
    </div>
  );
};

export default TipButton;
