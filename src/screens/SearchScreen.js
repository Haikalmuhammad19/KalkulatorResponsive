import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Dimensions, PixelRatio, TextInput, FlatList, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const SearchScreen = ({ route }) => {
  const { products } = route.params; // Ambil data produk dari route params
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: PixelRatio.getPixelSizeForLayoutSize(10) }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari produk..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: width - 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  productCard: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productName: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
  },
});

export default SearchScreen;