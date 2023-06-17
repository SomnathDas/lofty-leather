import { motion } from "framer-motion";
import TMusicCard from "../../typings/MusicCard";
import "./MusicCard.css";

// @ts-ignore
import useSound from "use-sound";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MusicCard = ({
  albumArt,
  primaryColor,
  musicName,
  musicFilePath,
}: TMusicCard) => {
  const style = {
    "--primary": primaryColor,
  } as React.CSSProperties;

  const location = useLocation();

  const [play, { stop, pause }] = useSound(musicFilePath);

  const [isPlaying, setIsPlaying] = useState(false);

  const bootMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      pause();
    } else {
      setIsPlaying(true);
      play();
    }
  };

  useEffect(() => {
    stop();
    setIsPlaying(false);
  }, [location]);

  return (
    <div className="h-full m-2 p-2 md:p-0 wrapper-bg-full">
      <motion.div
        className="wrapper-bg-card flex items-center md:flex-col md:w-80 gap-5 md:p-2 rounded-lg sticky top-0"
        initial={{ translateY: "0px" }}
      >
        <img
          className="album-art rounded-lg w-24 h-24 md:w-auto md:h-auto pointer-events-none select-none"
          src={albumArt}
        ></img>
        <div className="flex p-2">
          <p className="music-name text-sm">{musicName}</p>
          <button
            className="play-pause-btn border-white border-2 rounded-full w-24 text-center active:border-black text-sm"
            style={style}
            onClick={() => bootMusic()}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicCard;
