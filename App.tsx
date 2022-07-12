import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {Results} from './src/screens/Results';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Results />
    </SafeAreaView>
  );
};

export default App;
