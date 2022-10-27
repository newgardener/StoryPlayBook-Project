import * as React from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import { ArrowDown } from "../../assets/images";
import { FlexLayout } from "../Layout";
import { SvgIcon } from "../SvgIcon";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type Content = {
  name: string;
  description?: string;
};

type AccordionCardItemProps = {
  index: number;
  content: Content;
};

const AccordionCardItem = ({ index, content }: AccordionCardItemProps) => {
  return (
    <FlexLayout className={cx("content")} direction="row" justifyContent="start">
      <div className={cx("index")}>{index}</div>
      <FlexLayout className={cx("card-item")} direction="column" alignItems="start">
        <Typography className={cx("item-name")} tag="p">
          {content.name}
        </Typography>
        <Typography
          className={cx("item-description")}
          tag="span"
          fontSize={12}
          color="rgba(6, 11, 17, 0.6)"
        >
          {content.description}
        </Typography>
      </FlexLayout>
    </FlexLayout>
  );
};

export type AccordionCardProps = {
  title: string;
  subtitle?: string;
  contents: Content[];
  showLimit?: number;
  className?: string;
};

export const AccordionCard = ({
  title,
  subtitle,
  contents,
  showLimit,
  className,
}: AccordionCardProps) => {
  const [isShowMoreButton, setIsShowMoreButton] = React.useState(false);

  const [visible, hidden] = React.useMemo(() => {
    if (!Array.isArray(contents)) return [[], []];
    return showLimit
      ? [contents.slice(0, showLimit), contents.slice(showLimit)]
      : [contents, []];
  }, [contents, showLimit]);

  if (!Array.isArray(contents)) return null;

  return (
    <article className={cx("container", className)}>
      <FlexLayout className={cx("content-header")} direction="column" alignItems="start">
        {subtitle && (
          <Typography tag="h5" fontSize={14} color={"#52575c"}>
            {subtitle}
          </Typography>
        )}
        <Typography tag="h3" weight="bold" fontSize={20}>
          {title}
        </Typography>
      </FlexLayout>
      <div className={cx("content-list")}>
        {visible.map((content, index) => (
          <AccordionCardItem
            key={`${content.name}-${index}`}
            index={index}
            content={content}
          />
        ))}
      </div>
      {hidden.length > 0 && (
        <motion.div
          className={cx("hidden-content-list")}
          initial={{ height: 0 }}
          animate={
            isShowMoreButton
              ? { overflow: "visible", height: "auto" }
              : { overflow: "hidden", height: 0 }
          }
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          {hidden.map((content, index) => (
            <AccordionCardItem
              key={`${content.name}-${index}`}
              index={index + visible.length}
              content={content}
            />
          ))}
        </motion.div>
      )}
      {showLimit && contents.length > showLimit && (
        <button
          type="button"
          className={cx("show-more-button", { "rotate-arrow": isShowMoreButton })}
          onClick={() => setIsShowMoreButton((currentValue) => !currentValue)}
          aria-expanded={isShowMoreButton}
        >
          <Typography tag="span" weight="bold" fontSize={14}>
            {isShowMoreButton ? "접기" : "더보기"}
          </Typography>
          <SvgIcon icon={ArrowDown} />
        </button>
      )}
    </article>
  );
};
