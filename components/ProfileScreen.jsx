import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, Pressable } from 'react-native';
import tw from 'twrnc';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = ({ navigation }, props) => {
  const [text, setText] = useState('');
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
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <View style={tw`p-3`}>
        <Text style={tw`text-xl text-black dark:text-white text-center`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-4xl font-bold text-black dark:text-white tracking-wider`}
        >
          Get Notified When We Launch
        </Text>

        <View
          style={tw`relative flex justify-start w-80 text-gray-800 rounded items-center border border-gray-300 focus:outline-none focus:border-gray-400 mx-auto`}
        >
          <TextInput
            setText={setText}
            value={text}
            style={tw`placeholder-gray-800 text-base placeholder-text-base leading-4 py-3 w-72 pl-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded`}
          />

          <Pressable onPress={onPress}>
            <Text
              style={tw`absolute right-4 bg-black text-white rounded-full py-2 px-4`}
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
        {Icons.map(({ link, title }) => (
          <SocialIcon type={link} onPress={() => alert(title)} />
        ))}
      </View>
      <Text style={tw`text-center justify-center font-sm`}>
        Copyright © 2022 Soora. All rights reserved
      </Text>
    </View>
  );
};

export default ProfileScreen;
