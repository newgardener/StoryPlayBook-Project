import * as React from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import { ArrowDown } from "../../assets/images";
import { SvgIcon } from "../SvgIcon";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface FoldingMotionProps {
  isOpen?: boolean;
  title: string;
  content: string;
}

export const FoldingMotion = ({ isOpen = false, title, content }: FoldingMotionProps) => {
  const [isFoldingOpen, setIsFoldingOpen] = React.useState(isOpen);

  const onClickFoldingMotion = () => setIsFoldingOpen((currentValue) => !currentValue);

  return (
    <motion.dl
      className={cx("folding-motion")}
      initial={false}
      animate={isFoldingOpen ? "open" : "collapsed"}
    >
      <dt>
        <button
          type="button"
          className={cx("folding-motion-button", {
            "folding-motion-button-open": isFoldingOpen,
          })}
          aria-expanded={isFoldingOpen}
          onClick={onClickFoldingMotion}
        >
          <Typography>{title}</Typography>
          <SvgIcon className={cx("icon-arrow")} icon={ArrowDown} theme="gray" />
        </button>
      </dt>
      <motion.div
        className={cx("folding-motion-content", {
          open: isFoldingOpen,
        })}
        transition={{ ease: "easeOut", duration: 0.2 }}
        variants={{
          open: { height: "auto", overflow: "visible" },
          collapsed: { height: 0, overflow: "hidden" },
        }}
      >
        <Typography>{content}</Typography>
      </motion.div>
    </motion.dl>
  );
};
