import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Href, useRouter } from 'expo-router';
import { defaultStyles } from '@/constants/styles';

const nutrition: React.FC = () => {
    const navigation = useNavigation();

    const router = useRouter();

    const handleCameraPress = () => {
        router.push('/(tabs)/foodDetector' as Href<string | object>);
      }

    return (
        <View>
            <Text>Welcome to FitFusion!</Text>
            <TouchableOpacity style={defaultStyles.button} onPress={handleCameraPress}>
                <Text style={defaultStyles.buttonText}>Analyze your food</Text>
            </TouchableOpacity>
        </View>
    );
};

export default nutrition;