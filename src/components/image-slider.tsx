import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const ImageSlider = ({ images, imageSize }) => {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    const setPreviousImageIndex = React.useCallback(() => {
        if (activeImageIndex === 0) {
            setActiveImageIndex(images.length - 1);
        } else {
            setActiveImageIndex(activeImageIndex - 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    const setNextImageIndex = React.useCallback(() => {
        if (activeImageIndex === images.length - 1) {
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(activeImageIndex + 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    if (!images.length) {
        return null;
    }

    return (
        <div imageSize={imageSize}>
            <button aria-label="See previous image in carousel" onClick={setPreviousImageIndex}>
                {'<'}
            </button>
            <Img fixed={images[activeImageIndex].localFile.childImageSharp.fixed} alt={images[activeImageIndex].alt || images[activeImageIndex].name} />
            <button aria-label="see next image in carousel" onClick={setNextImageIndex}>
                {'>'}
            </button>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
    imageSize: PropTypes.string.isRequired,
};

export default ImageSlider;