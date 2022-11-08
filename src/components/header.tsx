import React from "react";
import Nav from "./nav";
import Logo from "./logo";

import * as styles from "./header.module.css";
import Searchbar from "./searchbar";
import NavList from "./nav-list";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Logo />
          <Searchbar />
          <Nav />
        </div>
      </header>
      <NavList />
    </>
  );
};

export default Header;
