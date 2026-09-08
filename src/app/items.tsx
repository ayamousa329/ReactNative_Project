import { useContext, useEffect, useState } from "react";

import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

import { WorkoutContext } from "./_layout";

export default function ItemsScreen() {
  const { workouts } = useContext(WorkoutContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Workouts updated successfully!");

    console.log("Workout list updated");
  }, [workouts]);

  const renderWorkout = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.info}>Duration: {item.duration}</Text>

      <Text style={styles.info}>Level: {item.level}</Text>
    </View>
  );

  const sections = [
    {
      title: "Beginner Workouts",

      data: workouts.filter(
        (item: any) => item.level.toLowerCase() === "beginner",
      ),
    },

    {
      title: "Other Workouts",

      data: workouts.filter(
        (item: any) => item.level.toLowerCase() !== "beginner",
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Workouts</Text>

      <Text style={styles.message}>{message}</Text>

      <Text style={styles.subtitle}>All Workouts</Text>

      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.subtitle}>Workouts By Category</Text>

      <SectionList
        sections={sections}
        renderItem={({ item }) => (
          <Text style={styles.sectionItem}>
            {item.name} - {item.duration}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },

  message: {
    color: "green",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  info: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 10,
    marginTop: 5,
  },

  sectionItem: {
    backgroundColor: "white",
    padding: 12,
    marginBottom: 5,
    borderRadius: 8,
  },
});
