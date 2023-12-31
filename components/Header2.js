import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";

const Header2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.hamburgerIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger-icon.png")}
          />
        </Pressable>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
        <View style={styles.profile}>
          <Image
            style={styles.group3Icon}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval1.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorWhite,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  hamburgerIcon: {
    width: 32,
    height: 32,
  },
  logoIcon: {
    width: 152,
    height: 28,
  },
  group3Icon: {
    width: 36,
    height: 36,
    zIndex: 0,
  },
  ovalIcon: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 10,
    height: 10,
    zIndex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  view: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Header2;
