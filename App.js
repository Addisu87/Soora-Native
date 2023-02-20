import { StatusBar } from 'expo-status-bar';
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
