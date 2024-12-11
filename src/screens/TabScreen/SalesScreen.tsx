import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Define the type for each sale item
interface Sale {
  id: string;
  productName: string;
  price: string;
  status: string;
  image: any; // You can use 'require' to import images, which return a specific object type
}

const { width } = Dimensions.get('window');

// Sales data
const salesData: Sale[] = [
  {
    id: '1',
    productName: 'Produk A',
    price: 'Rp 50.000',
    status: 'Terjual',
    image: require('../assets/images/productA.jpeg'), // Replace with actual image path
  },
  {
    id: '2',
    productName: 'Produk B',
    price: 'Rp 75.000',
    status: 'Terjual',
    image: require('../assets/images/productB.jpeg'), // Replace with actual image path
  },
  {
    id: '3',
    productName: 'Produk C',
    price: 'Rp 100.000',
    status: 'Tersedia',
    image: require('../assets/images/productC.jpeg'), // Replace with actual image path
  },
  {
    id: '4',
    productName: 'Produk D',
    price: 'Rp 125.000',
    status: 'Terjual',
    image: require('../assets/images/productD.jpeg'), // Replace with actual image path
  },
];

const SalesScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // renderItem function typed with Sale type
  const renderItem = ({ item }: { item: Sale }) => (
    <TouchableOpacity style={styles.saleCard} onPress={() => alert(`Navigating to ${item.productName}`)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productStatus}>{item.status}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <Animated.View style={{ flex: 1, transform: [{ scale: scaleAnim }] }}>
      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.salesList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  salesList: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  saleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    fontWeight: 'bold',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  productPrice: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    color: '#FF5722',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  productStatus: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  addToCartButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
});

export default SalesScreen;

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
