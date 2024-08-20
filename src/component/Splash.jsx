import video from "/img/enigmavideo.mp4";

export const Splash = () => {
  return (
    <div className="fixed z-[9999] w-full transition-fade">
      <div className="w-full h-screen relative flex flex-col justify-center items-center">
        <video className="w-full h-screen object-cover" autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
