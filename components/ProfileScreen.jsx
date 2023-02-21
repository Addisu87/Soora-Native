import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = ({ navigation }, props) => {
  const { onPress, title = 'Notify Me' } = props;

  const Icons = [
    {
      link: 'facebook',
      title: 'facebook'
    },
    {
      link: 'twitter',
      title: 'twitter'
    },
    {
      link: 'instagram',
      title: 'instagram'
    },
    {
      link: 'linkedin',
      title: 'linkedin'
    },
    {
      link: 'youtube',
      title: 'youtube'
    }
  ];

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`p-3`}>
        <Text style={tw`text-xl text-black dark:text-white text-center`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-4xl font-bold text-black dark:text-white tracking-wider`}
        >
          Get Notified When We Launch
        </Text>

        <View style={tw`rounded-full border border-black py-2 px-4`}>
          <Pressable onPress={onPress}>
            <Text
              style={tw`text-white text-lg font-bold text-center justify-center text-right py-2 px-2 bg-black w-24 left-60`}
            >
              {title}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={tw`p-4 items-center justify-center text-gray-900`}>
        <Image
          source={require('../assets/images/landing-image-1.png')}
          style={tw`w-60 h-70`}
        />
      </View>
      <View style={tw`flex flex-row`}>
        {Icons.map(({ link, title }, index) => (
          <SocialIcon key={index} type={link} onPress={() => alert(title)} />
        ))}
      </View>
      <Text style={tw`text-center justify-center text-sm`}>
        Copyright © 2022 Soora. All rights reserved
      </Text>
    </View>
  );
};

export default ProfileScreen;
