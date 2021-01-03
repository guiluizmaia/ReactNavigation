import * as React from "react";
import { View, Text, Button } from "react-native";

export default function Primeiro({navigation}) {
  return (
    <View>
      <Text>Primeiro</Text>
      
      <Button title="Segundo"
      onPress={ () => navigation.navigate('Segundo')}/>
      <Button title="Terceiro"
      onPress={ () => navigation.navigate('Terceiro')}/>
      <Button title="Quarto"
      onPress={ () => navigation.navigate('Quarto')}/>
    </View>
  );
}
