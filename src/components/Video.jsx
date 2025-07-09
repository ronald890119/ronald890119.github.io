const Video = (props) => {
  const link = `https://www.youtube.com/embed/${props.videoId}`;
  return (
    <>
      <iframe
        class="mx-auto aspect-3/2 w-xs md:w-md"
        src={link}
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Video;
