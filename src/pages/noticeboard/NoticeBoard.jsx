import React from "react";
import Navbar from "../../components/Navbar";
import Herosection2 from "../..//components/Herosection2";
import Notices from "../..//components/Herosection2";

// Import your images
import image1 from "../../images/government.jpg";
import image2 from "../../images/Industry.jpg";
import image3 from "../../images/tips.jpg";
import { Link } from "react-router-dom";
import Notice from "../../components/Notice";

const NoticeBoard = () => {
  // Sample notices data with image paths
  const notices = [
    {
      id: 1,
      title: "Government Notice.",
      content: "Important government notice regarding agricultural subsidies.",
      image: image1, // Use the imported image
    },
    {
      id: 2,
      title: "Industry Update.",
      content: "The latest industry update on crop yields and trends.",
      image: image2, // Use the imported image
    },
    {
      id: 3,
      title: "Farming Tip.",
      content: "Use organic compost for better soil health.",
      image: image3, // Use the imported image
    },
  ];

  return (
    <div>
      <Herosection2 />

      {/* Hero Section */}
      {/* ... (your existing hero section code) */}

      {/* Notices Section */}
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Notices</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <li key={notice.id} className="bg-white shadow-md rounded p-4">
              <img
                src={notice.image}
                alt={notice.title}
                className="w-full h-auto rounded mb-4"
              />
              <Link to="/notice" className="text-lg font-semibold">
                {notice.title}
              </Link>
              <p className="text-gray-600 mt-2">{notice.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NoticeBoard;
