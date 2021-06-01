import GlobalFonts from "./components/styles/GlobalFonts";
import Normalize from "./components/styles/Normalize";
import GlobalReset from "./components/styles/GlobalReset";
import Router from "./Router";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Normalize />
      <GlobalReset />
      <Router />
    </>
  );
};

export default App;
