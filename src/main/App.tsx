/* eslint-disable react/style-prop-object */
import { ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import { MainTheme } from 'shared/theme';

import Router from './router';

const App: React.FC = () => (
  <ThemeProvider theme={MainTheme}>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Router />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
