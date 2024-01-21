import React from "react";
import { useContractWrite } from "wagmi";
import abi from "../../gho/abi";
import { parseUnits } from "viem";

const TipButton = (metadata) => {
  console.log("-----------------");

  console.log(abi);
  console.log("-----------------");

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
            args: [
              "0xCAa931a56cCbF30B82CED72604DdC7182964bB71",
              parseUnits("1", 18),
            ],
          })

        // alert(metadata.address)
      }
    >
      Tip {metadata.displayName}
    </button>
  );
};

export default TipButton;
