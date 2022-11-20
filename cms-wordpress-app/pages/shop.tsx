import Header from "../components/header";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { getAllProducts } from "../lib/api";
import MoreStories from "../components/more-stories";

const Shop = ({ allProducts: {nodes}, preview}) => {
  const moreProducts = nodes.slice(1);

  return(
    <Layout preview={preview}>
      <Header title="Ultek Solutions - Shop" />
      {moreProducts.length > 0 && <MoreStories posts={moreProducts} />}
    </Layout>
  )
  
}

export default Shop;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allProducts = await getAllProducts(preview)

  return {
    props: { allProducts, preview },
    revalidate: 10,
  }
}
