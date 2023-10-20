import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircleIcon from "@mui/icons-material/Circle";

export default function DropDown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "200px",
          "&.MuiFormControl-root css-1orw215-MuiFormControl-root": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          },
        }}
      >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&.MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem
            value="Active"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&.MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                },
            }}
          >
            <CircleIcon
              sx={{
                color: "green",
              }}
            />
            Active
          </MenuItem>
          <MenuItem
            value="In Active"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&.MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                },
            }}
          >
            <CircleIcon
              sx={{
                color: "red",
              }}
            />
            In Active
          </MenuItem>
          <MenuItem
            value="Away"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&.MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                },
            }}
          >
            <CircleIcon
              sx={{
                color: "yellow",
              }}
            />
            Away
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
<svg
  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-hfutr2-MuiSvgIcon-root-MuiSelect-icon"
  focusable="false"
  aria-hidden="true"
  viewBox="0 0 24 24"
  data-testid="ArrowDropDownIcon"
>
  <path d="M7 10l5 5 5-5z"></path>
</svg>;
