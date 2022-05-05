import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { BlurView } from "@react-native-community/blur";

import { SIZES, COLORS, FONTS, icons, images } from "../constants";

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  const { name, image, category, duration, serving } = recipeItem;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.cardContainer, ...containerStyle }}
    >
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        {/* Category */}
        <Text style={styles.badge}>{category}</Text>

        {/* Detail */}
        {Platform.OS === "ios" ? (
          <BlurView
            blurType='dark'
            style={{
              borderRadius: SIZES.radius,
              padding: SIZES.base,
            }}
          >
            <RecipeCardInfo
              recipeItem={recipeItem}
              containerStyle={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
          </BlurView>
        ) : (
          <RecipeCardInfo
            recipeItem={recipeItem}
            containerStyle={styles.detailsContainer}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TrendingCard;

function RecipeCardInfo({ recipeItem, containerStyle }) {
  const { name, serving, duration, isBookmark } = recipeItem;
  return (
    <View style={containerStyle}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {duration} | {serving} serving
        </Text>
      </View>

      <View>
        <Image
          source={isBookmark ? icons.bookmarkFilled : icons.bookmark}
          resizeMode='cover'
          style={styles.bookmarkImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookmarkImage: {
    height: 20,
    width: 20,
    marginTop: 10,
    tintColor: COLORS.darkGreen,
  },
  subTitle: {
    marginTop: SIZES.base,
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
  },
  detailsContainer: {
    backgroundColor: COLORS.transparentGray,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badge: {
    alignSelf: "flex-start",
    color: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
    ...FONTS.h4,
  },
  cardContainer: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    padding: SIZES.radius,
    justifyContent: "space-between",
  },
});