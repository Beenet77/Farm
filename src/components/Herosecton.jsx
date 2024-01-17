import React from 'react'
// import { Link } from 'react-router-dom';
// import Logo from '../../src/images/a.jpg'

const hero = () => {
    const heroHeight = 16 * 3; // Adjust the multiplier as needed (e.g., 3 to 5)

  return (
      
<div className={`bg-green-800 h-${heroHeight} flex justify-center items-center p-8`}>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to Weather App</h1>
          <p className="mt-4 text-lg">Find the latest weather updates here!</p>
          {/* <div className="mt-8 flex justify-center">
            <input
              type="text"
              className=" text-black py-2 px-4 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter a location..."
            />
            <button className="bg-green-800 border-2 border-White-600  py-3 px-9 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300">
              Search
            </button>
          </div> */}
        </div>
      </div>
  
        
    )
}



export default hero;