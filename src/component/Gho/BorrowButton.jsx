import React from "react";
import { parseUnits } from "viem";
import { useContractWrite, useAccount } from "wagmi";
import poolABI from "@/gho/poolABI";

const BorrowButton = () => {
  const { address } = useAccount();
  const borrowAmount = parseUnits("5", 18);
  const intrestRate = parseUnits("2", 18);

  const AAVE_V3_POOL_ADDRESS = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
  const GHO_TOKEN_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
  // Prepare contract write for borrow

  console.log(poolABI);

  const { write } = useContractWrite({
    address: AAVE_V3_POOL_ADDRESS,
    abi: poolABI,
    functionName: "borrow", // replace with actual function name
  });

  return (
    <button
      className="border m-3 border-black px-4 py-2 bg-white w-1/4  text-white font-semibold  rounded-md"
      onClick={() =>
        write({
          args: [GHO_TOKEN_ADDRESS, borrowAmount, intrestRate, 0],
        })
      }
    >
      Claim Token
    </button>
  );
};

export default BorrowButton;
