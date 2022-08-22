import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import Icon from "react-native-vector-icons/FontAwesome";
import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator  initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default ({ navigation, route }) => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={'Feed'}
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: '#33f'
      }}
    >
      <Tab.Screen
        name='Feed'
        component={Feed}
        options={{
          tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }}
      />
      <Tab.Screen
        name='AddPhoto'
        component={AddPhoto}
        options={{
          tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
)