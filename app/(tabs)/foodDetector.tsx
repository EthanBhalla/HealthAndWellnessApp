import { defaultStyles } from '@/constants/styles';
import { Href, router } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const FoodDetector: React.FC = () => {

    const handleUploadPress = () => {
        router.push('/(modals)/NutritionCamera' as Href<string | object>);
    }

    return (
        <View style={[styles.container, { gap: 20 }]}>
            <Text style={styles.header}>Welcome to the Food Detector!</Text>
            <Text style={styles.paragraph}>Start by uploading an image to detect the food in it.</Text>
            {/* Add your image upload component here */}
            <TouchableOpacity style={defaultStyles.button} onPress={handleUploadPress}>
                <Text style={defaultStyles.buttonText}>Take a Picture</Text>
            </TouchableOpacity>
            {/* Add a button to trigger the food detection */}
            <TouchableOpacity style={defaultStyles.button} onPress={() => {}}>
                <Text style={defaultStyles.buttonText}>Detect Food</Text>
            </TouchableOpacity>
            {/* Display the detected food results */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default FoodDetector;