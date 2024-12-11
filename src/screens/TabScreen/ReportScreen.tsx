import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const ReportScreen = () => {
  const [orientation, setOrientation] = useState('portrait');
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    // Detect screen orientation changes
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (width > height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };

    // Listen for orientation changes
    const listener = Dimensions.addEventListener('change', updateOrientation);

    // Cleanup listener on unmount
    return () => {
      listener.remove(); // Use `remove()` instead of `removeEventListener()`
    };
  }, []);

  const handleGenerateReport = () => {
    Alert.alert("Detailed Report", "Generating detailed product report...");
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { height: orientation === 'landscape' ? height : 'auto' }]}
      >
        {/* Title */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.title}>Report Overview</Text>
          <Text style={styles.subtitle}>Detailed performance report for Q4 2024</Text>
        </Animated.View>

        {/* Report Content */}
        <Animated.View style={[styles.reportSection, { opacity: fadeAnim }]}>
          <Text style={styles.reportText}>Total Sales: Rp 1,250,000</Text>
          <Text style={styles.reportText}>Total Products Sold: 500</Text>
          <Text style={styles.reportText}>New Customers: 120</Text>
        </Animated.View>

        {/* Placeholder for Charts/Graphs */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartPlaceholder}>[Chart Placeholder]</Text>
        </View>

        {/* Action Button */}
        <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
          <TouchableOpacity onPress={handleGenerateReport}>
            <Text style={styles.buttonText}>Generate Detailed Report</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    width: width,
  },
  title: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    fontWeight: 'bold',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
    color: '#333',
  },
  subtitle: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    color: '#777',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  reportSection: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reportText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
    color: '#333',
  },
  chartContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  chartPlaceholder: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    color: '#888',
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(30),
  },
  buttonText: {
    color: '#fff',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
  },
});

export default ReportScreen;
