import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useRecoilState } from "recoil";

import { FlexLayout, Toggler } from "../../design-system/components";
import { playgroundState } from "../../store";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Header = () => {
  const [playground, setPlayground] = useRecoilState(playgroundState);
  const navigate = useNavigate();

  return (
    <FlexLayout direction="row" justifyContent="between">
      <header className={cx("header")}>StoryPlayBook</header>
      <div className={cx("playground-switch")}>
        <Toggler
          checked={playground === "story" ? true : false}
          labels={["Test Playground", "Story Playground"]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedPlayground = e.target.checked ? "story" : "test";
            setPlayground(selectedPlayground);
            navigate(`/${selectedPlayground}-playground`);
          }}
        />
      </div>
    </FlexLayout>
  );
};
