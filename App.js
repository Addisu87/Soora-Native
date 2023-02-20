import { StatusBar } from 'expo-status-bar';
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <Home />
      <About />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
