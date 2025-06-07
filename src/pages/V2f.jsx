import React from "react";

const V2f = () => {
  return (
    <>
      <h2 class="font-semibold mx-auto pt-30 text-4xl leading-tight text-black md:text-5xl lg:text-6xl lg:pt-40">
        Video 2 Frames (V2F)
      </h2>
      <p class="font-serif w-xs mx-auto mt-2 text-base leading-relaxed text-center text-gray-600 sm:w-sm md:w-md lg:w-lg">
        Reveal the frames. Reveal the dialogue.
      </p>

      <hr class="my-15 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />

      <section class="py-0 bg-white">
        <div class="max-w-5xl font-semibold mx-auto sm:px-6 lg:px-8 rounded-md p-4">
          <div class="mx-auto gap-y-10 md:gap-x-20">
            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                From Motion to Meaning — Make Extraction Easy
              </h2>
              <p class="mt-4 font-semibold text-base leading-relaxed text-justify text-gray-600">
                This simple tool allows users to extract every frame of a video
                via command line. It also applies
                <span class="italic font-bold"> easyocr </span>
                module to recognise words. As a result, it also has the ability
                to recognise the subtitle of the certain frame if it exists.
              </p>
              <p class="mt-4 font-semibold text-base leading-relaxed text-justify text-gray-600">
                Job Applications Tracker is a full-stack web application
                developed using Node.js, ReactJS, DynamoDB, and AWS cloud
                services. It combines practical web development skills with
                real-world job search experience, reflecting a learning journey
                driven by a passion for creating technology that enhances
                organisation and simplifies the job application process.
              </p>
              <p class="mt-4 font-semibold italic text-base leading-relaxed text-justify text-gray-600">
                More detailed images will be available soon, showcasing the UI
                and functionality of this project.
              </p>
            </div>
          </div>
        </div>
        <div class="relative mt-5 flex items-center gap-x-4 mx-auto">
          <button
            type="button"
            class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <a href="/projects/v2f">Source Code</a>
          </button>
        </div>
      </section>

      <hr class="my-15 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />
    </>
  );
};

export default V2f;
