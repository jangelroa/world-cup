import { useState } from "react";
import styled, { css } from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #111;
  align-items: center;
  // display: flex;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

const DropdownStyle = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  max-height: 40vmax;
  min-width: 9rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;

  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

const DropdownItem = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: #166edc;
      font-weight: 500;
    `}

  &:hover,
  :focus,
  :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;

export const Select = ({ label, initialValue, values, onChange, options }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value) => {
    setCurrentValue(value);
  };

  const handleChange = (value) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <div style={{ width: "150px" }}>
      <SelectContainer>
        <SelectLabelButton onClick={handleOpen}>{label}</SelectLabelButton>
        <DropdownStyle isVisible={open}>
          {options.map((option, index) => (
            <DropdownItem
              onClick={() => handleChange(option.value)}
              active={option.value === currentValue}
              key={index}
            >
              {option.item}
            </DropdownItem>
          ))}
        </DropdownStyle>
      </SelectContainer>
    </div>
  );
};
