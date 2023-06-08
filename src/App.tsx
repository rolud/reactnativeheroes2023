import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationProvider from './NavigationProvider';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationProvider />
    </SafeAreaProvider>
  );
}

export default App;
