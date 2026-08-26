import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function InicioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text variant="headlineMedium">ECOS</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Registro")}
      >
        Ir a Registro
      </Button>
    </View>
  );
}