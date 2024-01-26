import React from "react";
import Pic from "../../images/Ram1.jpeg";
import Pic1 from "../../images/hari.jpeg";
import Pic2 from "../../images/sita.jpeg";
import Anil from "../../images/Anil.jpeg";
import Pic3 from "../../images/Pic3.jpeg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function Mentors() {
  return (
    <div>
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="w-full text-center pb-8">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
            Our Consultants
          </h1>
          <p class="text-gray-400 font-normal text-base">
            {" "}
            A soil expert, or soil scientist, specializes in studying,
            analyzing, and advising on soil properties and quality. They play a
            vital role in agriculture, land management, and environmental
            conservation.
          </p>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-300 rounded-lg p-6">
            <div class=" bg-gray-300 flex items-center space-x-6 mb-4">
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src={Pic}
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1 flex">
                  Ram Thapa
                </p>
                <p class="text-base text-blue-600 font-normal flex">
                  {" "}
                  Soil Exports
                </p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="bg-gray-300 rounded-lg p-6">
            <div class=" bg-grey flex items-center space-x-6 mb-4">
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src={Pic2}
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1">
                  Sita Khadka
                </p>
                <p class="text-base text-blue-600 font-normal">
                  Fertilizer Experts
                </p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="bg-gray-300 rounded-lg p-6">
            <div class="flex items-center space-x-6 mb-4">
              {/** Image photo */}
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src={Pic1}
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1">
                  Pushpa Adhaikari
                </p>
                <p class="text-base text-blue-600 font-normal">Soil Experts</p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="bg-gray-300 rounded-lg p-6">
            <div class="flex items-center space-x-6 mb-4">
              {/** Image photo */}
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src={Anil}
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1">
                  Anil Adhikari
                </p>
                <p class="text-base text-blue-600 font-normal">Soil Exports</p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* functionality for activation*/}
            </div>
          </div>
          <div class="bg-gray-300 rounded-lg p-6">
            <div class="flex items-center space-x-6 mb-4">
              {/** Image photo */}
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1">Dhane Rai</p>
                <p class="text-base text-blue-600 font-normal">Seed Exports</p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              {/* functionality for activation*/}
            </div>
          </div>
          <div class="bg-gray-300 rounded-lg p-6">
            <div class="flex items-center space-x-6 mb-4">
              {/** Image photo */}
              <img
                class="h-28 w-28 object-cover object-center rounded-full"
                src={Pic3}
                alt="photo"
              />
              <div>
                <p class="text-xl text-gray-700 font-normal mb-1">
                  {" "}
                  Anup Sapkota
                </p>
                <p class="text-base text-blue-600 font-normal">Soil Export</p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 leading-loose font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentors;
