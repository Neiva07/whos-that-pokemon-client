import React, { useContext, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { UserProfile } from "../../util/Components/userProfile";
import { AuthContext } from "../../context/Auth";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export const MainProfile = (props) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const {
    state: {
      user: { userData },
    },
    action: { signOut },
  } = useContext(AuthContext);

  const menu = useRef(null);

  const setMenu = (ref: React.MutableRefObject<any>) => {
    menu.current = ref.current;
  };

  const handleLogout = () => {
    menu.current.hide();
    signOut();
    props.navigation.navigate("Auth");
  };
  const handleProfileEdit = () => {
    menu.current.hide();
    setIsEditingProfile(true);

    // props.navigation.navigate("Edit Profile");
  };
  const handleProfileEditSubmit = () => {
    //POST TO BACKEND WITH NEW NAME
    setIsEditingProfile(false);
  };
  const handleShowMenu = () => {
    menu.current.show();
  };
  const handleBackButton = () => {
    props.navigation.navigate("Battle");
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <TouchableOpacity onPress={handleBackButton} style={styles.more}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="#52575D"
              ></Ionicons>
            </TouchableOpacity>

            <Menu
              ref={menu}
              button={
                <TouchableOpacity onPress={handleShowMenu} style={styles.more}>
                  <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </TouchableOpacity>
              }
            >
              <MenuItem onPress={handleProfileEdit}>Edit Profile</MenuItem>
              <MenuDivider />
              <MenuItem onPress={handleLogout}>Logout</MenuItem>
            </Menu>
          </View>
          <UserProfile
            {...props}
            user={userData}
            isEditingProfile={isEditingProfile}
            handleProfileEditSubmit={handleProfileEditSubmit}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  more: {
    width: 20,
    alignItems: "center",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
});
