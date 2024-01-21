import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/component/Header/header";
// import { MeetingCard } from "../../component/MeetingCard/MeetingCard";

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
    <div className="bg-[#98ffb7] h-screen w-screen flex items-center flex-col">
      <Header />
      <div className="mt-[150px] flex justify-end items-center space-x-6">
        <input
          className="w-full h-[42px] px-3 py-[16px] rounded-xl border border-[#D9D9D9] placeholder:font-montserrat placeholder:text-[#242424] text-[#2D2D2D]"
          onChange={(e) => setMeetingTitle(e.target.value)}
          placeholder="Enter Title"
        />
        <button
          onClick={() => createRandomRoom(meetingTitle)}
          className="border border-black h-[40px] text-center w-[200px] rounded-md bg-[#242424]"
        >
          Create Space
        </button>
      </div>

      <h2 className="text-2xl text-[#242424] font-medium mt-12">
        Available Rooms
      </h2>
      <div className="mx-auto w-3/4 mt-6">
        <div className="grid grid-cols-3 gap-12 overflow-y-auto w-full">
          {meetings.map((meeting, i) => {
            console.log({ meeting });
            return (
              <div className="flex flex-col space-y-6 p-4 rounded-md bg-[#242424]">
                <img
                  src="/room_image.png"
                  alt="room_image"
                  className="h-[70px] w-[70px] rounded-[100%] mx-auto"
                />{" "}
                <p className="text-lg text-center mt-6"> {meeting.title}</p>
                <button
                  className="w-full flex mt-10 justify-center py-2 rounded-md  bg-[#1982F8]"
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
    </div>
  );
};

export default Meetings;
