import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {FONTS, SIZES, COLORS, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton} from '../components';

const Login = ({navigation}) => {
  let renderHeader = () => {
    return (
      <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
        <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover"
          source={images.loginBackground}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                color: COLORS.white,
                width: '80%',
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  let renderDetail = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        {/* Description */}
        <Text
          style={{
            color: COLORS.gray,
            marginTop: SIZES.radius,
            width: '70%',
            ...FONTS.body3,
          }}>
          Discover more than 1200 food recipes in your hand and cooking it
          easily!
        </Text>

        {/* Buttons */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <CustomButton
            buttonContainerStyle={{paddingVertical: 18, borderRadius: 20}}
            buttonText="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace('Home')}
          />
          <CustomButton
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            buttonText="Sign Up"
            colors={[]}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
