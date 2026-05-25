import { View, Text  , ImageBackground , StyleSheet} from "react-native";

export default function Menu() {
  return (
    <ImageBackground
      source={require("../image/Gemini_Generated_Image_epv04fepv04fepv0.png")}
        style={styles.container}>

    </ImageBackground>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)", // Kat-darkni l-image b 35% bach l-fonts ibanou premium
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});