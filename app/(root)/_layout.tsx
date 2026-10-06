import { useAuth } from '@clerk/expo'
import { useUserSync } from '@/hooks/useUserSync';
import { Redirect, Slot } from 'expo-router';

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // sync clerk 
  useUserSync()

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in"/>;
  
  return <Slot />
}