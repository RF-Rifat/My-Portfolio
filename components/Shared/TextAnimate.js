import { motion } from "framer-motion";
const TextAnimate = ({ text }) => {
  const animate = text.split(" ");

  return (
    <div className="App">
      {animate.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimate;
