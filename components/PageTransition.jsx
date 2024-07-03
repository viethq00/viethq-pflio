"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1.0 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 0.5,
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
      </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
