import React from 'react';
import { Image, View, Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';

const Navbar = (props) => {
  const { onPress, title = 'Contact Us' } = props;

  return (
    <View
      style={tw`ios:pt-4 android:pt-2 p-2 flex-row items-center justify-between`}
    >
      <View style={tw``}>
        <Image
          source={require('../assets/images/logo.png')}
          fadeDuration={0}
          style={tw`w-48 h-8`}
        />
      </View>

      <View
        style={tw`rounded-full px-6 bg-black flex flex-row px-4 py-2 items-center justify-center`}
      >
        <Pressable onPress={onPress}>
          <Text
            style={tw`leading-relaxed tracking-relaxed text-gray-800 text-white text-lg`}
          >
            {title}
          </Text>
        </Pressable>

        <AntDesign
          name="arrowright"
          size={16}
          color="black"
          style={tw`text-white`}
        />
      </View>
    </View>
  );
};

export default Navbar;
