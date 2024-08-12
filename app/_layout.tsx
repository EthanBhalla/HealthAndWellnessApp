import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string){

    try {
      return SecureStore.getItemAsync(key);
    }catch (e) {
      return null;
    }
  }, 
  async saveToken(key: string, value: string){
    try {
      return SecureStore.setItemAsync(key, value);
    }catch (e) {
      return;
    }
  },
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayoutPushed() {
  const [loaded, error] = useFonts({
    'mon-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return(
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}


function InitialLayout() {

  const router = useRouter();
  const {isLoaded, isSignedIn} = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/(auth)/signIn');
    }
  }, [isLoaded, isSignedIn]);


  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/signIn" options={{
        title: 'Login or Sign Up',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'mon-sb',
        },
        presentation: 'modal', 
        headerLeft: () => (

          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="close" size={24} color="black" />
          </TouchableOpacity>
        )
        
        }} 
         
         
          />
    </Stack>
  );
}
