import React from 'react';
import { View, Text, Image, Button, SafeAreaView } from 'react-native';
import tw from 'twrnc';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center mt-4`}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <View style={tw`p-3`}>
        <Text style={tw`text-xl text-black dark:text-white items-center`}>
          --- Coming Soon
        </Text>
        <Text
          style={tw`text-5xl font-bold text-black dark:text-white tracking-wider`}
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
      <View style={tw`p-2 items-center justify-center`}>
        <Image
          source={require('../assets/images/landing-image-2.png')}
          style={tw`w-60 h-70`}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
