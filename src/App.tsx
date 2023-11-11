import * as React from 'react';
import { NavigationContainer, UNSTABLE_usePreventRemove } from '@react-navigation/native';

import Router from './pages/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
   </NavigationContainer>
  );
}

export default App;