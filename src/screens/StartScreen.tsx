import {View, Text} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';

const StartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Start Screen</Text>
      <Link to="/Main">Go to Home</Link>
    </View>
  );
};

export default StartScreen;
