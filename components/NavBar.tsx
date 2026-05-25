import { View , Text , Image , StyleSheet } from "react-native";

import {House ,HandPlatter , Utensils } from "lucide-react-native"

export  default function NavBar()
{
    return(
        <View style= {styles.navbar}>
        <House />
        <HandPlatter/>
        <Utensils />
        </View>
    );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
});