import React, { useContext, useRef } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { UserProfile } from "../../util/Components/userProfile";
import { AuthContext } from "../../context/Auth";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export const MainProfile = props => {
  const {
    state: {
      user: { userData }
    },
    action: { signOut }
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
  const handleShowMenu = () => {
    menu.current.show();
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>

            <Menu
              ref={menu}
              button={
                <View style={styles.more}>
                  <Ionicons
                    name="md-more"
                    onPress={handleShowMenu}
                    size={24}
                    color="#52575D"
                  ></Ionicons>
                </View>
              }
            >
              <MenuItem onPress={handleLogout}>Logout</MenuItem>
            </Menu>
          </View>
          <UserProfile {...props} user={userData} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  more: {
    width: 40,
    alignItems: "flex-end"
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  }
});
