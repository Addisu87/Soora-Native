import React from 'react';
import { View, Text, Image } from 'react-native';

const About = () => {
  return (
    <View>
      <View style={tw`p-4 items-center justify-center`}>
        <Text style={tw`text-xl text-black dark:text-white align-middle`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-6xl font-bold text-black dark:text-white tracking-wider`}
        >
          Get Notified When We Launch
        </Text>
      </View>
      <View style={tw`p-4 items-center justify-center`}>
        <Image
          source={require('../assets/images/landing-image-1.png')}
          style={tw`w-70 h-70`}
        />
      </View>
    </View>
  );
};

export default About;
