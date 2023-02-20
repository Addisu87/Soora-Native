import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}
