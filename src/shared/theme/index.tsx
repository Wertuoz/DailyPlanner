import { lightColors } from '@rneui/base';
import { makeStyles, FullTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

// Base theme for all ui components from react-native-elements
export const MainTheme: Partial<FullTheme> = {
  Button: {
    buttonStyle: {},
    containerStyle: {},
    titleStyle: {},
  },
  Input: {
    containerStyle: {
      padding: 0,
      margin: 0,
    },
    inputContainerStyle: {
      padding: 0,
      margin: 0,
    },
    underlineColorAndroid: 'transparent',
    inputStyle: [
      {
        borderWidth: 0,
      },
    ],
    placeholderTextColor: '#667799',
  },
  colors: {
    ...lightColors,
    blue10: '#001A33',
    blue20: '#339DFF',
    neutral10: '#14181F',
    neutral20: '#F9FAFB',
    secondaryYellow10: '#DB940B',
    secondaryYellow20: '#FEF6E7',
    secondaryGreen10: '#35B07B',
    secondaryGreen20: '#EBF9F3',
    secondaryCherry10: '#E3021E',
    secondaryCherry20: '#FFE6E9',
  },
  fonts: {
    archivoBlack: 'Archivo-Black',
    archivoBold: 'Archivo-Bold',
  },
  spaceUnits: {
    sp4: 4,
    sp8: 8,
    sp12: 12,
    sp16: 16,
    sp20: 20,
    sp24: 24,
    sp28: 28,
    sp32: 32,
    sp40: 40,
  },
};

// globalStyles to use everywhere
export const useGlobalStyles = makeStyles((theme) =>
  StyleSheet.create({
    safeArea: { backgroundColor: theme.colors?.blue20, flex: 1 },
    body14Medium: {
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'center',
    },
  }),
);
