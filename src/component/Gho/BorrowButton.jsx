import React from "react";
import { parseUnits } from "viem";
import { useContractWrite, useAccount } from "wagmi";
import poolABI from "@/gho/poolABI";

const BorrowButton = () => {
  const { address } = useAccount();
  const bamount = parseUnits("50", 28);
  const borrowAmount = BigInt("5");
  const intrestRate = BigInt("1", 18);

  const AAVE_V3_POOL_ADDRESS = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
  const GHO_TOKEN_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
  // Prepare contract write for borrow

  console.log(poolABI);

  const { write } = useContractWrite({
    address: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
    abi: poolABI,
    functionName: "borrow", // replace with actual function name
  });

  console.log(write);

  return (
    <button
      className="border m-3 border-black px-4 py-2 bg-white w-1/4  text-white font-semibold  rounded-md"
      onClick={() => {
        const res = write({
          args: [
            "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
            parseUnits(borrowAmount.toString(), 18),
            2,
            0,
            "0xA6e92503837612F1BB5aD10Aa59461Cf8a53bC54",
          ],
        });

        console.log(res);
      }}
    >
      Claim Token
    </button>
  );
};

export default BorrowButton;
