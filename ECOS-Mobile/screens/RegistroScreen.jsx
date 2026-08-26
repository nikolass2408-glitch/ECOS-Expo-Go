import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function RegistroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text variant="headlineMedium">Registro</Text>

      <Button mode="outlined" onPress={() => navigation.goBack()}>
        Volver al Inicio
      </Button>
    </View>
  );
}