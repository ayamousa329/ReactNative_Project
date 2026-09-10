import { StyleSheet, TextInput } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function Input({
  value,
  onChangeText,
  placeholder = "Enter text",
}: InputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 18,
    borderRadius: 10,
    fontSize: 16,
  },
});
