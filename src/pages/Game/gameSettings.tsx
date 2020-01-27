import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { CheckBox, Button } from "react-native-elements";

const initialState = new Set();

export const GameSettings = () => {
  const [generations, setGenerations] = useState(initialState);
  const [timer, setTimer] = useState(30);

  const handleSubmit = () => {};

  const handleSelectCheckbox = (index: number) => {
    setGenerations(gens => {
      const newGenerations = new Set(gens);
      if (gens.has(index + 1)) {
        newGenerations.delete(index + 1);
      } else {
        newGenerations.add(index + 1);
      }
      return newGenerations;
    });
  };

  return (
    <View>
      <Text style={[styles.text, { fontSize: 24, fontWeight: "300" }]}>
        Timer
      </Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={timer}
          style={{ height: 96, width: 150, borderRadius: 12 }}
          onValueChange={(itemValue, itemIndex) => setTimer(itemValue)}
          mode={"dialog"}
        >
          <Picker.Item label="30" value={30} />
          <Picker.Item label="45" value={45} />
          <Picker.Item label="60" value={60} />
        </Picker>
      </View>
      <Text style={[styles.text, { fontSize: 24, fontWeight: "300" }]}>
        Generations
      </Text>

      <View style={styles.checkBoxes}>
        {[0, 0, 0, 0, 0, 0, 0].map((gen: number, index: number) => (
          <CheckBox
            key={index}
            title={`Gen ${index + 1}`}
            checked={generations.has(index + 1)}
            containerStyle={styles.checkBoxContainer}
            onPress={() => handleSelectCheckbox(index)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          onPress={handleSubmit}
          title={"Start Game"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    width: 96,
    borderRadius: 12
  },
  checkBoxes: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  picker: {
    width: 200
  },
  button: {
    backgroundColor: "#D94230",
    marginBottom: 12,
    width: 200
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48
  }
});
