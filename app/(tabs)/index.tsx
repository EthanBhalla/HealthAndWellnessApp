import React from 'react';
import { View, Text } from 'react-native';
import {Href, Link} from 'expo-router';

const Index: React.FC = () => {
    return (
        <View>
            <Link href={'/(modals)/signUp' as Href<string | object>}>Login</Link>
        </View>
    );
};

export default Index;