import StackApp from './src/Stack'
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <StackApp />    
  );
}
