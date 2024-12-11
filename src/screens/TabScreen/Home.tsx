import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  DetailExample: { message: string };
  DetailExample2: { data: any };
};

type DetailNavigationProps = NavigationProp<RootStackParamList, 'DetailExample'>;

const Home = () => {
  const navigation = useNavigation<DetailNavigationProps>();

  const handleGoToDetail = () => {
    navigation.navigate('DetailExample', { message: 'INI VALUE DARI HOME' });
  };

  const handleGoToDetail2 = () => {
    const dataToSend = {
      id: 'NPP : ' + 20220040008,
      name: 'Nama : Haikal Muhammad Kurniawan',
      age: 'Usia : ' + 21,
    };
    navigation.navigate('DetailExample2', { data: dataToSend });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToDetail}>
        <Text style={styles.buttonText}>Go to Detail</Text>
      </TouchableOpacity>
      <Button title="Go to Detail 2" onPress={handleGoToDetail2} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Home;
