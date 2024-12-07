// import { View, Text } from 'react-native';
// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';
// // import {GestureHandlerRootView} from 'react-native-gesture-handler';

// const App = () => {
//   return (
//     <>
//       <AppNavigator />
//     </>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { tambah, kurang } from './src';

// Mengambil dimensi layar perangkat
const { width, height } = Dimensions.get('window');

// Menentukan tinggi header responsif berdasarkan lebar layar
const headerHeight = width > 600 ? 80 : 60;
const fontSizeHeader = width > 600 ? 24 : 18;
const buttonPadding = width > 600 ? 20 : 15;

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState(0);

  const tekanBagi = () => {
    if (angka2 === '0') {
      setHasil;
    } else {
      const hasilBagi = parseInt(angka1) / parseInt(angka2);
      setHasil(hasilBagi);
    }
  };

  const tekanKali = () => {
    const hasilKali = parseInt(angka1) * parseInt(angka2);
    setHasil(hasilKali);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { height: headerHeight }]}>
        <Text style={[styles.headerText, { fontSize: fontSizeHeader }]}>
          Aplikasi Kalkulator Responsif
        </Text>
      </View>

      {/* Count Display */}
      <Text style={styles.title}>{`Count : ${count}`}</Text>
      
      {/* Tombol Increment dan Decrement */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={decrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>

      {/* Input Angka */}
      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 1"
        onChangeText={(text) => setAngka1(text)}
        value={angka1}
        style={styles.input}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 2"
        onChangeText={(text) => setAngka2(text)}
        value={angka2}
        style={styles.input}
      />

      {/* Tombol Operasi */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={() => setHasil(tambah(parseInt(angka1), parseInt(angka2)))}>
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={() => setHasil(kurang(parseInt(angka1), parseInt(angka2)))}>
          <Text style={styles.buttonText}>Kurang</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={tekanBagi}>
          <Text style={styles.buttonText}>Bagi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { paddingVertical: buttonPadding }]} onPress={tekanKali}>
          <Text style={styles.buttonText}>Kali</Text>
        </TouchableOpacity>
      </View>

      {/* Hasil */}
      <Text style={styles.result}>Hasil : {hasil}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Agar header tetap di atas
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: width > 600 ? '50%' : '80%', // Lebar responsif untuk input
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width > 600 ? '50%' : '80%', // Lebar responsif untuk tombol
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#2196F3',
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default App;


// import React from 'react';
// import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const HomeScreen = ({navigation}: {navigation: any}) => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button title="Next" onPress={() => navigation.navigate('NextScreen')} />
//     </View>
//   );
// };

// const NextScreen = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Next Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="NextScreen" component={NextScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
