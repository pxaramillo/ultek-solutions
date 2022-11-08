import PropTypes from 'prop-types';
import React from 'react';

const ProductPrice = ({ onSale, regularPrice, salePrice }) => {
    if (!regularPrice) {
        return null;
    }
    if (!onSale) {
        return (
            <div>
                <span>{`$${parseFloat(regularPrice).toFixed(2)}`}</span>
            </div>
        );
    }

    return (
        <div>
            <span sale={onSale}>{`$${parseFloat(regularPrice).toFixed(2)}`}</span>
            <span>{`$${parseFloat(salePrice).toFixed(2)}`}</span>
        </div>
    );
};

ProductPrice.propTypes = {
    onSale: PropTypes.bool,
    regularPrice: PropTypes.string.isRequired,
    salePrice: PropTypes.string,
};

ProductPrice.defaultProps = {
    onSale: false,
};

export default ProductPrice;