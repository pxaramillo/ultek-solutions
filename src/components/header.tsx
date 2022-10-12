import React from "react";
import Nav from "./nav";

import * as styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ULTEK SOLUTIONS</h1>
        <Nav />
      </header>
    </>
  );
};

export default Header;
