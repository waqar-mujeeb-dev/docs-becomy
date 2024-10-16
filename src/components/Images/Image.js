import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className = '', style = {} }) => {
  return (
    <div className={className}>
      <img 
        src={src} 
        alt={alt} 
        className="h-full object-contain" 
        style={style} 
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};


export default Image;
