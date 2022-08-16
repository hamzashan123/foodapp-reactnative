import React, { useEffect, useState } from 'react';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';

const App = () => {
  const [showSplash, setshowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplash(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* <NavigationContainer>
        <AuthStack />
      </NavigationContainer> */}
      {showSplash ? <Splash /> : <Home />}
    </>
  );
};

export default App;
