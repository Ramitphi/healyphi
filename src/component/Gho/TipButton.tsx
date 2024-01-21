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
  console.log(address);

  const hostamount = Number(amount) * 0.9;
  const projectAmount = Number(amount) * 0.1;

  return (
    <div className="flex flex-col">
      <input
        className="mb-3 h-[40px] w-full text-black rounded-md"
        placeholder=" Number of Gho"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        className="mt-3 px-4 py-2 bg-blue-500 w-full font-semibold  rounded-md"
        style={{ marginTop: "8px" }}
        onClick={() => {
          // 90% tip to the person
          write({
            args: [address, parseUnits(hostamount.toString(), 18)],
          });

          //10% tip to the project
          write({
            args: [
              "0xA6e92503837612F1BB5aD10Aa59461Cf8a53bC54",
              parseUnits(projectAmount.toString(), 18),
            ],
          });
        }}
      >
        {`Tip ${displayName}`}
      </button>
    </div>
  );
};

export default TipButton;
