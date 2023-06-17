import "./Marquee.css";

import { motion } from "framer-motion";

const Marquee = ({
  message,
  transition,
  small,
}: {
  message: string;
  transition: any;
  small: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: "6000px" }}
      animate={{ translateX: "0px" }}
      exit={{ opacity: "0" }}
      transition={transition}
      className={`marquee fixed`}
      style={{ fontSize: small ? "1.5rem" : "3rem" }}
    >
      <ul className="marquee__content">
        <li>{message}</li>
        <li>{message}</li>
        <li>{message}</li>
        <li>{message}</li>
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        <li>{message}</li>
        <li>{message}</li>
        <li>{message}</li>
        <li>{message}</li>
      </ul>
    </motion.div>
  );
};

export default Marquee;
