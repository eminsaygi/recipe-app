import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS } from "../constants";

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors = [],
  onPress,
}) => {
  const getButtonText = (
    <Text style={{ textAlign: "center", color: COLORS.white, ...FONTS.h3 }}>
      {buttonText}
    </Text>
  );

  if (colors.length > 0)
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={buttonContainerStyle}
        >
          {getButtonText}
        </LinearGradient>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={onPress}>
      {getButtonText}
    </TouchableOpacity>
  );
};

export default CustomButton;