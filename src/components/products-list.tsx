import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ImageSlider from './image-slider';
import ProductPrice from './product-price';

const ProductsList = ({ products }) => {
    if (!products.length) {
        return <>No Products Available.</>;
    }
    return (
        <ul>
            {products.map((product) => {
                if (product.status !== 'publish') {
                    return null;
                }

                return (
                    <li key={product.id} sale={product.on_sale}>
                        {product.images.length === 1 && (
                            <Img fixed={product.images[0].localFile.childImageSharp.fixed} alt={product.images[0].alt || product.images[0].name} />
                        )}
                        {product.images.length > 1 && <ImageSlider images={product.images} imageSize="300px" />}
                        <Link to={`/${product.slug}`}>{product.name}</Link>
                        <ProductPrice onSale={product.on_sale} regularPrice={product.regular_price} salePrice={product.sale_price} />
                        <button to={`/${product.slug}`}>View Product</button>
                    </li1>
                );
            })}
        </ul>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductsList;