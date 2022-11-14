import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from "../components/layout";
import Header from "../components/header";
import Container from '../components/container';

const Shop = (/*{allPosts: { edges }, preview }*/) => {
    return (
        <Layout /*preview={preview} */>
             <Head>
                <title>SHOP - Ultek Solutions</title>
            </Head>
            <Header />
            <Container>
                <h1>Shop</h1>
            </Container>
        </Layout>
    )
}

export default Shop;