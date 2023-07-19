import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyTabs} from './Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//app structure
const App = () => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    
  );
  
};

export default App;
