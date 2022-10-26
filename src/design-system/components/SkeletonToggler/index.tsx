import classNames from "classnames/bind";
import { AnimatePresence, motion } from "framer-motion";

export interface SkeletonTogglerProps {
  showSkeleton?: boolean;
  skeleton?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const SkeletonToggler = ({
  showSkeleton,
  skeleton,
  children,
  className,
}: SkeletonTogglerProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={showSkeleton ? "skeleton" : "content"}
        className={classNames(className)}
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
