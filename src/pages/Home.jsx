const Home = () => {
  return (
    <>
      <section class="py-10 pb-0 bg-white sm:py-16 sm:pb-0 lg:py-24 lg:pb-0">
        <div class="max-w-5xl px-4 my-20 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div>
              <div class="relative">
                <img
                  class="object-bottom rounded-md scale-125 mx-auto"
                  src="https://static.wikia.nocookie.net/character-stats-and-profiles/images/3/35/Jwg3gw87s6b41.png"
                  alt=""
                />
              </div>
              <div class="mt-15 text-center">
                Headshot will be added here in the future
              </div>
            </div>

            <div>
              <h2 class="text-2xl leading-tight text-black sm:text-1xl lg:text-3xl">
                Hello, I am
              </h2>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Ronald Wang
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                Computer Science • Deep Learning • Machine Learning • Full-stack
                Development • Cybersecurity
              </p>
              <h2 class="text-lg leading-tight font-bold mt-15 text-black sm:text-base lg:text-xl">
                University of Sydney
              </h2>
              <p class="mt-1 text-base leading-relaxed text-gray-600">
                Master of IT and IT Management with Cybersecurity Major
              </p>
              <h2 class="text-lg leading-tight font-bold mt-5 text-black sm:text-base lg:text-xl">
                University of New South Wales
              </h2>
              <p class="mt-1 text-base leading-relaxed text-gray-600">
                Bachelor of Science(Computer Science) with Mathematics Minor
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="mb-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />

      <section class="py-5 bg-white sm:py-8 lg:py-12">
        <div class="max-w-5xl px-4 my-20 -mt-15 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                About Me
              </h2>
              <p class="mt-4 text-base leading-relaxed text-justify text-gray-600">
                Passionate programmer with 5 years of experience in computer
                science and a year of specialised experience in artificial
                intelligence and cybersecurity. Proven problem-solving skills
                demonstrated by solving over 400 Leetcode questions.
                Enthusiastic about developing side projects in my free time.
              </p>
            </div>

            <div>
              <h2 class="text-1xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
                Programming Languages
              </h2>
              <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                C/C++, Python, Java, JavaScript, TypeScript, SQL, Shell Script
              </p>
              <h2 class="text-1xl font-bold leading-tight mt-5 text-black sm:text-2xl lg:text-3xl">
                Computer Science
              </h2>
              <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                Deep Learning, Machine Learning, Data Structures and Algorithms,
                Computer Networks, Database Management Systems, Software
                Engineering
              </p>
              <h2 class="text-1xl font-bold leading-tight mt-5 text-black sm:text-2xl lg:text-3xl">
                Web Development
              </h2>
              <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                Flask, Node.js, Express, React, HTML, CSS, Tailwind CSS, REST
                API, MVC Architecture
              </p>
              <h2 class="text-1xl font-bold leading-tight mt-5 text-black sm:text-2xl lg:text-3xl">
                Cybersecurity
              </h2>
              <p class="mt-1 text-base leading-relaxed text-justify text-gray-600">
                Penetration Testing, Reverse Engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
