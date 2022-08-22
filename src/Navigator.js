import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import Icon from "react-native-vector-icons/FontAwesome";
import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
// import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator()

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
        name='Profile'
        component={Feed}
        options={{
          tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)