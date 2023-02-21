import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, Pressable } from 'react-native';
import tw from 'twrnc';
import { SocialIcon } from 'react-native-elements';

const ProfileScreen = ({ navigation }, props) => {
  const [text, setText] = useState('');
  const { onPress, title = 'Notify Me' } = props;

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
              style={tw`absolute right-4 bg-black text-white rounded-full py-2 px-4 m-2`}
            >
              {title}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={tw`p-4 items-center justify-center text-gray-900`}>
        <Image
          source={require('../assets/images/landing-image-1.png')}
          style={tw`w-70 h-80`}
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
