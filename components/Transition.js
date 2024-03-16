import { motion } from "framer";

const variants = {
  initial: {
    y: "0%",
    height: "100%",
  },
  animate: {
    y: "100%",
    height: "100%",
  },
  exit: {
    y: "100%",
    height: "100%",
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-screen w-screen bg-light dark:bg-dark"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed left-0 top-0 z-40 h-screen w-screen bg-primary"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed left-0 top-0 z-30 h-screen w-screen bg-light dark:bg-dark"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
      {/* <motion.div
        className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen bg-primary"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-gray-400 dark:bg-[#252525]"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
      /> */}
    </>
  );
};

export default Transition;
