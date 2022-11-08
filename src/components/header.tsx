import React from "react";
import Nav from "./nav";
import Logo from "./logo";

import * as styles from "./header.module.css";
import Searchbar from "./searchbar";
import NavList from "./nav-list";

const Header = () => {
  return (
<<<<<<< HEAD
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
=======
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Searchbar />
        <Nav />
      </div>
    </header>
>>>>>>> 9ca87f1b228258b4cbe74e64f59ae5f006ec1821
  );
};

export default Header;
