import React, { useRef, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { AuthContext } from "../../context/Auth";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Friendship, UserData as User } from "../../context/types";

interface UserProfileProps extends NavigationStackScreenProps {
  user: User | Friendship;
  isEditingProfile: boolean;
  handleProfileEditSubmit: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = (props) => {
  // const { user } = props;
  /*
UserData {
  id: number;
  givenName: string;
  familyName: string;
  photo: string;
  name: string;
  email: string;
  googleID: string;
}
*/
  const user: User | Friendship = {
    id: 123456,
    givenName: "Matheus",
    familyName: "Araujo",
    email: "teste@gmail.com",
    photo:
      "https://qph.fs.quoracdn.net/main-qimg-1788700fe0433d32534fc4ab2e9b22e7",
    googleID: "1234567889",
    name: "Matheus Araujo",
    friendshipStatus: undefined,
  };
  const {
    state: { user: profile },
  } = useContext(AuthContext);
  const Icon = () => {
    if ("friendshipStatus" in user) {
      if (user.friendshipStatus === 1 || user.friendshipStatus === 3) {
        return (
          <View style={styles.add}>
            <FontAwesome5
              name={"ios-add"}
              size={24}
              style={{ marginLeft: 4 }}
              color="#DFD8C8"
            ></FontAwesome5>
          </View>
        );
      } else if (user.friendshipStatus === 2) {
        return (
          <View style={styles.add}>
            <FontAwesome5
              name={"play"}
              size={24}
              style={{ marginLeft: 4 }}
              color="#DFD8C8"
            ></FontAwesome5>
          </View>
        );
        return null;
      }
    } else if (user.id === profile.userData.id) {
      //edit
      return null;
    }
  };

  return (
    <React.Fragment>
      <View style={{ alignSelf: "center" }}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri:
                user.photo ||
                "https://cdn.vox-cdn.com/thumbor/DTp9raihs-H_5AvJYmaGg7sHz-k=/0x0:2257x1320/920x613/filters:focal(949x480:1309x840):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png",
            }}
            style={styles.image}
            resizeMode="center"
          ></Image>
          {
            //HERE GOES UNFRIEND
            /* <View style={styles.dm}>
            <MaterialIcons
              name="chat"
              size={18}
              color="#DFD8C8"
            ></MaterialIcons>
          </View> */
          }
        </View>

        {/* <Icon /> */}
      </View>
      <View style={styles.infoContainer}>
        {!props.isEditingProfile ? (
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {user.name}
          </Text>
        ) : (
          <View style={styles.profileEditContainer}>
            <TextInput
              autoFocus={true}
              style={[
                styles.text,
                {
                  fontWeight: "200",
                  fontSize: 36,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 3,
                  maxWidth: 280,
                },
              ]}
              defaultValue={user.name}
              onSubmitEditing={props.handleProfileEditSubmit}
            />
          </View>
        )}
        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
          {user.email}
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
          <Text style={[styles.text, styles.subText]}>Games</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            {
              borderColor: "#DFD8C8",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            },
          ]}
        >
          <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
          <Text style={[styles.text, styles.subText]}>Wins</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
          <Text style={[styles.text, styles.subText]}>Loses</Text>
        </View>
      </View>

      <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.recentItem}>
          <View style={styles.activityIndicator}></View>
          <View style={{ width: 250 }}>
            <Text
              style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
            >
              Started following{" "}
              <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and{" "}
              <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
            </Text>
          </View>
        </View>

        <View style={styles.recentItem}>
          <View style={styles.activityIndicator}></View>
          <View style={{ width: 250 }}>
            <Text
              style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
            >
              Started following{" "}
              <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
            </Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },

  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  profileEditContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
