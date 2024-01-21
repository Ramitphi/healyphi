import React from "react";
import { useContractWrite } from "wagmi";
// import { abi } from "../../gho/abi";

const TipButton = (metadata) => {
  // const { data, isLoading, isSuccess, write } = useContractWrite({
  //   address: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
  //   abi: abi,
  //   functionName: "tansfer",
  // });

  return (
    <button
      className="border border-white px-4 py-2 bg-white w-full text-black font-semibold  rounded-md"
      onClick={() =>
        write({
          to: metadata.address,
          value: parseEther("1"),
        })
      }
    >
      Tip {metadata.displayName}
    </button>
  );
};

export default TipButton;
