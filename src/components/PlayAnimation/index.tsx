import React from "react";
import styles from "./PlayAnimation.module.css";

type Props = {
  width: string;
};

const PlayAnimation = ({ width }: Props) => {
  return <div style={{ width }} className={styles.wrap}></div>;
};

export default PlayAnimation;
