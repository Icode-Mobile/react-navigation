import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: true,
          headerStyle: { backgroundColor: 'gray' },
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: 'Home',
            headerTitleStyle: { color: 'white' },
          }}
          name='home'
          component={Home}
        />
        <Stack.Screen name='details' component={Details} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name='home' component={Home} />
        <Tab.Screen name='details' component={Details} />
      </Tab.Navigator> */}
      {/* <Bottom.Navigator>
        <Bottom.Screen name='home' component={Home} />
        <Bottom.Screen name='details' component={Details} />
      </Bottom.Navigator> */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name='home' component={Home} />
        <Drawer.Screen name='details' component={Details} />
      </Drawer.Navigator> */}
      <StatusBar hidden />
    </NavigationContainer>
  );
}
