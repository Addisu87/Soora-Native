import React from 'react';
import { Image, View } from 'react-native';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <View>
      <View>
        <Image source={logo} />
      </View>
    </View>
  );
};

export default Navbar;
