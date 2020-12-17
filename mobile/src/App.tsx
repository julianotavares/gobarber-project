import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <View />;
};
export default App;
