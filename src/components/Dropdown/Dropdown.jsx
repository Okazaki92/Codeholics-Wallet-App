import { StyledSelect } from "./Dropdown.styled";
import PropTypes from "prop-types";

const Dropdown = ({ options, placeholder, onChange }) => {
  return (
    <StyledSelect
      searchable={false}
      placeholder={placeholder}
      options={options}
      values={[]}
      onChange={onChange}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
