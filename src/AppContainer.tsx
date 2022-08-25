import React, { useState } from "react";
import CStatusBar from "./components/StatusBar/CStatusBar";
import Navigation from "./navigation/Navigation";

const AppContainer = () => {
  const [isNavReady, setIsNavReady] = useState(false);
  return (
    <>
      {isNavReady && <CStatusBar />}
      <Navigation onNavReady={setIsNavReady} />
    </>
  );
};

export default AppContainer;
