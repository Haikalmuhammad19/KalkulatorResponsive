import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Define the type for each order
interface Order {
  id: string;
  productName: string;
  status: string;
  total: string;
}

const { width } = Dimensions.get('window');

// Order data
const orders: Order[] = [
  {
    id: '1',
    productName: 'Produk 1',
    status: 'Dikirim',
    total: 'Rp 100.000',
  },
  {
    id: '2',
    productName: 'Produk 2',
    status: 'Dalam Proses',
    total: 'Rp 200.000',
  },
  {
    id: '3',
    productName: 'Produk 3',
    status: 'Selesai',
    total: 'Rp 150.000',
  },
  {
    id: '4',
    productName: 'Produk 4',
    status: 'Dikirim',
    total: 'Rp 250.000',
  },
];

const OrderScreen = () => {
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // renderItem function typed with the Order type
  const renderItem = ({ item }: { item: Order }) => (
    <TouchableOpacity style={styles.orderCard} onPress={() => alert(`Detail pesanan untuk ${item.productName}`)}>
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.orderStatus}>{item.status}</Text>
      <Text style={styles.orderTotal}>{item.total}</Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateY: slideAnim }] }}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.orderList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  orderList: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  orderCard: {
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
  productName: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    color: '#FF5722',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  orderTotal: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});

export default OrderScreen;

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
