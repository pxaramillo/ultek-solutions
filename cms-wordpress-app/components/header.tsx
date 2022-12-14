import Link from "next/link";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>Next.js webshop with WooCommerce {title ? title : ""}</title>
        <meta name="description" content="WooCommerce webshop" />
        <meta name="keywords" content="Ecommerce, WooCommerce" />
        <meta
          property="og:title"
          content="Nextjs Ecommerce with Woocommerce"
          key="pagetitle"
        />
      </Head>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          sticky="top"
          className={(`mb-3 justifyBetween`, styles.navbarDark)}
        >
          <Container className={styles.container}>
            <Row>
              <Link href="/" passHref>
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="https://svgshare.com/i/nfM.svg"
                    width="180"
                    height="180"
                    className="d-inline-block align-top"
                  />{" "}
                </Navbar.Brand>
              </Link>
            </Row>
            <Row>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>
            </Row>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link href="/" passHref>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Link>
                  <Link href="/shop" passHref>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                  </Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
