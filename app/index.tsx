import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Logo from "../components/logo";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <View style={Styles.grandstyl}>
      <Logo />

      <Button
        title="click here"
        onPress={() => router.push("/menu")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  grandstyl: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
});