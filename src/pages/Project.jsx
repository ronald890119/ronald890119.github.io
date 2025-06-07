import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <h2 class="font-semibold mx-auto pt-30 text-5xl leading-tight text-black sm:text-5xl lg:text-6xl lg:pt-40">
        Side Projects
      </h2>
      <p class="font-serif mx-auto mt-2 text-base leading-relaxed text-gray-600">
        An idea that refused to stay an idea.
      </p>
      <div class="bg-white pb-24 sm:pb-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article class="flex flex-col items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link to="/projects/job_applications_tracker">
                    <span class="absolute inset-0"></span>
                    Job Applications Tracker
                  </Link>
                </h3>
                <p class="mt-5 line-clamp-5 text-sm/6 text-gray-600 text-justify">
                  A useful tool for job seekers to track their applications,
                  interviews, and follow-ups. It allows users to manage their
                  job search process efficiently, ensuring they never miss an
                  opportunity.
                </p>
              </div>
              <div class="relative mt-5 flex items-center gap-x-4 mx-auto">
                <button
                  type="button"
                  class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
									<Link to="/projects/job_applications_tracker">Learn More</Link>
                </button>
              </div>
            </article>

            {/* <!-- More posts... --> */}
            <article class="flex flex-col items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link to="/projects/MyGO">
                    <span class="absolute inset-0"></span>
                    MyGO/Ave Mujica Screenshot Searcher
                  </Link>
                </h3>
                <p class="mt-5 line-clamp-5 text-sm/6 text-gray-600 text-justify">
                  MyGO and Ave Mujica are anime about girl bands. This tool
                  allows users to search for screenshots of MyGO and Ave Mujica
                  with certain subtitle, which is useful for memes and chatting
                  with friends.
                </p>
              </div>
              <div class="relative mt-5 flex items-center gap-x-4 mx-auto">
                <button
                  type="button"
                  class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
									<Link to="/projects/MyGO">Learn More</Link>
                </button>
              </div>
            </article>

            <article class="flex flex-col items-start justify-between">
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link to="/projects/AstroWeather">
                    <span class="absolute inset-0"></span>
                    Astro Weather
                  </Link>
                </h3>
                <p class="mt-5 line-clamp-5 text-sm/6 text-gray-600 text-justify">
                  A tool that allows users to get weather information before
                  astrophotography based on their location. Furthermore, sunrise
                  time, sunset time, and moon phase are also available.
                </p>
              </div>
              <div class="relative mt-5 flex items-center gap-x-4 mx-auto">
                <button
                  type="button"
                  class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
									<Link to="/projects/AstroWeather">Learn More</Link>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
