import { Pressable, Text, StyleSheet } from "react-native";

export default function ButtonComponent() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Click me!</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});