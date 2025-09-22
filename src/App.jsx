import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import logo from "./logo.svg";
import viteLogo from "/vite.svg";
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
import { Accordion } from "./components/Accordion/Accordion";
import { Main } from "./components/StyledComponents/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const theme = {
  dark: { primary: "#000", text: "#fff" },
  light: { primary: " #fff", text: "#000" },
  fontFamily: "Cambria",
};

const GlobalStyle = createGlobalStyle`button { font-family:${(props) =>
  props.theme.fontFamily}}`;

const navigate = useNavigate();

const routeClick = () => {
  navigate("/styled-components");
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            {/* <img
          src={logo}
          className="App-logo"
          alt="logo"
        /> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <AnimatedLogo
                src={logo}
                alt="React Logo"
              />
              <img
                src={viteLogo}
                alt="Vite Logo"
                style={{ height: "40vmin", width: "auto" }}
              />
            </div>
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
            <Accordion />
            <br />
            <Link to="/styled-components">
              <DarkButton onClick={routeClick}>
                Go to Styled Components Page
              </DarkButton>
            </Link>
          </header>
          <Routes>
            <Route
              path="/styled-components"
              element={<Main />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
