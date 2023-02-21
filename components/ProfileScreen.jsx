import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View>
      <View style={tw`p-4 items-center justify-center`}>
        <Text style={tw`text-xl text-black dark:text-white text-center`}>
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
      <View>
        <SocialIcon type="twitter" />
      </View>
    </View>
  );
};

export default ProfileScreen;