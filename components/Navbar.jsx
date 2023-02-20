import React from 'react';
import { Button, Image, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View className="container relative mx-auto px-6 py-2 xl:py-0">
      <View className="flex justify-between items-center">
        <View>
          <Image
            source={require('../assets/images/logo.png')}
            fadeDuration={0}
            className="w-24 h-24"
          />
        </View>
        <View className="flex">
          <Button
            title="Contacts"
            className="inline-flex justify-center rounded-2xl border border-transparent bg-zinc-900 px-16 py-3 md:py-2 md:px-8 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          />
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
            className="rotate-45"
          />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
