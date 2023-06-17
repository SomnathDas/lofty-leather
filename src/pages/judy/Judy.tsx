import "./Judy.css";

import mainImage from "../../assets/main-image.webp";
import Marquee from "../../components/Marquee/Marquee";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] };

const Judy = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="main-wrapper h-screen w-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-32 mt-12 text-center hidden md:flex flex-col justify-around h-32 "
      >
        <p className=" text-xl">Judy Walker</p>
        <div className="flex flex-col text-left">
          <Link to={"/wishes"} className="hover:underline">
            Our Wishes
          </Link>
          <Link
            to={"https://github.com/SomnathDas/lofty-leather"}
            className="hover:underline"
          >
            About this
          </Link>
        </div>
      </motion.div>
      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 mt-12 text-center md:hidden w-full"
      >
        <Marquee
          transition={{ ...transition }}
          message="Judy Walker."
          small={true}
        />
      </motion.div>

      <motion.div className="w-48 md:w-72 overflow-hidden rounded-xl md:hidden">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          src={mainImage}
          alt="Birthday person"
          className="select-none rounded-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute bottom-0 mb-12 text-center md:hidden w-full underline flex flex-col"
      >
        <Link to={"/wishes"}>Our Wishes</Link>
        <Link to={"/about"}>About this</Link>
      </motion.div>
      {/* Mobile */}
      <motion.div
        initial={{
          height: "auto",
          width: "auto",
        }}
        animate={{
          width: "100%",
          height: "40%",
          bottom: 0,
          display: window.screen.width <= 768 ? "none" : "block",
        }}
        transition={{ delay: 0.2, ...transition }}
        className="absolute overflow-hidden rounded-xl md:block hidden h-full w-full"
      >
        <motion.img
          initial={{
            scale: 1.1,
            width: "288px",
          }}
          animate={{
            scale: 1.0,
            width: "100%",
          }}
          exit={{
            opacity: 0,
          }}
          src={mainImage}
          alt="Birthday person"
          className="relative select-none rounded-xl h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
          transition={{ delay: 0.2, ...transition }}
        />
      </motion.div>
      <Marquee
        transition={{ ...transition }}
        message="Happy Birthday."
        small={false}
      />
    </motion.main>
  );
};

export default Judy;
