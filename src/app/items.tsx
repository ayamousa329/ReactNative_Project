import { useEffect, useState } from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

import WorkoutCard from "../components/WorkoutCard";
import { useWorkoutStore } from "../store/workoutStore";

export default function ItemsScreen() {
  const workouts = useWorkoutStore((state) => state.workouts);
  const removeWorkout = useWorkoutStore((state) => state.removeWorkout);

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Workout list loaded");
  }, []);

  useEffect(() => {
    console.log("Workout list updated");
  }, [workouts]);

  const renderWorkout = ({ item }: any) => (
    <WorkoutCard name={item.name} duration={item.duration} level={item.level} />
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

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
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
