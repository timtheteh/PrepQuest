import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/background1.svg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
}); 