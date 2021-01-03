import * as React from "react";
import { View, Text, Button } from "react-native";

export default function Terceiro({navigation}) {
  return (
    <View>
      <Text>Terceiro</Text>

      <Button title="Primeiro"
      onPress={ () => navigation.navigate('Primeiro')}/>
      <Button title="Segundo"
      onPress={ () => navigation.navigate('Segundo')}/>
      <Button title="Quarto"
      onPress={ () => navigation.navigate('Quarto')}/>
    </View>
  );
}