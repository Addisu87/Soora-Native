import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import tw from 'twrnc';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <View style={tw`p-4`}>
        <Text style={tw`text-xl text-black dark:text-white text-center`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-5xl font-bold text-black dark:text-white tracking-wider`}
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
      <View style={tw`flex flex-row`}>
        <SocialIcon
          type="facebook"
          onPress={() => {
            alert('facebook');
          }}
        />
        <SocialIcon
          type="twitter"
          onPress={() => {
            alert('twitter');
          }}
        />
        <SocialIcon
          type="instagram"
          onPress={() => {
            alert('instagram');
          }}
        />
        <SocialIcon
          type="linkedin"
          onPress={() => {
            alert('LinkedIn');
          }}
        />
        <SocialIcon
          type="youtube"
          onPress={() => {
            alert('youtube');
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
