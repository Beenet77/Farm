import React, { useRef, useEffect } from "react";

const VideoCall = ({ mentor, onClose }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let localStream;
  let peerConnection;

  const handleStartCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = stream;
      localStream = stream;

      // Create peer connection
      peerConnection = new RTCPeerConnection();

      // Add local stream to peer connection
      localStream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, localStream));

      // Set up event handlers for peer connection
      peerConnection.ontrack = handleTrackEvent;
    } catch (error) {
      console.error("Error starting video call:", error);
    }
  };

  const handleTrackEvent = (event) => {
    remoteVideoRef.current.srcObject = event.streams[0];
  };

  const handleClose = () => {
    // Close local video stream
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }

    // Close peer connection
    if (peerConnection) {
      peerConnection.close();
    }

    // Close video call modal
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          Video Call with {mentor.name}
        </h2>
        <div className="mb-4">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            className="w-64 h-48"
          ></video>
          <video ref={remoteVideoRef} autoPlay className="w-64 h-48"></video>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleStartCall}
          >
            Start Call
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
