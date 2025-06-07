import React from "react";

const Resume = () => {
  return (
    <>
      <h2 class="font-serif mx-auto pt-30 text-5xl leading-tight text-black sm:text-5xl lg:text-6xl lg:pt-40">
        Resume
      </h2>
      <section class="py-0 bg-white sm:py-4 lg:py-6">
        <div class="max-w-5xl font-serif px-4 my-20 mx-auto sm:px-6 lg:px-8 bg-gray-100 rounded-md p-4">
          <div class="mx-auto gap-y-10 md:gap-x-20">
            <div class="text-center">
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Ronald (Guan-Hsun) Wang
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                <a href="mailto:ronald890119@gmail.com" class="hover:underline">
                  ronald890119@gmail.com
                </a>
              </p>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                Sydney, NSW
              </p>
              <p class="mt-0 text-base leading-relaxed text-gray-600">
                Tainan, Taiwan
              </p>
            </div>

            <hr class="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                Education
              </h2>
              <div class="text-lg leading-tight font-bold mt-5 text-black sm:text-base lg:text-xl">
                <span>Master of IT and IT Management @ </span>
                <span class="italic">University of Sydney</span>
              </div>
              <p class="mt-1 text-base italic leading-relaxed text-gray-600">
                Cybersecurity Major
              </p>
              <div class="mt-5">
                <span class="font-bold">
                  Cumulative Weighted Average Mark:{" "}
                </span>
                <span>73%</span>
              </div>
              <div class="mt-1">
                <span class="font-bold">Relative Courses: </span>
                <span>
                  Web Application Development, Computer and Network Security,
                  Information Security Management, Applied Cybersecurity
                </span>
              </div>

              <div class="text-lg leading-tight font-bold mt-20 text-black sm:text-base lg:text-xl">
                <span>Bachelor of Science(Computer Science) @ </span>
                <span class="italic">University of New South Wales</span>
              </div>
              <p class="mt-1 text-base italic leading-relaxed text-gray-600">
                Mathematics Minor
              </p>
              <div class="mt-5">
                <span class="font-bold">
                  Cumulative Weighted Average Mark:{" "}
                </span>
                <span>75%</span>
              </div>
              <div class="mt-1">
                <span class="font-bold">Relative Courses: </span>
                <span>
                  Data Structures and Algorithms, Computer Systems Fundamentals,
                  Numerical Methods and Statistics, Software Engineering
                  Fundamentals, Database Systems, Artificial Intelligence,
                  Engineering Mathematics, Object-oriented Design and
                  Programming, Neural Networks and Deep Learning, Linear
                  Algebra, Information Codes and Ciphers, Machine Learning and
                  Data Mining, Computer Vision
                </span>
              </div>
            </div>

            <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25" />

            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                Extra Curricular Activities
              </h2>
              <div>
                <h2 class="text-lg leading-tight mt-5 text-black sm:text-base lg:text-xl">
                  <span class="font-bold mr-5">
                    Cisco Intro to Software Engineering Virtual Experience
                    Program
                  </span>
                  <span>March 2024</span>
                </h2>
                <ul class="list-disc ml-5">
                  <li>
                    Set up a React application and stitch together a series of
                    reusable React components to create a dashboard frontend
                  </li>
                  <li>
                    Used Websocket to connect to an external service and display
                    packet latency
                  </li>
                  <li>
                    Recorded a sprint review video showcasing the frontend
                    features developed in React
                  </li>
                </ul>
                <div class="flex flex-row items-center mt-5">
                  <button
                    type="button"
                    class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cisco/kinDTvjiZRcYbwqLo_Cisco_Mm4SwzwSgFJTkvNtP_1711373185598_completion_certificate.pdf">
                      View Certificate
                    </a>
                  </button>
                </div>
              </div>
              {/* <hr class="my-12 h-0.5 border-t-0 bg-neutral-400" /> */}
              <div>
                <h2 class="text-lg leading-tight mt-20 text-black sm:text-base lg:text-xl">
                  <span class="font-bold mr-5">
                    Deloitte Australia Technology Job Simulation on Forage
                  </span>
                  <span>March 2024</span>
                </h2>
                <ul class="list-disc ml-5">
                  <li>
                    Completed a job simulation involving data analysis for
                    Deloitte's Technology team
                  </li>
                  <li>Created a data dashboard using Tableau</li>
                  <li>
                    Wrote a proposal for a client project to create a
                    functioning dashboard
                  </li>
                  <li>
                    Used Excel to classify data and draw business conclusions
                  </li>
                </ul>
                <div class="flex flex-row items-center mt-5">
                  <button
                    type="button"
                    class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_Mm4SwzwSgFJTkvNtP_1711652088874_completion_certificate.pdf">
                      View Certificate
                    </a>
                  </button>
                </div>
              </div>
              {/* <hr class="my-12 h-0.5 border-t-0 bg-neutral-400" /> */}
              <div>
                <h2 class="text-lg leading-tight mt-20 text-black sm:text-base lg:text-xl">
                  <span class="font-bold mr-5">
                    Telstra - Cybersecurity Job Simulation
                  </span>
                  <span>March 2024</span>
                </h2>
                <ul class="list-disc ml-5">
                  <li>Responding to a malware attack</li>
                  <li>Analysing the attack</li>
                  <li>(Technical) Mitigate the malware attack</li>
                  <li>Incident postmortem</li>
                </ul>
                <div class="flex flex-row items-center mt-5">
                  <button
                    type="button"
                    class="mx-auto text-black hover:text-white border hover:cursor-pointer border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Telstra%20AU/RNhbu8QnDzthwynEf_Telstra_Mm4SwzwSgFJTkvNtP_1711482832715_completion_certificate.pdf">
                      View Certificate
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25" />

            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                Skills
              </h2>
              <div>
                <h2 class="text-lg leading-tight mt-5 text-black sm:text-base lg:text-xl">
                  Programming Languages
                </h2>
                <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                  C/C++, Python, Java, JavaScript, TypeScript, SQL, Shell Script
                </p>
                <h2 class="text-lg leading-tight mt-20 text-black sm:text-base lg:text-xl">
                  Technical Skills
                </h2>
                <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                  Deep Learning, Machine Learning, Data Structures and
                  Algorithms, Computer Networks, Database Management Systems,
                  Software Engineering, Agile Development, Node.js, Express,
                  React, HTML, CSS, Tailwind CSS, REST API, MVC Architecture,
                  Penetration Testing, Reverse Engineering
                </p>
                <h2 class="text-lg leading-tight mt-20 text-black sm:text-base lg:text-xl">
                  Soft Skills
                </h2>
                <p class="mt-1 mb-10 text-base leading-relaxed text-justify text-gray-600">
                  Teamwork, Communication, Problem Solving, Critical Thinking,
                  Leadership, Self-learning, Self-motivation, Flexibility,
                  Accountability, Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
