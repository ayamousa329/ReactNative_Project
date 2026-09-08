import { useContext, useState } from "react";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { WorkoutContext } from "./_layout";

export default function AddWorkout() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const addWorkout = () => {
    if (name === "" || duration === "" || level === "") {
      setMessage("Please fill all fields.");

      return;
    }

    const newWorkout = {
      id: Date.now().toString(),
      name: name,
      duration: duration,
      level: level,
    };

    setWorkouts([...workouts, newWorkout]);

    setName("");
    setDuration("");
    setLevel("");

    setMessage("Workout added successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Workout</Text>

      <Text style={styles.label}>Workout Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter workout name"
      />

      <Text style={styles.label}>Duration</Text>

      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        placeholder="Example: 30 minutes"
      />

      <Text style={styles.label}>Level</Text>

      <TextInput
        style={styles.input}
        value={level}
        onChangeText={setLevel}
        placeholder="Example: Beginner"
      />

      <Pressable style={styles.button} onPress={addWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </Pressable>

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

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 18,
    borderRadius: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});
