import { StyledSelect } from "./Dropdown.styled";

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

export default Dropdown;
