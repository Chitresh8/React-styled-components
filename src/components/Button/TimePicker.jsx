import React, { useState } from "react";
import styled from "styled-components";

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  //   gap: 10px;
`;
const TimeInput = styled.input`
  width: 70px;
  padding: 5px;
  border: 1px solid #ccc;
`;
const AmPmDropdown = styled.select`
  height: 32px;
  padding: 5px;
  border: 1px solid #ccc;
  //   border-radius: 5px;
`;

const TimePicker = () => {
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState("AM");

  const handleTimeChange = (e) => {
    const inputTime = e.target.value;
    setTime(inputTime);
  };
  const handleAmPmChange = (e) => {
    const selectedAmPm = e.target.value;
    setAmPm(selectedAmPm);
  };
  return (
    <TimePickerContainer>
      <TimeInput
        type="time"
        value={time}
        onChange={handleTimeChange}
      />
      <AmPmDropdown
        value={amPm}
        onChange={handleAmPmChange}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </AmPmDropdown>
    </TimePickerContainer>
  );
};
export default TimePicker;
