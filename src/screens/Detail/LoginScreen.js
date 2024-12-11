import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username === 'haikal') {
      // Replace Login screen with TabNavigator after successful login
      navigation.replace('Tab');
    } else {
      Alert.alert('Login Gagal', 'Username salah.');
    }
  };

  const handleCancel = () => {
    // Exit the app if user presses Cancel
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/logo.png')} // Path to your logo image
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>LOGIN</Text>
      <Text style={styles.subtitle}>Silahkan Login untuk masuk aplikasi</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Batal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(10),
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: wp(25),
    height: wp(25),
    marginBottom: hp(2),
  },
  welcomeText: {
    fontSize: wp(6),
    color: '#3A63F3',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: wp(4),
    color: '#666666',
    textAlign: 'center',
    marginBottom: hp(3),
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp(2),
  },
  label: {
    fontSize: wp(4),
    color: '#333333',
    marginBottom: hp(0.5),
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    fontSize: wp(4), // Meningkatkan ukuran font untuk keterbacaan
    paddingVertical: hp(1), // Menambahkan padding vertikal untuk input
  },
  buttonContainer: {
    width: '100%',
    marginTop: hp(5),
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.5),
    borderRadius: wp(25),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  cancelButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: hp(1.5),
    borderRadius: wp(25),
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: wp(4), // Meningkatkan ukuran font untuk keterbacaan
    fontWeight: 'bold',
  },
});

export default LoginScreen;