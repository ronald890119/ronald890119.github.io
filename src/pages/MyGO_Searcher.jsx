import React from "react";
import Video from "../components/Video";

const MyGO_Searcher = () => {
  return (
    <>
      <h2 class="font-semibold mx-auto pt-30 text-xl leading-tight text-black md:text-4xl lg:text-5xl lg:pt-40">
        MyGO/Ave Mujica Screenshot Searcher
      </h2>
      <p class="font-serif w-xs mx-auto mt-2 text-base leading-relaxed text-center text-gray-600 sm:w-sm md:w-md lg:w-lg">
        ようこそ。Ave Mujicaの世界へ
      </p>
      <div class="flex flex-col mx-auto mt-10 items-center">
        <a href="https://mygo-ave-mujica.ronald890119.com/" target="_blank">
          <button
            type="button"
            class="text-white w-70 hover:cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 text-center bg-(--color-tomori)"
          >
            Enter the World of Ave Mujica
            <svg
              class="w-6 h-6 ml-3 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </a>
        <a href="https://github.com/ronald890119/mygo-searcher" target="_blank">
          <button
            type="button"
            class="text-white mt-3 w-70 hover:cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 text-center bg-(--color-tomori)"
          >
            Go to Github Repository
            <svg
              class="w-6 h-6 ml-3 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </a>
      </div>
      <div class="mx-auto mt-10 lg:flex">
        <img className="w-md md:w-lg lg:w-lg" src="mygo_bg.jpg" />
        <img
          className="w-md mt-5 md:w-lg lg:w-lg lg:mt-0 lg:ml-5"
          src="ave_mujica_bg.jpg"
        />
      </div>

      <hr class="my-15 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />

      <section class="py-0 bg-white">
        <div class="max-w-5xl font-semibold mx-auto sm:px-6 lg:px-8 rounded-md p-4">
          <div class="mx-auto gap-y-10 md:gap-x-20">
            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                MyGO for a Lifetime
              </h2>
              <p class="mt-4 font-semibold text-base leading-relaxed text-justify text-gray-600">
                This project is a searchable archive of MyGO and Ave Mujica
                anime screenshots, which allows users easily find specific
                screenshots from the anime using keywords. Furthermore, these
                screenshots are also useful for memes, fan art creation, and the
                communication between friends. As a result, this tool is more
                than just a gallery—it's a new way to interact with the
                favourite anime.
              </p>
              <img
                class="mt-5"
                src="https://s3.ap-east-2.amazonaws.com/mygo-ave-mujica.ronald890119.com/MyGO/MyGO_1/%E8%AB%8B%E5%95%8F,%E8%A6%81%E4%B8%8D%E8%A6%81%E4%B8%80%E8%B5%B7%E7%8E%A9%E6%A8%82%E5%9C%98.png"
              />
              <p class="mt-4 font-semibold text-base leading-relaxed text-center italic text-gray-600">
                So, would you like to form a band?
              </p>
              <p class="mt-5 font-semibold text-base leading-relaxed text-justify text-gray-600">
                MyGO/Ave Mujica Screenshot Searcher is a full-stack web
                application developed using ReactJS + Vite, TailwindCSS, and
                various AWS cloud services. It combines practical web
                development skills, reflecting a learning journey driven by a
                passion for creating technology that combines with personal
                favourites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-15 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />

      <section class="py-0 bg-white mb-15">
        <div class="max-w-5xl font-semibold mx-auto sm:px-6 lg:px-8 rounded-md p-4">
          <div class="mx-auto gap-y-10 md:gap-x-20">
            <div class="mx-8">
              <h2 class="text-2xl leading-tight font-bold mt-0 text-black sm:text-xl lg:text-3xl">
                Tech Stack
              </h2>
              <ul class="list-disc ml-5 mt-5">
                <li>
                  <span class="font-bold">Backend: </span>
                  <span class="text-gray-500">
                    AWS Lambda, AWS API Gateway, AWS S3
                  </span>
                </li>
                <li>
                  <span class="font-bold">Frontend: </span>
                  <span class="text-gray-500">ReactJS + Vite, TailwindCSS</span>
                </li>
                <li>
                  <span class="font-bold">Deployment: </span>
                  <span class="text-gray-500">AWS Cloudfront</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <svg
            class="w-20 h-20 mx-5"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              fill="#FA7E14"
              d="M7.983 8.37c-.053.073-.098.133-.141.194L5.775 11.5c-.64.91-1.282 1.82-1.924 2.73a.128.128 0 01-.092.051c-.906-.007-1.813-.017-2.719-.028-.01 0-.02-.003-.04-.006a.455.455 0 01.025-.053 13977.496 13977.496 0 015.446-8.146c.092-.138.188-.273.275-.413a.165.165 0 00.018-.124c-.167-.515-.338-1.03-.508-1.543-.073-.22-.15-.44-.218-.66-.022-.072-.059-.094-.134-.093-.57.002-1.136.001-1.704.001-.108 0-.108 0-.108-.103 0-.674 0-1.347-.002-2.021 0-.075.026-.092.099-.092 1.143.002 2.286.002 3.43 0a.113.113 0 01.076.017.107.107 0 01.045.061 18266.184 18266.184 0 003.92 9.51c.218.53.438 1.059.654 1.59.026.064.053.076.12.056.6-.178 1.2-.352 1.8-.531.075-.023.102-.008.126.064.204.62.412 1.239.62 1.858l.02.073c-.043.015-.083.032-.124.043l-4.085 1.25c-.065.02-.085 0-.106-.054l-1.25-3.048-1.226-2.984-.183-.449c-.01-.026-.023-.048-.043-.087z"
            ></path>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="-27 0 310 310"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g transform="translate(153.000000, 46.000000)">
                  <path
                    d="M103,91.042 L40.848,93.617 L0.559,91.047 L67.199,84.66 L103,91.042"
                    fill="#634B1E"
                  ></path>
                  <path
                    d="M67.055,87.45 L103,91.042 L103,18.636 L67.055,0.661 L64.295,3.641 L64.295,84.369 L67.055,87.45"
                    fill="#D9A740"
                  ></path>
                  <path
                    d="M0.559,18.594 L67.055,0.597 L67.055,87.45 L0.559,91.047 L0.559,18.594"
                    fill="#886A2A"
                  ></path>
                </g>
                <g transform="translate(0.000000, 46.000000)">
                  <path
                    d="M0,91.042 L62.152,93.617 L102.441,91.047 L35.991,83.93 L0,91.042"
                    fill="#634B1E"
                  ></path>
                  <path
                    d="M35.945,87.45 L0,90.935 L0,18.31 L35.945,0.365 L37.6,3.456 L37.6,84.737 L35.945,87.45"
                    fill="#886A2A"
                  ></path>
                  <path
                    d="M102.441,18.594 L35.945,0.597 L35.945,87.45 L102.441,91.047 L102.441,18.594"
                    fill="#D9A740"
                  ></path>
                </g>
                <g transform="translate(153.000000, 171.000000)">
                  <path
                    d="M103,3.486 L40.848,0.91 L0.559,3.481 L66.909,10.188 L103,3.486"
                    fill="#FAD791"
                  ></path>
                  <path
                    d="M67.055,7.078 L103,3.486 L103,75.891 L67.055,93.866 L65.167,89.755 L65.167,10.772 L67.055,7.078"
                    fill="#D9A740"
                  ></path>
                  <path
                    d="M0.559,75.934 L67.055,93.931 L67.055,7.078 L0.559,3.481 L0.559,75.934"
                    fill="#886A2A"
                  ></path>
                </g>
                <g transform="translate(0.000000, 171.000000)">
                  <path
                    d="M0,3.486 L62.152,0.91 L102.441,3.481 L35.51,10.769 L0,3.486"
                    fill="#FAD791"
                  ></path>
                  <path
                    d="M35.945,7.078 L0,3.486 L0,75.891 L35.945,93.866 L38.124,90.626 L38.124,10.769 L35.945,7.078"
                    fill="#886A2A"
                  ></path>
                  <path
                    d="M102.441,75.934 L35.945,93.931 L35.945,7.078 L102.441,3.481 L102.441,75.934"
                    fill="#D9A740"
                  ></path>
                </g>
                <g transform="translate(55.000000, 0.000000)">
                  <path
                    d="M40.553,106.629 L73.519,100.848 L139.333,110.167 L145.002,113.428 L113.036,116.926 L40.553,106.629"
                    fill="#634B1E"
                  ></path>
                  <path
                    d="M105.447,106.629 L72.481,100.848 L3.833,111.5 L0.998,113.428 L32.964,116.926 L105.447,106.629"
                    fill="#634B1E"
                  ></path>
                  <path
                    d="M40.553,204.899 L73.519,210.68 L139.167,201.5 L145.002,198.1 L113.036,194.602 L40.553,204.899"
                    fill="#FAD791"
                  ></path>
                  <path
                    d="M105.447,204.899 L72.481,210.68 L3.333,200.833 L0.998,198.1 L32.964,194.602 L105.447,204.899"
                    fill="#FAD791"
                  ></path>
                  <path
                    d="M145.002,113.428 L145.002,77.641 L111.289,66.616 L111.289,19.776 L73,0.634 L73,0.635 L71.403,3.178 L71.112,305.766 L73,309.657 L111.289,290.515 L111.289,244.912 L145.002,233.887 L145.002,198.1 L111.289,204.035 L111.289,107.493 L145.002,113.428"
                    fill="#D9A740"
                  ></path>
                  <path
                    d="M34.711,19.776 L34.711,66.616 L0.998,77.641 L0.998,113.428 L34.711,107.493 L34.711,204.035 L0.998,198.1 L0.998,233.887 L34.711,244.912 L34.711,290.515 L73,309.657 L73,0.634 L34.711,19.776"
                    fill="#886A2A"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  fill="#E25444"
                  d="M13.481 3.094l-2.52 4.937 2.52 4.938 1.033-.594V3.687l-1.033-.593z"
                ></path>
                <path
                  fill="#7B1D13"
                  d="M13.481 3.094l-5.042.594L5.873 8.03l2.566 4.344 5.042.594V3.094z"
                ></path>
                <path
                  fill="#58150D"
                  d="M3.306 3.094l-.82.375v9.125l.82.375L8.44 8.03 3.306 3.094z"
                ></path>
                <path
                  fill="#E25444"
                  d="M3.295 3.083l5.151 1.473v7.083l-5.15 1.333V3.083z"
                ></path>
                <path
                  fill="#58150D"
                  d="M8.449 5.333l-2.187-.36 2.187-2.556 2.182 2.555-2.182.361z"
                ></path>
                <path
                  fill="#58150D"
                  d="M10.63 4.972l-2.184.367-2.184-.367V2.417M8.449 10.694l-2.187.417 2.187 2.195 2.182-2.195-2.182-.417z"
                ></path>
                <path
                  fill="#7B1D13"
                  d="M8.44.5L6.251 1.688v3.28l2.194-.635L8.44.5zM8.446 6.139l-2.184.244V9.66l2.184.257V6.139zM8.446 11.667l-2.184-.564v3.22L8.446 15.5v-3.833z"
                ></path>
                <path
                  fill="#E25444"
                  d="M10.63 11.103l-2.184.564V15.5l2.184-1.176v-3.22zM8.446 6.139l2.184.244V9.66l-2.184.257V6.139zM8.44.5l2.186 1.188v3.28L8.44 4.345V.5z"
                ></path>
              </g>
            </g>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
              fill="#53C1DE"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
              fill="#53C1DE"
            ></path>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_vite</title>
              <path
                d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
                fill="url(#paint1_linear)"
              ></path>
              <defs id="defs50">
                <linearGradient
                  id="paint0_linear"
                  x1="6.0002"
                  y1="32.9999"
                  x2="235"
                  y2="344"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stop-color="#41D1FF" id="stop38"></stop>
                  <stop offset="1" stop-color="#BD34FE" id="stop40"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="194.651"
                  y1="8.8182"
                  x2="236.076"
                  y2="292.989"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stop-color="#FFEA83" id="stop43"></stop>
                  <stop offset=".0833" stop-color="#FFDD35" id="stop45"></stop>
                  <stop offset="1" stop-color="#FFA800" id="stop47"></stop>
                </linearGradient>
              </defs>
            </g>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="0 -51 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <linearGradient
                  x1="-2.77777778%"
                  y1="32%"
                  x2="100%"
                  y2="67.5555556%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#2298BD" offset="0%"></stop>
                  <stop stop-color="#0ED7B5" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                  fill="url(#linearGradient-1)"
                ></path>
              </g>
            </g>
          </svg>

          <svg
            class="w-20 h-20 mx-5"
            viewBox="-26 0 308 308"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g transform="translate(165.000000, 48.000000)">
                  <path
                    d="M1.01,79.465 L60.2123978,73.1509144 L90.888,79.52 L90.999,79.588 L34.441,82.962 L0.957,79.52 L1.01,79.465 L1.01,79.465 Z"
                    fill="#5E1F18"
                  ></path>
                  <path
                    d="M0.958,79.521 L60.162,74.896 L60.569,74.303 L60.571,1.259 L60.164,0.424 L0.958,15.821 L0.958,79.521"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M91,79.59 L60.162,74.896 L60.164,0.424 L90.999,15.852 L91,79.59"
                    fill="#E05243"
                  ></path>
                </g>
                <g transform="translate(165.000000, 176.000000)">
                  <path
                    d="M0.958,4.115 L1.823,4.721 L60.172,8.68 L89.944,4.721 L90.999,4.142 L34.442,0.667 L0.958,4.115"
                    fill="#F2B0A9"
                  ></path>
                  <path
                    d="M0.958,4.115 L60.172,8.52 L60.355,8.766 L60.31,82.708 L60.164,83.094 L0.958,67.819 L0.958,4.115"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M90.999,4.142 L60.172,8.52 L60.164,83.094 L90.999,67.785 L90.999,4.142"
                    fill="#E05243"
                  ></path>
                </g>
                <g transform="translate(0.000000, 48.000000)">
                  <path
                    d="M89.119,79.408 L30.5886718,74.3941406 L0.195,79.439 L0.002,79.59 L56.559,82.964 L89.433,79.588 L89.119,79.408 Z"
                    fill="#5E1F18"
                  ></path>
                  <path
                    d="M0.002,79.59 L30.559,75.116 L31.458,74.479 L31.458,1.279 L30.559,0.424 L0.002,15.855 L0.002,79.59"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M89.433,79.588 L30.559,75.116 L30.559,0.424 L89.436,15.821 L89.433,79.588"
                    fill="#E05243"
                  ></path>
                </g>
                <g transform="translate(0.000000, 176.000000)">
                  <path
                    d="M89.433,4.142 L88.082,5.127 L30.559,9.44 L0.976,5.127 L0,4.142 L56.559,0.667 L89.433,4.142"
                    fill="#F2B0A9"
                  ></path>
                  <path
                    d="M0,4.142 L30.558,8.482 L31.335,9.434 L31.418,81.767 L30.559,83.094 L0.002,67.785 L0,4.142"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M89.433,4.142 L30.558,8.482 L30.559,83.094 L89.433,67.819 L89.433,4.142"
                    fill="#E05243"
                  ></path>
                </g>
                <g transform="translate(66.000000, 183.000000)">
                  <path
                    d="M123.104,6.66 L62.001,0.634 L0.289,6.661 L1.159,7.396 L61.7,17.013 L122.233,7.396 L123.104,6.66"
                    fill="#F2B0A9"
                  ></path>
                  <path
                    d="M0.289,6.661 L61.7,15.659 L62.323,16.492 L62.402,123.451 L61.7,124.637 L0.289,93.931 L0.289,6.661"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M123.104,6.66 L61.7,15.659 L61.7,124.637 L123.105,93.931 L123.104,6.66"
                    fill="#E05243"
                  ></path>
                </g>
                <g transform="translate(66.000000, 0.000000)">
                  <path
                    d="M62.001,123.933 L0.289,117.975 L0.448,117.884 L61.6970009,108.382031 L122.919,117.906 L123.105,117.975 L62.001,123.933 L62.001,123.933 Z"
                    fill="#5E1F18"
                  ></path>
                  <path
                    d="M0.289,117.975 L61.7,109.026 L61.994,108.758 L61.858,0.165 L61.7,0 L0.289,30.709 L0.289,117.975"
                    fill="#8C3123"
                  ></path>
                  <path
                    d="M123.105,117.975 L61.7,109.026 L61.7,0 L123.105,30.709 L123.105,117.975"
                    fill="#E05243"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </section>

      <hr class="mb-15 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-950 to-transparent opacity-25 dark:via-neutral-400" />

      <section class="py-0 bg-white">
        <div class="max-w-5xl font-semibold mx-auto sm:px-6 lg:px-8 rounded-md p-4">
          <div class="mx-auto gap-y-10 md:gap-x-20">
            <div class="mx-8">
              <h2 class="text-xl leading-tight font-bold mt-0 text-black md:text-2xl lg:text-3xl">
                Some Music from MyGO and Ave Mujica
              </h2>
            </div>
          </div>
          <div class="container lg:w-10xl mx-auto my-15">
            <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <Video videoId="_CraJ8654Bg" />
              <Video videoId="fXk4czRGl4E" />
              <Video videoId="FWXkipC-vqs" />
              <Video videoId="S4ErGLKCNCY" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyGO_Searcher;
