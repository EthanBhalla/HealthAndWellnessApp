import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={
      {
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }
    }>
      <Tabs.Screen 
        name="index" 
        options= {{
          title: 'Home Page',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="workout" 
        options= {{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="nutrition" 
        options= {{
          tabBarLabel: 'Nutrition',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-apple" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options= {{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;