import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, GestureResponderEvent } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/styles';

// Main component for the Nutrition Camera app
export default function App() {
  // State to manage the camera facing direction
  const [facing, setFacing] = useState<CameraType>('back');
  // State to manage camera permissions
  const [permission, requestPermission] = useCameraPermissions();
  // State to manage the gallery of images
  const [gallery, setGallery] = useState<string[]>([]);
  // State to manage the visibility of the gallery
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // Reference to the camera view
  const cameraRef = useRef<CameraView>(null);

  // If permissions are still loading, show an empty view
  if (!permission) {
    return <View />;
  }

  // If permissions are not granted, show a message and a button to request permission
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // Function to toggle the camera facing direction
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Function to open the image picker and add the selected image to the gallery
  async function openImagePicker() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setGallery([...gallery, result.assets[0].uri]);
    }
  }

  // Function to take a picture and add it to the gallery
  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        setGallery([...gallery, photo.uri]);
      }
    }
  }

  // Function to toggle the visibility of the gallery
  function toggleGallery() {
    setIsGalleryOpen(!isGalleryOpen);
  }

  // Function to delete a picture from the gallery
  function deletePicture(uri: string) {
    setGallery(gallery.filter(item => item !== uri));
  }

    function toggleCamera(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={styles.container}>
      {isGalleryOpen ? (
        // Gallery view
        <ScrollView contentContainerStyle={styles.galleryContainer}>
          {gallery.map((uri, index) => (
            <View key={index} style={styles.galleryItem}>
              <Image source={{ uri }} style={styles.galleryImage} />
              <TouchableOpacity style={styles.deleteButton} onPress={() => deletePicture(uri)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Button title="Back to Camera" onPress={toggleGallery} />
        </ScrollView>
      ) : (
        // Camera view
        <>
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
            <View style={styles.buttonContainer}>
                
                
                <TouchableOpacity style={styles.button} onPress={toggleCamera}>
                    <Ionicons name="camera-outline" size={64} style={styles.icon} />
                </TouchableOpacity>
                
                

                <TouchableOpacity style={styles.button} onPress={toggleGallery}>
                    <Ionicons name="images-outline" size={64} style={styles.icon} />
                </TouchableOpacity>
                
                
                
            </View>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                    <View style={styles.innerCircle} />
            </TouchableOpacity>
        </CameraView>
        </>
      )}
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  captureButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  galleryItem: {
    position: 'relative',
    margin: 5,
  },
  galleryImage: {
    width: 100,
    height: 100,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
  },
  icon: {
    color: 'white', // or any color that contrasts with the background
  },
});