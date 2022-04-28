import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGlobalStyles } from 'shared/theme';

import { useStyles } from './styles';

const HomeScreen: React.FC = () => {
  const globalStyles = useGlobalStyles();
  const styles = useStyles();
  console.log('SHOW HOME');
  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text>HomeScreen. Hello!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
