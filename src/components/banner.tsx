import { getPlaceholderProps } from "gatsby-plugin-image/dist/src/components/hooks";
import Logo from "./logo";
import * as React from "react";

import * as styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.foreground}>
        <Logo />
        <p>{props.message}</p>
        <div>
          <button className={styles.btnPrimary}>{props.primaryButton}</button>
          <button className={styles.btnSecondary}>
            {props.secondaryButton}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
