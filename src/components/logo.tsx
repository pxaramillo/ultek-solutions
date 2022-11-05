import React from "react";
import { Link } from "gatsby";

import * as styles from './logo.module.css';

const Logo = () => {
    return (
        <figure className={styles.logoContainer}>
            <Link to="/"><img src="https://svgshare.com/i/nfM.svg" className={styles.logo} />
            </Link>
        </figure>
    )

}

export default Logo;