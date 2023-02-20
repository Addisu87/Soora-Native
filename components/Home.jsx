import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Home = () => {
  return (
    <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
      <Text style={tw`text-2xl text-blue-400  dark:text-white `}>
        Hello World
      </Text>
    </View>
  );
};

export default Home;
