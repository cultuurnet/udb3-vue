import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';
import { Inline } from './Inline';
import { Label } from './Label';
import { getBoxProps, boxPropTypes } from './Box';

const CheckboxWithLabel = ({
  id,
  name,
  checked,
  disabled,
  onToggle,
  children,
  className,
  ...props
}) => {
  return (
    <Inline
      as="div"
      className={className}
      alignItems="center"
      spacing={3}
      {...getBoxProps(props)}
    >
      <Checkbox
        id={id}
        onToggle={onToggle}
        name={name}
        checked={checked}
        disabled={disabled}
      />
      <Label cursor="pointer" htmlFor={id}>
        {children}
      </Label>
    </Inline>
  );
};

CheckboxWithLabel.propTypes = {
  ...boxPropTypes,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
};

CheckboxWithLabel.defaultprops = {
  name: '',
  checked: false,
  disabled: false,
  onToggle: () => {},
};

export { CheckboxWithLabel };
