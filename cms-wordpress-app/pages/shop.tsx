import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import { FETCH_ALL_PRODUCTS_QUERY } from "../lib/shop-queries";
import client from "../utils/apollo/apollo-client";
import {
  filteredVariantPrice,
  paddedPrice,
} from "../utils/functions/functions";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Meta from "../components/meta";
import Footer from "../components/footer";


const Shop = ({ products }) => {
  <div>
     <Meta />
     <Header />
    <section className="container mx-auto bg-white">
      <div id="product-container" className="flex flex-wrap items-center">
        {products ? (
          products.map(
            ({
              databaseId,
              name,
              price,
              regularPrice,
              salePrice,
              onSale,
              slug,
              image,
              variations,
            }) => {
              // Add padding/empty character after currency symbol here
              if (price) {
                price = paddedPrice(price, "kr");
              }
              if (regularPrice) {
                regularPrice = paddedPrice(regularPrice, "kr");
              }
              if (salePrice) {
                salePrice = paddedPrice(salePrice, "kr");
              }

              return (
                <div
                  key={uuidv4()}
                  className="flex flex-col p-6 md:w-1/2 xl:w-1/4"
                >
                  <Link
                    href={`/produkt/${encodeURIComponent(
                      slug
                    )}?id=${encodeURIComponent(databaseId)}`}
                  >
                    <Link>
                      {image ? (
                        <img
                          id="product-image"
                          className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
                          alt={name}
                          src={image.sourceUrl}
                        />
                      ) : (
                        <img
                          id="product-image"
                          className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
                          alt={name}
                          src={
                            process.env.NEXT_PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL
                          }
                        />
                      )}
                    </Link>
                  </Link>

                  <Link
                    href={`/produkt/${encodeURIComponent(
                      slug
                    )}?id=${encodeURIComponent(databaseId)}`}
                  >
                    <Link>
                      <div className="flex justify-center pt-3">
                        <p className="font-bold text-center cursor-pointer">
                          {name}
                        </p>
                      </div>
                    </Link>
                  </Link>
                  {/* Display sale price when on sale */}
                  {onSale && (
                    <div className="flex justify-center">
                      <div className="pt-1 text-gray-900">
                        {variations && filteredVariantPrice(price)}
                        {!variations && salePrice}
                      </div>
                      <div className="pt-1 ml-2 text-gray-900 line-through">
                        {variations && filteredVariantPrice(price, "right")}
                        {!variations && regularPrice}
                      </div>
                    </div>
                  )}
                  {/* Display regular price when not on sale */}
                  {!onSale && (
                    <p className="pt-1 text-center text-gray-900">{price}</p>
                  )}
                </div>
              );
            }
          )
        ) : (
          <div className="mx-auto text-xl font-bold text-center text-gray-800 no-underline uppercase">
            Ingen produkter funnet
          </div>
        )}
      </div>
    </section>
    <Footer />
  </div>;
};

export default Shop;

export async function getStaticProps() {
  const result = await client.query({
    query: FETCH_ALL_PRODUCTS_QUERY,
  });

  return {
    props: {
      products: result.data.products.nodes,
    },
    revalidate: 10,
  };
}
