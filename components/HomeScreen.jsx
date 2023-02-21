import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <View>
      <View style={tw`p-4 items-center justify-center`}>
        <Text style={tw`text-xl text-black dark:text-white align-middle`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-6xl font-bold text-black dark:text-white tracking-wider`}
        >
          Bringing Muslims Together
        </Text>
      </View>
      <View style={tw`flex flex-row p-2 items-center justify-center`}>
        <Image
          source={require('../assets/images/google-play.png')}
          style={tw`w-40 h-14`}
        />
        <Image
          source={require('../assets/images/apple-store.png')}
          style={tw`w-40 h-14`}
        />
      </View>
      <View style={tw`p-4 items-center justify-center`}>
        <Image
          source={require('../assets/images/landing-image-2.png')}
          style={tw`w-70 h-70`}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
