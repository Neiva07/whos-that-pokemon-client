import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import Icon from "../../../CustomIcon";
import { useToggle } from "../../../util/hooks";
import { PlayWithFriend } from "./playWithFriend";
import { RequestsList } from "./requestsList";
import { AuthContext } from "../../../context/Auth";
export const NewGame = props => {
  const {
    action: { request }
  } = useContext(AuthContext);

  const handlePlayWithFriend = () => {
    props.navigation.navigate("PlayWithFriend");
  };
  const handlePlayRandom = () => {
    props.navigation.navigate("");
  };
  const handleRequests = async () => {
    const response = await request("GET", "/api/users/3/friendship");

    console.log(response);

    // props.navigation.navigate("Requests");
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={handleRequests}
        title="Requests"
        buttonStyle={{
          backgroundColor: "#D94230",
          marginBottom: 12,
          width: 200
        }}
      />
      <Button
        onPress={handlePlayWithFriend}
        title="Play with Friend"
        buttonStyle={{
          backgroundColor: "#D94230",
          marginBottom: 12,
          width: 200
        }}
      />
      <Button
        onPress={handlePlayRandom}
        title="Play Random"
        buttonStyle={{
          backgroundColor: "#D94230",
          width: 200
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    backgroundColor: "white",
    // maxHeight: 200,
    marginTop: 100,
    marginBottom: 100,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 12,
    paddingTop: 12
  }
});
