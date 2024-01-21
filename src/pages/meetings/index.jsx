import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
// import { MeetingCard } from "../../component/MeetingCard/MeetingCard";
import BorrowButton from "../../component/Gho/BorrowButton.jsx";

const Meetings = () => {
  const { push } = useRouter();
  const [meetings, setMeetings] = useState([]);
  const [meetingTitle, setMeetingTitle] = useState("");

  useEffect(() => {
    const res = async () => {
      const res = await getMeeting();
      console.log({ res });
      setMeetings([...res.liveMeetings]);
    };
    res();
  }, []);

  const getMeeting = async () => {
    const res = await axios.get(
      "https://api.huddle01.com/api/v1/live-meetings",
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "eei853S8vM40Dh0anAysfDwQ5cZCDDwh",
        },
      }
    );
    console.log({ res });

    return res.data;
  };

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

  console.log({ meetings });
  return (
    <div className="bg-[#B1D27B] h-screen w-screen flex items-center flex-col">
      <div className=" mt-24 flex justify-center items-center">
        <div className="text-lg mx-4">Enter Title</div>
        <input
          className="h-10 rounded text-black"
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
      </div>
      <button
        onClick={() => createRandomRoom(meetingTitle)}
        className="border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md"
      >
        Create Space
      </button>
      <BorrowButton />

      <div className="grid grid-cols-3 h-[9/10] overflow-y-auto bg-red-500  w-full">
        {meetings.map((meeting, i) => {
          console.log({ meeting });
          return (
            <div className="flex w-72 h-56 my-10 flex-col justify-between border-white border p-4 rounded-md">
              <div className="flex justify-between ">
                <p className="text-lg"> {meeting.title}</p>
              </div>

              <button
                className="w-full border flex mt-10 justify-center py-2 rounded-md  bg-slate-400"
                onClick={() => {
                  alert("Join Room");

                  push(`/${meeting.roomId}`);
                }}
              >
                Join Room
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meetings;
