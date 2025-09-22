import React, { useState } from "react";
import { StyledButton } from "../Button/Button.styles";
import { Box } from "@mui/material";

export const Accordion = () => {
  const [expand, setExpand] = useState(false);

  const toggleClick = () => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <div>
      <StyledButton onClick={toggleClick}>
        Header <span>{expand ? "-" : "+"}</span>
      </StyledButton>
      {expand && (
        <Box>This is a content,Another style of Writing ternary operator</Box>
      )}
      {expand ? <Box>This is a content</Box> : <Box>Hide Content</Box>}
    </div>
  );
};
