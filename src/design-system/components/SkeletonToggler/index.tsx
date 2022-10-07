import { AnimatePresence, motion } from "framer-motion";

export interface SkeletonTogglerProps {
  showSkeleton?: boolean;
  skeleton?: React.ReactNode;
  children?: React.ReactNode;
}

export const SkeletonToggler = ({
  showSkeleton,
  skeleton,
  children,
}: SkeletonTogglerProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={showSkeleton ? "skeleton" : "content"}
        initial={{ opacity: 0, position: "relative" }}
        animate={{
          opacity: 1,
          position: "relative",
          transition: {
            duration: 0.3,
            ease: "easeOut",
            type: "tween",
          },
        }}
        exit={{
          opacity: 0,
          position: "absolute",
          transition: {
            duration: 0.3,
            ease: "easeIn",
            type: "tween",
          },
        }}
      >
        {showSkeleton ? skeleton : children}
      </motion.div>
    </AnimatePresence>
  );
};
