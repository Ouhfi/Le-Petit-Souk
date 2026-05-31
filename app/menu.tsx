import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { menuData } from "../Data/Menu";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu du Jour</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ScrollView>

       <Button
              title="home"
              onPress={() => router.back()}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    marginBottom: 10,
  },
});