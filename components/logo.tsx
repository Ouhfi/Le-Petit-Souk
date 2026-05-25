import { Text, Image, View, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View>
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
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",

   
    margin : 50,
  },

  img:{
   height : 300,
   width: "100%",
   margin: 50,
    alignItems: "center"
   
  }
});
