import { Text, Image, View, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../image/logo.png")}
        style={styles.img}
      />
      <Text style={styles.text}>
        L'art de la table marocaine revisité avec élégance. Bienvenue au Petit
        Souk, où chaque plat raconte une histoire de partage et de tradition.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginTop: 20,
    textAlign: "center",
    lineHeight: 24,
  },

  img: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
});