import React from "react";
import Nav from "./nav";
import Logo from "./logo";

import * as styles from "./header.module.css";
import Searchbar from "./searchbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Searchbar />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
