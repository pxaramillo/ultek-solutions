import Container from "./container";
import * as styles from "./footer.module.css";
import { Facebook } from "react-bootstrap-icons";
import Twitter from './icons/twitter.js';
import Instagram from './icons/instagram';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <h2>Company Information</h2>
        </div>
        <hr />
        <div className={styles.errata}>
          <h6>
            Copyright &copy; 2022, Ultek Solutions. Developed by Anvil Software
            Development. Made with NextJS, WordPress and Woocommerce.
          </h6>
          <ul className={styles.social}>
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
