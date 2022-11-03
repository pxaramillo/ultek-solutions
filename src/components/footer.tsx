import React from "react";

import * as styles from './footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div>
                    <h2>Company Information</h2>
                </div>
                <div>
                    <h2>About Us</h2>
                </div>
                <div>
                    <h2>Social Media</h2>
                </div>
            </div>
            <hr />
            <p>Copyright © 2022. Ultek Solutions. Designed and Developed by Anvil Software Development. Powered by GatsbyJS and WordPress</p>
        </footer>
    )
}

export default Footer;