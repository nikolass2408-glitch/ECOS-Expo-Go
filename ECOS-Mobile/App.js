import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  MD3DarkTheme,
} from "react-native-paper";

import Inicio from "./screens/Inicio";
import InicioSesion from "./screens/InicioSesion";
import Registro from "./screens/Registro";
import Principal from "./screens/Principal";
import DetalleLugar from "./screens/DetalleLugar";
import Perfil from "./screens/PerfilScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#7C4DFF",
    secondary: "#B39DDB",
    background: "#0F0F12",
    surface: "#19191F",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        >
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen
            name="InicioSesion"
            component={InicioSesion}
          />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen
            name="DetalleLugar"
            component={DetalleLugar}
          />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}