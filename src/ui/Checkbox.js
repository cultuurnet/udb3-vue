import PropTypes from 'prop-types';
import { getBoxProps, boxPropTypes, Box } from './Box';

const Checkbox = ({
  id,
  name,
  checked,
  disabled,
  onToggle,
  className,
  ...props
}) => (
  <Box
    as="input"
    type="checkbox"
    id={id}
    name={name}
    checked={checked}
    disabled={disabled}
    onChange={onToggle}
    className={className}
    cursor="pointer"
    {...getBoxProps(props)}
  />
);

Checkbox.propTypes = {
  ...boxPropTypes,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
};

Checkbox.defaultprops = {
  name: '',
  checked: false,
  disabled: false,
  onToggle: () => {},
};

export { Checkbox };
