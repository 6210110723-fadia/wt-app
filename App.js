import React from 'react';
import { StyleSheet } from 'react-native';
import Weather from './Components/Weather';

export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: ConstantSourceNode.StatusBarHeight
  },
});
