import PropTypes from 'prop-types';
import { Box } from '../publiq-ui/Box';

const BusyIcon = ({ className, ...props }) => {
  return (
    <Box
      className={className}
      as="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 30 20 20"
      {...props}
    >
      <g className="busy" fillRule="evenodd" fill="none">
        <circle id="busy-background" cx="20" cy="40" r="10" />
        <g
          strokeWidth="2"
          transform="translate(14 34)"
          className="busy-spinner"
        >
          <path d="M12 6c0-6-6-6-6-6" transform="rotate(308.674 6 6)">
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              to="360 6 6"
              from="0 6 6"
              type="rotate"
              attributeName="transform"
            />
          </path>
        </g>
      </g>
    </Box>
  );
};

BusyIcon.propTypes = {
  className: PropTypes.string,
};

export { BusyIcon };
