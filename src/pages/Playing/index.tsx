import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { material, materialColors } from "react-native-typography";
import { NavigationContainerProps } from "react-navigation";
import { Button } from "react-native-elements";
import BackgroundTimer from "react-native-background-timer";
import pokemons from "./pokemons.json";
import { GamesContext } from "../../context/Games";
import { GameInput, Friendship } from "../../context/types";
interface PlayingProps extends NavigationContainerProps {}

type Config = {
  timer: 30 | 45 | 60;
  generations: number[];
  friend: Friendship;
};

type Pokemon = {
  name: string;
  id: number;
};
const multipleFormsPkm = new Set([
  386,
  412,
  413,
  421,
  422,
  423,
  487,
  550,
  555,
  585,
  586,
  641,
  642,
  645,
  647
]);

export const Playing: React.FC<PlayingProps> = props => {
  const config: Config = props.navigation.getParam("config");
  const [timeLeft, setTimeLeft] = useState<number>(config.timer);
  const [score, setScore] = useState(0);
  const [numPlays, setNumPlays] = useState(0);
  const [rightPokemon, setRightPokemon] = useState<Pokemon>({
    name: "1",
    id: 1
  });
  const [disable, setDisable] = useState(false);
  const [options, setOptions] = useState<number[]>([]);
  const {
    action: { createGame }
  } = useContext(GamesContext);

  useEffect(() => {
    if (timeLeft === 0) {
      setDisable(true);
      BackgroundTimer.stopBackgroundTimer();
      endTimer();
    }
  }, [timeLeft]);

  const endTimer = async () => {
    const gameInput = {} as GameInput;
    gameInput.timer = config.timer;
    gameInput.gens = config.generations;
    gameInput.userScore = score;

    createGame(gameInput, config.friend.friendId);
    props.navigation.navigate("GameStats");
  };

  useEffect(() => {
    handleNewGuess();
    BackgroundTimer.runBackgroundTimer(() => {
      setTimeLeft(timer => timer - 1);
    }, 1000);
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
    const newPokemon = {} as Pokemon;
    if (newOptions[randomIndex] in multipleFormsPkm) {
      switch (newOptions[randomIndex]) {
        case 386:
          newPokemon.name = "386-normal";
          break;
        case 412:
          newPokemon.name = "412-plant";
          break;
        case 413:
          newPokemon.name = "413-plant";
          break;
        case 422:
          newPokemon.name = "422-east";
          break;
        case 421:
          newPokemon.name = "421-overcast";
          break;
        case 487:
          newPokemon.name = "487-altered";
          break;
        case 550:
          newPokemon.name = "550-blue-striped";
          break;
        case 555:
          newPokemon.name = "555-standard";
          break;
        case 585:
          newPokemon.name = "585-summer";
          break;
        case 586:
          newPokemon.name = "586-summer";
          break;
        case 641:
          newPokemon.name = "641-incarnate";
          break;
        case 642:
          newPokemon.name = "642-incarnate";
          break;
        case 645:
          newPokemon.name = "645-incarnate";
          break;
        case 647:
          newPokemon.name = "647-resolute";
          break;
      }
    } else {
      newPokemon.name = newOptions[randomIndex].toString();
    }
    newPokemon.id = newOptions[randomIndex];
    setRightPokemon(newPokemon);
    setOptions(newOptions);
  };

  const handlePick = (id: number) => {
    if (id === rightPokemon.id) {
      setScore(score => ++score);
    }
    setNumPlays(plays => ++plays);
    handleNewGuess();
  };
  const onLoadImage = () => (timeLeft > 0 ? setDisable(false) : null);
  const url = `https://1555596267.rsc.cdn77.org/${rightPokemon.name}.png`;

  return (
    <ImageBackground
      source={require("../../assets/mudkip.jpg")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>
            {timeLeft > 0 ? timeLeft : "Time's up!"}
          </Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{score}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: url
            }}
            style={styles.image}
            onLoadStart={() => {
              setDisable(true);
            }}
            onLoad={onLoadImage}
          />
        </View>
        <View style={styles.container}>
          {options.map(id => {
            return (
              <Button
                onPress={() => handlePick(id)}
                title={pokemons[id - 1]}
                buttonStyle={styles.button}
                disabled={disable}
              />
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  timerContainer: { flex: 1, marginTop: 48, marginBottom: -192 },
  imageContainer: {
    width: 256,
    height: 256,
    overflow: "hidden"
  },
  image: {
    flex: 1,
    // height: 256,
    // width: 256,
    resizeMode: "cover",
    tintColor: "black"
  },
  button: {
    backgroundColor: "#D94230",
    marginBottom: 24,
    width: 240,
    height: 48
  },
  scoreContainer: { alignItems: "center", marginTop: 12 },
  timer: { ...material.display3Object, color: materialColors.blackSecondary },
  score: { ...material.headlineObject, color: materialColors.blackTertiary }
});
