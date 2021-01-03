import * as React from "react";
import { View, Text, Button } from "react-native";

export default function Segundo({navigation}) {
  return (
    <View>
      <Text>Segundo</Text>

      <Button title="Primeiro"
      onPress={ () => navigation.navigate('Primeiro')}/>
      <Button title="Terceiro"
      onPress={ () => navigation.navigate('Terceiro')}/>
      <Button title="Quarto"
      onPress={ () => navigation.navigate('Quarto')}/>
    </View>
  );
}