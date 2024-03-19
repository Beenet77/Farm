import React, { useState, useEffect } from "react";
import axios from "axios";

const Notice = () => {
  // State to store the notices
  const [notices, setNotices] = useState([]);
  // State to store the selected notice
  const [selectedNotice, setSelectedNotice] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(true);

  // Fetch notices from API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/notice/");
        setNotices(response.data); // Assuming the response data is an array of notices
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Function to handle click on a notice title
  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="min-h-[85vh] container mx-auto mt-4 p-10">
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Government notices</h1>
        </div>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pt-24 max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer"
              onClick={() => handleNoticeClick(notice)}
            >
              <p className="text-black font-bold">{notice.title}</p>
              <p className="text-sm text-gray-500">
                Updated at: {notice.updated_at}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
          onClick={closeModal} // Close modal when clicking outside the modal
        >
          <div
            className="bg-white p-8 rounded-lg relative"
            style={{ width: "80%", maxHeight: "80vh", overflowY: "auto" }} // Custom modal width and height
            onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside the modal
          >
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold">{selectedNotice.title}</h2>
            <p className="text-gray-600 mb-4">
              Author: {selectedNotice.author}
            </p>
            <img
              src={selectedNotice.image}
              alt={selectedNotice.title}
              className="w-full h-auto mb-4"
            />
            <p>{selectedNotice.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
