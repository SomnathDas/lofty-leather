import "./Wishes.css";

import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { usePalette } from "@roylee1997/react-palette";

import Progress from "../../components/Progress/Progress";
import MusicCard from "../../components/MusicCard/MusicCard";
import TMessagesData from "../../typings/MessagesData";

// albumArts
import firstAlbumArt from "../../assets/sampleData/first-album-art.webp";
import secondAlbumArt from "../../assets/sampleData/second-album-art.webp";

// musicFilePaths
import firstMusic from "../../assets/sampleData/music/night-city.mp3";
import secondMusic from "../../assets/sampleData/music/almost-nothing.mp3";

// framer transition and variants
const commonTransition = {
  ease: [0.43, 0.13, 0.23, 0.96],
  duration: 0.5,
};

const messageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
};

const messages = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

/* Each message must have music details (can be fetched through an API) with Album Art to be must) and message itself in multiple p tags (if possible) */
// Sample Data
const sampleMessagesDataArray: TMessagesData[] = [
  {
    albumArt: firstAlbumArt,
    musicName: "Night City - R E L's Version",
    messageInParas: [
      "Hey there Judy Walker, it's your birthday! Wishing you the happiest of birthdays filled with all the things you love and cherish the most.",
      "May this year be filled with lots of laughter, love, and unforgettable memories. I hope you get to spend your special day surrounded by the people you care about, doing all the things that make you happy.",
      "Whether it's eating cake, opening presents, or just chilling out, I hope you have the best time ever. Here's to another year of being awesome, slaying the game, and living your best life.",
      "You're a true gem, Judy, and I feel lucky to know you. Happy birthday and cheers to a fantastic year ahead!",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: secondAlbumArt,
    musicName: 'Almost nothing - "Death Stranding" Ending Song',
    messageInParas: [
      "Happy Birthday! On this special day, I hope that all of your dreams come true and that you are surrounded by love and happiness. You are a wonderful person who deserves nothing but the best, and I feel honored to be able to celebrate this special day with you.",
      "As you reflect on the past year and look forward to the next, I hope that you remember all of the amazing things that you have accomplished and the obstacles that you have overcome. Your determination and hard work inspire those around you, and I am grateful to have you in my life.",
      "May this birthday be just the beginning of a happy journey that will lead you to an even more amazing future. Enjoy your day to the fullest, and know that you are loved and appreciated by so many.",
      "Once again, happy birthday, Judy! Cheers to another year of laughter, love, and wonderful memories.",
      "Warm regards,",
      "Anon",
    ],
    musicFilePath: secondMusic,
  },
];

const Wishes = () => {
  const navigate = useNavigate();
  const { id = 0 } = useParams();

  if (Number(id) < 0 || sampleMessagesDataArray[Number(id)] == undefined) {
    return <p>Invalid Wish Message Id</p>;
  }

  const {
    data: colorData,
    loading: colorDataIsLoading,
    error,
  } = usePalette(sampleMessagesDataArray[Number(id)].albumArt);

  if (error) {
    return <h1>Invalid Wish Message Id</h1>;
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="wishes-wrapper h-screen w-screen flex flex-col justify-between items-center"
    >
      <Progress
        primaryColor={colorData?.vibrant}
        secondaryColor={colorData?.darkVibrant}
        messageDataArrayLength={sampleMessagesDataArray.length}
      />
      <motion.div
        className="lg:w-11/12 rounded-t-2xl md:rounded-t-xl flex md:flex-row flex-col-reverse"
        style={{
          backgroundColor: colorDataIsLoading ? "#fff" : colorData?.vibrant,
        }}
        initial={{ y: "1000px" }}
        animate={{ y: "0px" }}
        exit={{ y: "1000px" }}
        transition={commonTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50) {
            if (Number(id) > 0 && Number(id) < sampleMessagesDataArray.length) {
              navigate(`/wishes/${Number(id) - 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else if (info.offset.x < -50) {
            if (
              Number(id) >= 0 &&
              Number(id) < sampleMessagesDataArray.length - 1
            ) {
              navigate(`/wishes/${Number(id) + 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else {
            console.log(null);
          }
        }}
      >
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="show"
          variants={messageContainer}
        >
          {sampleMessagesDataArray[Number(id)].messageInParas.map(
            (eachPara, index) => {
              return (
                <motion.p
                  className="p-8 message text-3xl"
                  variants={messages}
                  key={index + 2045}
                >
                  {eachPara}
                </motion.p>
              );
            }
          )}
        </motion.div>
        <div className="md:w-1/2 h-1/2 md:h-auto flex justify-center items-center">
          <MusicCard
            albumArt={sampleMessagesDataArray[Number(id)].albumArt}
            primaryColor={colorData?.vibrant}
            musicName={sampleMessagesDataArray[Number(id)].musicName}
            musicFilePath={sampleMessagesDataArray[Number(id)].musicFilePath}
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Wishes;
