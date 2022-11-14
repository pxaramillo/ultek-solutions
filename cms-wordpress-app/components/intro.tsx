import { CMS_NAME, CMS_URL } from "../lib/constants";
import * as styles from "./intro.module.css";
import * as servers from "/servers.jpg";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Intro() {
  return (
    <section
      className={styles.intro}
      style={{
        backgroundImage: "url(/servers.jpg)",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Link href="/">
        <img
          src="https://svgshare.com/i/nfM.svg"
          height="720px"
          width="720px"
        />
      </Link>
      <br />
      <h2>By IT Guys for IT Guys</h2>
      <ButtonGroup>
        <Link href="/shop">
          <Button variant="primary">Shop</Button>
        </Link>
        <Link href="/services">
          <Button variant="secondary">Services</Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}
