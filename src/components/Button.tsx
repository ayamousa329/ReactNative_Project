import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  title?: string;
  onPress: () => void;
  children?: React.ReactNode;
};

export default function Button({
  title = "Click Me",
  onPress,
  children,
}: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children || title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
