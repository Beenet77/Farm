// src/components/MentorCard.js

import React from "react";

const MentorCard = ({ mentor, onVideoCall, onMessaging }) => {
  return (
    <div className="bg-gray-300 rounded-lg p-6">
      <div className="flex items-center space-x-6 mb-4">
        <img
          className="h-28 w-28 object-cover object-center rounded-full"
          src={mentor.image}
          alt={mentor.name}
        />
        <div>
          <p className="text-xl text-gray-700 font-normal mb-1">
            {mentor.name}
          </p>
          <p className="text-base text-blue-600 font-normal">{mentor.field}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-400 leading-loose font-normal text-base">
          {mentor.description}
        </p>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => onVideoCall(mentor)}
        >
          Video Call
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => onMessaging(mentor)}
        >
          Messaging
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
