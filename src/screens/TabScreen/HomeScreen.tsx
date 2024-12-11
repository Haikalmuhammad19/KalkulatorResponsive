import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (width > height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };

    // Listen for orientation changes
    const subscription = Dimensions.addEventListener('change', updateOrientation);

    // Cleanup function to remove the event listener on unmount
    return () => {
      subscription.remove(); // Remove the listener when the component unmounts
    };
  }, []);

  const features = [
    { title: 'Produk', icon: require('../assets/icons/produk.png'), onPress: () => alert('Navigating to Produk') },
    { title: 'Keranjang', icon: require('../assets/icons/keranjang.png'), onPress: () => alert('Navigating to Keranjang') },
    { title: 'Pesanan', icon: require('../assets/icons/pesanan.png'), onPress: () => alert('Navigating to Pesanan') },
    { title: 'Akun', icon: require('../assets/icons/akun.png'), onPress: () => alert('Navigating to Akun') },
    { title: 'Fitur 5', icon: require('../assets/icons/fitur5.png'), onPress: () => alert('Navigating to Fitur 5') },
    { title: 'Fitur 6', icon: require('../assets/icons/fitur6.png'), onPress: () => alert('Navigating to Fitur 6') },
    { title: 'Fitur 7', icon: require('../assets/icons/fitur7.png'), onPress: () => alert('Navigating to Fitur 7') },
    { title: 'Fitur 8', icon: require('../assets/icons/fitur8.png'), onPress: () => alert('Navigating to Fitur 8') },
  ];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Aplikasi Grosir</Text>
      <ScrollView contentContainerStyle={styles.featuresContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            style={[ 
              styles.featureButton, 
              { width: orientation === 'landscape' ? width / 4 : width / 2 - PixelRatio.getPixelSizeForLayoutSize(10) } 
            ]}
            onPress={feature.onPress}
          >
            <Image source={feature.icon} style={styles.icon} />
            <Text style={styles.featureText}>{feature.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    fontWeight: 'bold',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  featureButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    margin: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  featureText: {
    color: '#fff',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
  },
});

export default HomeScreen;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
