// src/components/StatusActiveInput.js
import React, { useState } from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid ${({ isActive }) => (isActive ? "green" : "gray")};
  border-radius: 5px;
  outline: none;
  width: 200px;

  &:focus {
    border-color: blue;
  }
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "green" : "gray")};
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StatusActiveInputs = () => {
  const [isActive, setIsActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        isActive={isActive}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <StatusIndicator
        isActive={isActive}
        onClick={toggleDropdown}
      />
      <Dropdown isActive={showDropdown}>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </Dropdown>
    </StyledInputContainer>
  );
};

export default StatusActiveInputs;
