import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import Icon from "../../CustomIcon";
import { useToggle } from "../../util/hooks";
import { PlayWithFriend } from "./playWithFriend";
import { RequestsList } from "./requestsList";
export const NewGame = () => {
  const { active, activate, toggle, disable } = useToggle(false);
  const [buttonPressed, setButtonPressed] = useState("Requests");

  const handlePlayWithFriend = () => {
    activate();
    setButtonPressed("PlayWithFriend");
  };
  const handlePlayRandom = () => {
    activate();
    setButtonPressed("PlayRandom");
  };
  const handleRequests = () => {
    activate();
    setButtonPressed("Requests");
  };
  return (
    <View style={styles.container}>
      <Button
        // type="outline"
        onPress={handleRequests}
        title="Requests"
        buttonStyle={{
          backgroundColor: "#D94230",
          marginBottom: 12,
          width: 200
        }}
      />
      <Button
        // type="outline"
        onPress={handlePlayWithFriend}
        title="Play with Friend"
        buttonStyle={{
          backgroundColor: "#D94230",
          marginBottom: 12,
          width: 200
        }}
      />
      <Button
        // type="outline"
        onPress={handlePlayRandom}
        title="Play Random"
        buttonStyle={{
          backgroundColor: "#D94230",
          width: 200
        }}
      />
      <Modal
        isVisible={active}
        onBackButtonPress={() => disable()}
        onBackdropPress={disable}
        style={styles.modal}
      >
        {buttonPressed === "Requests" ? (
          <RequestsList />
        ) : buttonPressed === "PlayWithFriend" ? (
          <PlayWithFriend />
        ) : null}
      </Modal>
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
