import { StyleSheet, Text, View } from "react-native";

type WorkoutCardProps = {
  name: string;
  duration: string;
  level: string;
};

export default function WorkoutCard({
  name,
  duration,
  level,
}: WorkoutCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.info}>Duration: {duration}</Text>

      <Text style={styles.info}>Level: {level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  info: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
