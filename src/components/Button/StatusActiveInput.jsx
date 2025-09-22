// src/components/StatusActiveInput.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const StyledInput = styled.input`
  padding: 20px;
  border: 2px solid ${({ isActive }) => (isActive ? "green" : "gray")};
  border-radius: 5px;
  outline: none;
  width: 200px;
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "green" : "gray")};
  &:focus {
    left: 10px;
  }
`;

const StatusActiveInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [isActive]);
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <StyledInputContainer>
      <StyledInputContainer>
        <StatusIndicator isActive={isActive} />
      </StyledInputContainer>
      <StyledInput
        type="text"
        isActive={isActive}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </StyledInputContainer>
  );
};

export default StatusActiveInput;
