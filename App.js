import React from 'react';
import {SERVER_URL, STRIPE_KEY} from '@env';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  console.log('server url', SERVER_URL, STRIPE_KEY);

  return (
    <SafeAreaView>
      <View>
        <Text>server url is: {SERVER_URL}</Text>
        <Text>Stripe key: {STRIPE_KEY}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
