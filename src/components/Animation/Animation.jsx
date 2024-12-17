import { motion, AnimatePresence } from "framer-motion";

function Animation({ children, className }) {
  return (
    <AnimatePresence>
      <motion.section
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}

export default Animation;
