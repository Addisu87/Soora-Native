import React from 'react';
import { Button, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View className="container relative mx-auto px-6 py-2 xl:py-0">
      <View className="flex justify-between items-center">
        <View>
          <Image
            source={require('../assets/images/logo.png')}
            className="w-24 h-24"
          />
        </View>
        <View>
          <Button title="Contacts" className="h-14 w-14" />
          <Ionicons name="chevron-back-outline" size={34} color="FF5864" />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
