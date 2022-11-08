import React from "react";
import { Link } from "gatsby";

import * as styles from "./nav-list.module.css";

const NavList = () => {
    return (
        <div className={styles.siteNav}>
            <ul className={styles.navList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </div>
    )
}

export default NavList;