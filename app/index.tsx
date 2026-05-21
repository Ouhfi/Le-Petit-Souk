import { Text, View , Image } from "react-native";
import  ButtonComponent  from "./component/Button";
import Home from "./component/Home";  


export default function App() {
  return (
    <View>
     <Home/>
      <Text>
        Hello, World!
      </Text>
      <ButtonComponent/>
    </View>
  );
}