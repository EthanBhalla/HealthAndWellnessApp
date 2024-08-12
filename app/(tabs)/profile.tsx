import { useAuth } from '@clerk/clerk-expo';
import { Href, Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const profile: React.FC = () => {

    const { signOut, isSignedIn } = useAuth();

    return (
        <View>
            <Button title="Logout" onPress={() => signOut()} />
            {!isSignedIn && (
            <Link href={String('/(modals)/signIn') as Href<string | object>}>
                <Text>Login</Text>
            </Link>
        )}
        </View>
    );
};

export default profile;