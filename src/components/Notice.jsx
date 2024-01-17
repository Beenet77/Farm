import React from 'react';
import Navbar from './Navbar';


const Notice = () => {
  return (
  <div >
      <Navbar />
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Government notices</h1>
          <p className="text-lg mb-8">
          </p>
          
        </div>
      </section>      


     <div className=' '> 
      <div className=' pt-24 max-w-[1000px] mx-auto  px-8 flex flex-col justify-center'>
          <ul className=' pt-3 list-disc font-normal text-3xl text-green-700 '>
            <li>
              Dr. Bedu Ram Bhusal is honorable minister of agriculture.
            </li>
          </ul >

          <ul className='list-disc pt-3 fon-normal text-3xl text-green-700 '>
            <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quia.
            </li>
          </ul>
          

          <div className='pt-4'>
          </div>
      </div>
     <div>
     </div>

  </div>
</div>
    
  );
};

export default Notice;
