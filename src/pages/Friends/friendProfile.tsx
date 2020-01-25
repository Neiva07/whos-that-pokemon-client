import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
  Image
} from "react-native";

export const FriendProfile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
        <Image
          source={{
            uri:
              "https://cdn.vox-cdn.com/thumbor/DTp9raihs-H_5AvJYmaGg7sHz-k=/0x0:2257x1320/920x613/filters:focal(949x480:1309x840):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png"
          }}
          style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0dcdc"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: Platform.OS === "ios" ? 30 / 2 : 30
  }
});
