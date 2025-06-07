import React from "react";
import AlbumCard from "../components/AlbumCard";
import { images } from "/public/album.json"; // Assuming the JSON file is in the assets folder

const Album = () => {
  return (
    <>
      {console.log(images)}
      <h2 class="font-semibold mx-auto pt-30 text-5xl leading-tight text-black sm:text-5xl lg:text-6xl lg:pt-40">
        My Album
      </h2>
      <p class="font-serif w-xs mx-auto mt-2 text-base leading-relaxed text-justify text-gray-600 sm:w-sm md:w-md lg:w-lg">
        <span>
          Beside a CS student, I'm also an amateur photographer and still
          practicing my skills. I am currently trying astrophotography to
          capture photos of the Milky Way. Additionally, I am learning more
          photography skills in preparation for{" "}
        </span>
        <span class="font-bold italic">
          the total solar eclipse on 22 July 2028 in Sydney!{" "}
        </span>
        <span>
          Looking forward to connecting with people who share the same passions
          and hobbies!
        </span>
      </p>

      <div class="container mx-auto my-15">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map(
            (image) => (
              console.log(image),
              (<AlbumCard url={image.url} caption={image.caption} />)
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Album;
