import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Define the type for each product
interface Product {
  id: string;
  name: string;
  price: string;
  image: any; // Type for image source (can be ImageSourcePropType or just any)
}

const { width } = Dimensions.get('window');

// Product data
const products: Product[] = [
  {
    id: '1',
    name: 'Produk 1',
    price: 'Rp 100.000',
    image: require('../assets/images/product1.jpeg'),
  },
  {
    id: '2',
    name: 'Produk 2',
    price: 'Rp 200.000',
    image: require('../assets/images/product2.jpeg'),
  },
  {
    id: '3',
    name: 'Produk 3',
    price: 'Rp 150.000',
    image: require('../assets/images/product3.jpeg'),
  },
  {
    id: '4',
    name: 'Produk 4',
    price: 'Rp 250.000',
    image: require('../assets/images/product4.jpeg'),
  },
];

const ProductScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // renderItem function typed with ListRenderItemInfo
  const renderItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity style={styles.productCard} onPress={() => alert(`Navigating to ${item.name}`)}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Tambah ke Keranjang</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View style={{ flex: 1, transform: [{ scale: scaleAnim }] }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  productCard: {
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

export default ProductScreen;

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
