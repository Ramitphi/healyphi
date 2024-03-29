import {
  useRemoteAudio,
  useRemoteScreenShare,
  useRemoteVideo,
  useRemotePeer,
} from "@huddle01/react/hooks";
import React, { useEffect, useRef } from "react";
import TipButton from "../Gho/TipButton.tsx";

const RemotePeer = ({ peerId }) => {
  const { stream, state } = useRemoteVideo({ peerId });
  const { stream: audioStream, state: audioState } = useRemoteAudio({ peerId });
  const { videoStream: screenVideo, audioStream: screenAudio } =
    useRemoteScreenShare({ peerId });
  const vidRef = useRef(null);
  const audioRef = useRef(null);
  const screenVideoRef = useRef(null);
  const screenAudioRef = useRef(null);

  const { metadata } = useRemotePeer({ peerId });

  console.log({ remote: metadata });

  useEffect(() => {
    console.log("stream", stream);
    if (stream && vidRef.current && state === "playable") {
      vidRef.current.srcObject = stream;

      vidRef.current.onloadedmetadata = async () => {
        try {
          vidRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      vidRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [stream]);

  useEffect(() => {
    if (audioStream && audioRef.current && audioState === "playable") {
      audioRef.current.srcObject = audioStream;

      audioRef.current.onloadedmetadata = async () => {
        try {
          audioRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      audioRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [audioStream]);

  useEffect(() => {
    if (screenVideo && screenVideoRef.current) {
      screenVideoRef.current.srcObject = screenVideo;

      screenVideoRef.current.onloadedmetadata = async () => {
        try {
          screenVideoRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      screenVideoRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [screenVideo]);

  useEffect(() => {
    if (screenAudio && screenAudioRef.current) {
      screenAudioRef.current.srcObject = screenAudio;

      screenAudioRef.current.onloadedmetadata = async () => {
        try {
          screenAudioRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      screenAudioRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [screenAudio]);

  return (
    <div className="flex flex-col gap-2">
      <video
        ref={vidRef}
        autoPlay
        muted
        className="border-2 rounded-xl border-[#242424] aspect-video"
        style={{ borderColor: "#242424" }}
      />
      {screenVideo && (
        <video
          ref={screenVideoRef}
          autoPlay
          muted
          className="border-2 rounded-xl border-[#242424] aspect-video"
          style={{ borderColor: "#242424" }}
        />
      )}
      <div className="text-lg font-medium text-[#2D2D2D]">
        {metadata.displayName}
      </div>

      <TipButton
        address={metadata.address}
        displayName={metadata.displayName}
      />
      <audio ref={audioRef} autoPlay></audio>
      {screenAudio && <audio ref={screenAudioRef} autoPlay></audio>}
    </div>
  );
};

export default React.memo(RemotePeer);
