// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TabNavigator from '../navigation/TabNavigator'; // Adjusted path
// import DetailExample from '../screens/Detail/DetailExample';
// import DrawerNavigator from './DrawerNavigator';
// import StartScreen from '../screens/StartScreen';
// import DetailExample2 from '../screens/Detail/DetailExample2';

// const Stack = createNativeStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="StartScreen">
//         <Stack.Screen name="StartScreen" component={StartScreen} />
//         <Stack.Screen
//           name="Main"
//           component={DrawerNavigator}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="DetailExample" component={DetailExample} />
//         <Stack.Screen name="DetailExample2" component={DetailExample2} />
//         {/* Include TabNavigator if needed */}
//         <Stack.Screen name="Tabs" component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Detail/LoginScreen';
import DetailScreen from '../screens/Detail/DetailScreen';
import HomeScreen from '../screens/TabScreen/HomeScreen';
import ProductScreen from '../screens/TabScreen/ProductScreen';
import OrderScreen from '../screens/TabScreen/OrderScreen';
import SalesScreen from '../screens/TabScreen/SalesScreen';
import SearchScreen from '../screens/TabScreen/SearchScreen';
import ReportScreen from '../screens/TabScreen/ReportScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Sales" component={SalesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reports" component={ReportScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

