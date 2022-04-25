import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const HomeScreen: React.FC = () => {
  console.log('SHOW HOME');
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text>HomeScreen. Hello!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
