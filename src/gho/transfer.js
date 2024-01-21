import { useContractWrite } from "wagmi";

const tranfer = (address) => {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "",
    abi: wagmigotchiABI,
    functionName: "claim",
  });

  return (
    <div>
      <button
        disabled={!write}
        onClick={() =>
          write({
            args: [69],
            from: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
            value: parseEther("0.01"),
          })
        }
      >
        Claim
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
};
