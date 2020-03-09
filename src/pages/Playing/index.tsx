import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
  const [timeLeft, setTimeLeft] = useState<number>(config.timer);
  const [score, setScore] = useState(0);
  const [numPlays, setNumPlays] = useState(0);
  const [rightPokemon, setRightPokemon] = useState(1);
  const [options, setOptions] = useState<number[]>([]);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timer => timer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    handleNewGuess();
  }, []);

  const handleNewGuess = () => {
    const newOptions: number[] = [];
    while (newOptions.length < 4) {
      const newOption = Math.floor(Math.random() * 721) + 1;
      console.log(newOption, newOptions);
      if (!(newOption in newOptions)) {
        newOptions.push(newOption);
      }
    }
    const randomIndex = Math.floor(Math.random() * 4);
    setRightPokemon(randomIndex);
    setOptions(newOptions);
  };

  const handlePick = (id: number) => {
    if (id === rightPokemon) {
      setScore(score => score++);
    }
    setNumPlays(plays => plays++);
    handleNewGuess();
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={material.display4WhiteObject}>
          {timeLeft > 0 ? timeLeft : "Time's up!"}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"
          }}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <View style={styles.container}>
        {options.map(id => {
          return (
            <Button
              onPress={() => handlePick(id)}
              title={`Pokemon ${id}`}
              buttonStyle={styles.button}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  timerContainer: { flex: 1 },
  imageContainer: {
    width: 500,
    height: 500,
    borderRadius: 100,
    overflow: "hidden"
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  button: { backgroundColor: "#D94230", marginBottom: 12, width: 200 }
});
