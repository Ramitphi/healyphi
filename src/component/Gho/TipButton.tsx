import React from "react";
import { useContractWrite } from "wagmi";
import abi from "../../gho/abi";
import { parseUnits } from "viem";

type Props = {
  address: `0x${string}`;
  displayName: string;
};
const TipButton = ({ address, displayName }: Props) => {
  console.log("-----------------");

  console.log(address);
  console.log("-----------------");

  const userData = displayName;

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
    abi: abi,
    functionName: "transfer",
  });

  return (
    <button
      className="border border-white px-4 py-2 bg-white w-full text-black font-semibold  rounded-md"
      onClick={
        () =>
          write({
            args: [address, parseUnits("1", 18)],
          })

        // alert(metadata.address)
      }
    >
      {`Tip ${displayName}`}
    </button>
  );
};

export default TipButton;
