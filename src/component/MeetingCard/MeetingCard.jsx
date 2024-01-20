import { useRouter } from "next/navigation";
import React from "react";

const MeetingCard = ({ title, roomLink }) => {
  const { push } = useRouter();

  return (
    <div className="flex w-72 h-56 my-10 flex-col justify-between border-white border p-4 rounded-md">
      <div className="flex justify-between ">
        <p className="text-lg"> {title}</p>
      </div>

      <button
        className="w-full border flex mt-10 justify-center py-2 rounded-md  bg-slate-400"
        onClick={() => {
          alert("Join Room");

          push(`/${roomLink}`);
        }}
      >
        Join Room
      </button>
    </div>
  );
};

export default MeetingCard;
