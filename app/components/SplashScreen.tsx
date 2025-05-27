import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
import backgroundAnimation from '../assets/animations/splashScreenAnimation.json';
import logoAnimation from '../assets/animations/splashScreenLogoAnimation.json';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={backgroundAnimation}
        autoPlay
        loop={true}
        style={styles.backgroundAnimation}
        resizeMode="cover"
      />
      <LottieView
        source={logoAnimation}
        autoPlay
        loop={false}
        speed={1.2}
        style={styles.logoAnimation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundAnimation: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoAnimation: {
    width: width * 0.7,
    height: width * 0.7,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -width * 0.35 },
      { translateY: -width * 0.35 },
    ],
  },
}); 