import "./App.css";

import AppContainer from "./Components/AppContainer";
import ScreenSection from "./Components/ScreenSection";
import TopHeader from "./Components/TopHeader";
import KeysSection from "./Components/KeysSection";

function App() {
  return (
    <AppContainer>
      <TopHeader />
      <ScreenSection />
      <KeysSection />
    </AppContainer>
  );
}

export default App;
