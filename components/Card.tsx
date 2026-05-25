import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  item: {
    name: string;
    category: string;
    price: string;
    image: any;
  };
};

export default function Card({ item }: Props) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
  },

  info: {
    flex: 1,
    padding: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  category: {
    fontSize: 12,
    color: "gray",
  },

  price: {
    marginTop: 5,
    color: "#DDAE2C",
    fontWeight: "bold",
  },
});