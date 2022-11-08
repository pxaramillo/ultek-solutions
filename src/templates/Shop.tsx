import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import ProductsList from '../components/products-list';

import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"

const Shop = () => {

    const data = useStaticQuery(graphql`
        query {
            allWcProducts {
                nodes {
                    id
                    name
                    sku
                    slug
                    regular_price
                    sale_price
                    on_sale
                    short_description
                    status
                    images {
                        src
                        name
                        alt
                        localFile {
                            childImageSharp {
                                fixed(width: 300, cropFocus: CENTER) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const products = data.allWcProducts.nodes;

        return (
            <div>
                <section>
                    <h1>Gatsby Theme Woocommerce</h1>
                    <ProductsList products={products} />
                </section>
            </div>
        ); 
}

export default Shop;

