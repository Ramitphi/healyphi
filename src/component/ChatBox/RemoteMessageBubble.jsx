import { useRemotePeer } from "@huddle01/react/hooks";

function RemoteMessageBubble({ message }) {
  const { metadata } = useRemotePeer({ peerId: message.sender });
  console.log({ rmetadata: metadata });
  return (
    <div className="items-start flex flex-col">
      <span className="text-blue-400 text-sm">{metadata?.displayName}</span>
      <span className=" text-sm">{message.text}</span>
    </div>
  );
}

export default RemoteMessageBubble;
