import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header class="bg-black border-b border-gray-700 fixed top-0 w-full z-1">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- lg+ --> */}
          <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="/" title="" class="flex">
                <svg
                  class="w-auto h-8 lg:h-10 fill-white"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 495.398 495.398"
                  xml:space="preserve"
                >
                  <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>{" "}
                  <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>{" "}
                </svg>
              </a>
            </div>

            <button
              type="button"
              class="cursor-pointer inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden hover:bg-gray-800"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <div class="hidden md:flex md:items-center md:space-x-10">
              <a
                href="/resume"
                title=""
                class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:-translate-y-1 focus:text-opacity-70"
              >
                Resume
              </a>

              <a
                href="/projects"
                title=""
                class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:-translate-y-1 focus:text-opacity-70"
              >
                Projects
              </a>

              <a
                href="/album"
                title=""
                class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:-translate-y-1 focus:text-opacity-70"
              >
                Album
              </a>

              <a
                href="/about"
                title=""
                class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:-translate-y-1 focus:text-opacity-70"
              >
                About
              </a>
            </div>
          </nav>

          {/* <!-- xs to lg --> */}
          <nav
            class={`max-h-screen px-4 py-10 pt-0 text-center bg-black md:hidden ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <nav class="flex flex-col items-center mt-0 space-y-2">
              <a
                href="/resume"
                title=""
                class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:-translate-y-1"
              >
                Resume
              </a>

              <a
                href="/projects"
                title=""
                class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:-translate-y-1"
              >
                Projects
              </a>

              <a
                href="/album"
                title=""
                class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:-translate-y-1"
              >
                Album
              </a>

              <a
                href="/about"
                title=""
                class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 hover:-translate-y-1"
              >
                About
              </a>
            </nav>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
