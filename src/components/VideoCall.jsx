// src/components/VideoCall.js

import React from "react";

const VideoCall = ({ mentor, onClose }) => {
  const handleStartCall = () => {
    // Placeholder logic to start a video call
    console.log("Starting video call with", mentor.name);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          Video Call with {mentor.name}
        </h2>
        <p className="text-gray-600 mb-4">
          Click the button below to start the video call.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleStartCall}
        >
          Start Call
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
