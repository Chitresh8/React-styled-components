import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import logo from "./logo.svg";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";
import TimePicker from "./components/Button/TimePicker";
import StatusActiveInput from "./components/Button/StatusActiveInput";
import StatusActiveInputs from "./components/Button/StatusActiveInputs";
import DropDown from "./components/DropDown";

const theme = {
  dark: { primary: "#000", text: "#fff" },
  light: { primary: " #fff", text: "#000" },
  fontFamily: "Cambria",
};

const GlobalStyle = createGlobalStyle`button { font-family:${(props) =>
  props.theme.fontFamily}}`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {/* <img
          src={logo}
          className="App-logo"
          alt="logo"
        /> */}
          <AnimatedLogo src={logo} />
          <button className="normal-css-button"> Normal CSS Button</button>
          <br />
          <StyledButton type="submit">Styled Button</StyledButton>
          <br />
          <div>
            <StyledButton variant="outlined">Styled Button</StyledButton>
          </div>
          <br />
          <FancyButton as="a">Fancy Button</FancyButton>
          <br />
          <SubmitButton>Submit</SubmitButton>
          <br />
          <DarkButton>Dark Theme</DarkButton>
          <br />
          <TimePicker />
          <br />
          <StatusActiveInput />
          <br />
          <StatusActiveInputs />
          <br />
          <DropDown />
          <br />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
