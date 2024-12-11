import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ProductScreen: undefined;
  ProductDetail: { productId: string };
};

type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductScreen'>;

const products = [
  { id: '1', name: 'Produk A' },
  { id: '2', name: 'Produk B' },
  { id: '3', name: 'Produk C' },
  { id: '4', name: 'Produk D' },
];

const ProductScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigation = useNavigation<ProductScreenNavigationProp>(); // Correct typing for navigation

  // Function to handle search input and filter products
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredProducts(products); // Show all products if the search is cleared
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Produk..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      
      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })} // Corrected
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  productCard: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ProductScreen;
