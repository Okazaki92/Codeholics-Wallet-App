import styled from "@emotion/styled";
import Select from "react-dropdown-select";
import "../../stylesheet/variables.css";
import "../../stylesheet/fonts.css";

export const StyledSelect = styled(Select)`
  border-radius: 30px;
  border: 1px solid #000;
  transition: all 0.3s ease-out;
  margin-bottom: 20px;
  height: 50px;

  .react-dropdown-select-input {
    overflow: hidden;
    font-size: 16px;

    ::placeholder {
      color: black;
      font-size: 16px;
    }
  }

  .react-dropdown-select-content {
    padding: 14px 36px 14px 20px;
    color: black;
    font-family: "Circe";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .react-dropdown-select-item {
    color: black;
    font-family: "Circe", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 12px 0px 8px 20px;
    border-bottom: none;
    border-top: none;
    :hover {
      background-color: white;
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: black;
    background-color: white;
  }
  .react-dropdown-select-dropdown {
    height: 182px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(25px);
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.1);
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .react-dropdown-select-option {
    transition: all 0.3s ease-out;
  }

  .react-dropdown-select {
    position: relative;
  }
  .react-dropdown-select-dropdown-handle {
    position: absolute;
    width: 20px;
    right: 20px;
  }
`;
