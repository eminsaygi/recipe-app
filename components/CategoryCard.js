import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={categoryItem.image}
        style={{width: 100, height: 100, borderRadius: SIZES.radius}}
        resizeMode='cover'
      />

      {/* Details */}
      <View style={{width: '65%', paddingHorizontal: 20}} >
        {/* Name */}
        <Text style={{flex: 1, ...FONTS.h2}} >
          {categoryItem.name}
        </Text>
        {/* Servings */}
        <Text style={{color: COLORS.gray, ...FONTS.h4}} >
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;