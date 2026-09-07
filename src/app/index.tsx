import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [message, setMessage] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FitApp</Text>

        <Text style={styles.subtitle}>Your Fitness Journey</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>Get Fit, Stay Healthy</Text>

        <Text style={styles.text}>
          Start your fitness journey today and achieve your goals.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setMessage("Welcome to FitApp!")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        {message !== "" && <Text style={styles.message}>{message}</Text>}
      </View>

      <View style={styles.features}>
        <Text style={styles.featuresTitle}>Our Features</Text>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Easy Workouts</Text>

          <Text style={styles.featureText}>Simple exercises for everyone.</Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Track Progress</Text>

          <Text style={styles.featureText}>Follow your fitness progress.</Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Reach Your Goals</Text>

          <Text style={styles.featureText}>
            Stay motivated and reach your goals.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },

  content: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginTop: 20,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#222",
    padding: 15,
    marginTop: 10,
    borderRadius: 25,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 15,
  },

  features: {
    padding: 20,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
  },

  featuresTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  feature: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },

  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  featureText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
