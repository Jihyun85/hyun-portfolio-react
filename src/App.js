import GlobalFonts from "./components/styles/GlobalFonts";
import Normalize from "./components/styles/Normalize";
import Router from "./Router";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
