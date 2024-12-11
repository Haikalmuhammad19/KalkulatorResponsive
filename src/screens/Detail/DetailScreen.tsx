import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DetailScreen = () => {
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: slideAnim }] }}>
      <Text style={{ fontSize: 18 }}>Detail Screen</Text>
    </Animated.View>
  );
};

export default DetailScreen;