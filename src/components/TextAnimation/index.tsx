import { reactToString } from "@/utils/reactToString";
import React, { useRef, useEffect } from "react";

import styles from "./TextAnimation.module.css";
type Props = {
  children: React.ReactElement;
  width?: number;
};

const TextAnimation = ({ children, width = 100 }: Props) => {
  const stringElement = reactToString(children);
  const animateRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animateRef.current) {
      const widthEle = animateRef.current.offsetWidth;
      animateRef.current.classList.remove(styles.animate);
      if (widthEle > width) {
        setTimeout(() => {
          if (animateRef.current) {
            animateRef.current.classList.add(styles.animate);
            const root = document.documentElement;
            root.style.setProperty(
              "--translateXTextAnimation",
              `calc(${width}px - 100%)`
            );
            animateRef.current.style.animationDuration =
              (10 * widthEle) / 100 + "s";
          }
        }, 0);
      }
    }
  }, [stringElement]);

  return (
    <div style={{ maxWidth: width + "px" }} className={`${styles.wrapper}`}>
      <div ref={animateRef} className={`block ${styles.content}`}>
        {children}
      </div>
    </div>
  );
};

export default TextAnimation;
