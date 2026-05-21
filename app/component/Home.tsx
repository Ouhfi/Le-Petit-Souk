import {  Text , Image, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>
        Welcome to the Home Screen!
      </Text>
      <Image source={require('../image/logo.png')} 
      style={{ width: 200, height: 200 }} />
    </View>
  );
}