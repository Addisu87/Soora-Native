import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View className="bg-gray-300 w-full h-full">
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}
