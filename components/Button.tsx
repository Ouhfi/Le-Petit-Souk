import { Pressable, Text, StyleSheet } from "react-native";
type Props = {
  title: string;
  onPress: () => void;
};
export default function Button({onPress}:Props) {
  return (
    <Pressable onPress={onPress}  style={styles.Button}>
      <Text style={styles.text}> accede au menu</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#DDAE2C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin : 50,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});