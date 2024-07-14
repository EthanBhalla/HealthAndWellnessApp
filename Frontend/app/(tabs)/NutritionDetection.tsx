import EditScreenInfo from '../../components/EditScreenInfo'; // Ensure this path is correct
import { Text, View } from '../../components/Themed'; // Ensure this path is correct
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Permissions from './Permissions'; // Ensure this path is correct
import React from 'react';

export default function NutritionDetection() {
  const device = useCameraDevice('back'); // Use 'back' or 'front' directly
  const { hasPermission } = useCameraPermission();
  const cameraRef = useRef<Camera>(null);

  if (!hasPermission) {
    return <Permissions />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Detection</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {device && (
        <Camera
          style={{ width: 300, height: 300 }}
          ref={cameraRef}
          device={device}
          isActive={true}
          frameProcessor={async (frame) => {
            // Process the frame here
          }}
        />
      )}
    </View>
  );
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
