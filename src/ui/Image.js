import PropTypes from 'prop-types';
import { Box, boxPropTypes, getBoxProps } from './Box';

const Image = ({ src, alt, className, ...props }) => (
  <Box
    as="img"
    src={src}
    alt={alt}
    className={className}
    {...getBoxProps(props)}
  />
);

Image.propTypes = {
  ...boxPropTypes,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  width: 600,
  height: 'auto',
};

export { Image };
