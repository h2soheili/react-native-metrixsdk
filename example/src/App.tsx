import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Metrixsdk from 'react-native-metrixsdk';

export default function App() {
  React.useEffect(() => {
    Metrixsdk.sendCustomEvent('232323', {key1: 'value2',sdsdsd:'sdsdsdsdsd',d:'sdww'})
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
