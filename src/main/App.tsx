/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './router';

const App: React.FC = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <Router />
    <StatusBar style="dark" />
  </SafeAreaProvider>
);

export default App;
