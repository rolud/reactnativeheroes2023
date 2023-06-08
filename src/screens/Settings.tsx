import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = (): JSX.Element => {
  return (
    <View style={styles.layout}>
      <Text>Enter in beta program</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
