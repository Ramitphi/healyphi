import React from "react";
import { useRouter } from "next/router";

const Meetings = () => {
  const { push } = useRouter();
  const createRandomRoom = async (title) => {
    const res = await fetch("https://api.huddle01.com/api/v1/create-room", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "eei853S8vM40Dh0anAysfDwQ5cZCDDwh",
      },
      cache: "no-store",
    });

    const data = await res.json();

    const { roomId } = data.data;
    console.log({ roomId });
    push(`/${roomId}`);
    return { roomId };
  };

  return (
    <div className="bg-[#B1D27B] h-screen w-screen flex items-center flex-col">
      <div className=" mt-24 flex justify-center items-center">
        <p className="text-lg mx-4">Enter Title</p>
        <input className="h-10 rounded text-black" />
      </div>
      <button
        onClick={() => createRandomRoom("123")}
        className="border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md"
      >
        Create Space
      </button>
    </div>
  );
};

export default Meetings;
