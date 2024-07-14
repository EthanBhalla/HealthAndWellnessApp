
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Button, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState } from 'react';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation from React Navigation

export default function NutritionScreen() {
  const navigation = useNavigation(); // Getting the navigation object

  const handlePress = () => {
    navigation.navigate('NutritionDetection'); // Navigating to the NutritionDetection screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Go to Nutrition Detection" onPress={handlePress} /> {/* Adding the button */}
    </View>
  );
}

// Defining CameraTypes
export enum LocalCameraType {
  front = 'front',
  back = 'back',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
