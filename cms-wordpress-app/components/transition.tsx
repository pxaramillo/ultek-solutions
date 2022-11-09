import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  fadeIn: {
    x: 1920,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  fadeOut: {
    opacity: 0,
    x: -1920,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-2">
      <AnimatePresence initial={true} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
