import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';
import EditScreenInfo from '@/components/EditScreenInfo';

export default function HomeScreen() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    // Simulate fetching step count from a pedometer or health API
    const fetchStepCount = async () => {
      // Replace this with actual API call
      const steps = await new Promise(resolve => setTimeout(() => resolve(1234), 1000));
      setStepCount(steps);
    };

    fetchStepCount();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.welcome}>Welcome User!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Step Count: {stepCount}</Text>
      </View>

      <Text style={styles.edit}>Go ahead and edit me!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, // Adjust this value as needed
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 18,
    color: 'green',
    marginBottom: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  stepContainer: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },
  stepText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  edit: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
