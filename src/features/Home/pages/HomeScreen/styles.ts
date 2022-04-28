import { makeStyles } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const useStyles = makeStyles((theme) =>
  StyleSheet.create({
    container: { backgroundColor: '#f0f', flex: 1 },
  }),
);
