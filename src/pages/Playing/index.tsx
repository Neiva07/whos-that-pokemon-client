import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { material } from "react-native-typography";
import { NavigationContainerProps } from "react-navigation";
import { Button } from "react-native-elements";

interface PlayingProps extends NavigationContainerProps {}

type Config = {
  timer: 30 | 45 | 60;
  generations: number[];
};

export const Playing: React.FC<PlayingProps> = props => {
  const config: Config = props.navigation.getParam("config");
  const [timer, setTimer] = useState<number>(config.timer);

  const options = [];

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  });

  return (
    <View>
      <View>
        <Text style={material.display4WhiteObject}>
          {timer > 0 ? timer : "Time's up!"}
        </Text>
      </View>
      <Image
        source={{
          uri:
            "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"
        }}
      />
      {/* {<Button
        onPress={handleRequests}
        title="Requests"
        buttonStyle={{
          backgroundColor: "#D94230",
          marginBottom: 12,
          width: 200
        }} */}
      />} />
    </View>
  );
};
