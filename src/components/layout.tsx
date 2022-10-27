import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import Header from "./header";

import * as styles from './global.module.css';
import * as contentStyles from './content.module.css';
import Banner from './banner';
import Footer from './footer';

const Layout = ({ isHomePage, children }) => {

  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className={styles.ultek}>
      <Header />
      <Banner
        title="ULTEK SOLUTIONS"
        message="By IT guys for IT guys"
        primaryButton="SHOP"
        secondaryButton="SERVICES"
      />
      <main className={contentStyles.pageWidth}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;