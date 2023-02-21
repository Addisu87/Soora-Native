import { StatusBar } from 'expo-status-bar';
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/HomeScreen';
import About from './components/ProfileScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Home /> */}
        <About />
      <Navbar />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
