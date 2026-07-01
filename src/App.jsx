import React, { useState, useEffect } from "react";
import MainLayout from "./Layout/MainLayout";
import IntroScreen from "./Components/IntroScreen";

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
          {loading ? <IntroScreen /> : <MainLayout />}
    </>
  )
}

export default App
