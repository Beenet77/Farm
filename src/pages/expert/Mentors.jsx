import React, { useState } from "react";
import MentorCard from "../../components/MentorCard";
import VideoCall from "../../components/VideoCall";
import Messaging from "../../components/Messaging";

// Sample mentor data
const mentorsData = [
  {
    id: 1,
    name: "Ram Thapa",
    expertise: "Soil Exports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Sita Khadka",
    expertise: "Fertilizer Experts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
  },
  // Add more sample mentors as needed
];

const Experts = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showVideoCall, setShowVideoCall] = useState(false);

  const handleVideoCall = (mentor) => {
    setSelectedMentor(mentor);
    setShowVideoCall(true);
  };

  const handleMessaging = () => {
    // Open messaging page in a new tab
    window.open("http://127.0.0.1:8888/", "_blank");
  };

  const handleClose = () => {
    setSelectedMentor(null);
    setShowVideoCall(false);
  };

  return (
    <div className="min-h-[85vh] container mx-auto mt-4">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
        Our Consultants
      </h1>
      <p className="text-gray-400 font-normal text-base">
        A soil expert, or soil scientist, specializes in studying, analyzing,
        and advising on soil properties and quality. They play a vital role in
        agriculture, land management, and environmental conservation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentorsData.map((mentor) => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            onVideoCall={handleVideoCall}
            onMessaging={handleMessaging}
          />
        ))}
      </div>
      {showVideoCall && (
        <VideoCall mentor={selectedMentor} onClose={handleClose} />
      )}
    </div>
  );
};

export default Experts;
