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
      <View style={tw`flex flex-row items-center px-4 py-2`}>
        <View style={tw`rounded-full p-3 bg-black`}>
          <Pressable onPress={onPress}>
            <Text
              style={tw`leading-relaxed tracking-relaxed text-gray-800 text-white text-lg`}
            >
              {title}
            </Text>
          </Pressable>

          <View>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={tw`text-white`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
