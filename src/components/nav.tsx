import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";

import * as styles from "./nav.module.css";

const Nav = () => {
  return (
    <div>
      <button className={styles.btn}>
        <SearchIcon />
      </button>
      <button className={styles.btn}>
        <DarkModeIcon />
      </button>
      <button className={styles.btn}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default Nav;
