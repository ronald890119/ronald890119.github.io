import React, { useState } from "react";

const AlbumCard = (props) => {
  return (
    <>
      <div class="max-w-sm mx-auto bg-gray-300 border border-gray-100 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-700">
        <a target="_blank" href={props.url}>
          <img class="rounded-t-lg" src={props.url} alt="" />
        </a>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
            {props.caption}
          </h5>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
