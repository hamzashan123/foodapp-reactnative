import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.logoText}>
        INDO<Text style={{color: '#CE2829'}}>FOOD</Text>
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: '700',
    color:'black'
  },
});
