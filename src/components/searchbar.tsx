import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import * as styles from "./searchbar.module.css";

const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <input className={styles.input} type="text" placeholder="nVidia RTX 4090&hellip;" />
            <button className={styles.button}>
                <SearchIcon />
            </button>
        </div>
    )
}

export default Searchbar;