import { motion } from "framer-motion";
import TProgress from "../../typings/Progress";
import "./Progress.css";
import { useLocation, useNavigate } from "react-router-dom";

const progressBarContainer = {
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
  exit: {
    opacity: 0,
  },
};

const progressBars = {
  hidden: {
    y: "-9000px",
  },
  show: {
    y: "0px",
    transition: { ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 },
  },
};

const Progress = ({
  primaryColor,
  secondaryColor,
  messageDataArrayLength,
}: TProgress) => {
  const navigate = useNavigate();
  const location = useLocation();
  const style = {
    "--primary": primaryColor,
    "--secondary": secondaryColor,
    "--pb-width": "100px",
    "--pb-duration": "5s",
  } as React.CSSProperties;
  return (
    <motion.div
      className="progress-wrapper"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={progressBarContainer}
    >
      {Array.from({ length: messageDataArrayLength }, (_, i) => {
        return (
          <motion.div
            className={`progress-bar ${
              location.pathname == `/wishes/${i}` ? "passed" : ""
            }`}
            key={i + 69}
            style={style}
            variants={progressBars}
            onClick={() => navigate(`/wishes/${i}`)}
          ></motion.div>
        );
      })}
    </motion.div>
  );
};

export default Progress;
