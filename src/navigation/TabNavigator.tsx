// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/TabScreen/Home';
// import Profile from '../screens/TabScreen/Profile';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Pastikan ini benar
// import { Text } from 'react-native';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           // Debugging log untuk memeriksa iconName
//           console.log(`Icon name for route ${route.name}: ${iconName}`);

//           return (
//             <>
//               <Ionicons
//                 name={iconName ?? 'alert-circle-outline'} // Fallback icon jika iconName tidak ada
//                 size={size || 24} // Ukuran default jika size tidak tersedia
//                 color={color}
//               />
//               {/* Jika ingin menampilkan label, bisa diaktifkan */}
//               {/* <Text style={{ color }}>{route.name}</Text> */}
//             </>
//           );
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabel: () => null, // Hilangkan label tab jika tidak ingin menampilkannya
//       })}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/TabScreen/HomeScreen';
import ProductScreen from '../screens/TabScreen/ProductScreen';
import OrderScreen from '../screens/TabScreen/OrderScreen';
import SalesScreen from '../screens/TabScreen/SalesScreen';
import SearchScreen from '../screens/TabScreen/SearchScreen';
import ReportScreen from '../screens/TabScreen/ReportScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Menghilangkan tab di sisi kiri atas
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Tentukan nama ikon berdasarkan nama rute
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Products':
              iconName = focused ? 'ios-storefront' : 'ios-storefront-outline';
              break;
            case 'Orders':
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
              break;
            case 'Sales':
              iconName = focused ? 'ios-pricetag' : 'ios-pricetag-outline';
              break;
            case 'Search':
              iconName = focused ? 'ios-search' : 'ios-search-outline';
              break;
            case 'Reports':
              iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
              break;
            default:
              iconName = 'alert-circle-outline'; // Ikon default jika tidak ada yang cocok
          }

          // Kembalikan ikon Ionicons untuk tab yang sesuai
          return (
            <Ionicons
              name={iconName}
              size={size || 24} // Ukuran default jika tidak ada ukuran yang diberikan
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',  // Warna tab aktif
        tabBarInactiveTintColor: 'gray', // Warna tab tidak aktif
        tabBarLabel: () => null,  // Sembunyikan label untuk tab
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Sales" component={SalesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reports" component={ReportScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;


