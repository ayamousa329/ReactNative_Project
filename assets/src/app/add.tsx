import { useContext, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { WorkoutContext } from "./_layout";

import Button from "../components/Button";
import Input from "../components/Input";

import api from "../api";

export default function AddWorkout() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const addWorkout = async () => {
    if (name === "" || duration === "" || level === "") {
      setMessage("Please fill all fields.");

      return;
    }

    try {
      const response = await api.post("/posts", {
        name: name,
        duration: duration,
        level: level,
      });

      const newWorkout = {
        id: response.data.id.toString(),
        name: name,
        duration: duration,
        level: level,
      };

      setWorkouts([...workouts, newWorkout]);

      setName("");
      setDuration("");
      setLevel("");

      setMessage("Workout added successfully!");
    } catch (error) {
      setMessage("Failed to add workout.");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Workout</Text>

      <Text style={styles.label}>Workout Name</Text>

      <Input
        value={name}
        onChangeText={setName}
        placeholder="Enter workout name"
      />

      <Text style={styles.label}>Duration</Text>

      <Input
        value={duration}
        onChangeText={setDuration}
        placeholder="Example: 30 minutes"
      />

      <Text style={styles.label}>Level</Text>

      <Input
        value={level}
        onChangeText={setLevel}
        placeholder="Example: Beginner"
      />

      <Button onPress={addWorkout}>Add Workout</Button>

      {message !== "" && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  message: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});
