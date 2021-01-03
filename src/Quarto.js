import * as React from "react";
import { View, Text, Button } from "react-native";

export default function Quarto({navigation}) {
  return (
    <View>
      <Text>Quarto</Text>

      <Button title="Primeiro"
      onPress={ () => navigation.navigate('Primeiro')}/>
      <Button title="Segundo"
      onPress={ () => navigation.navigate('Segundo')}/>
      <Button title="Terceiro"
      onPress={ () => navigation.navigate('Terceiro')}/>
    </View>
  );
}