import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const fondo="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85";

export default function Inicio({navigation}) {
 return <ImageBackground source={{uri:fondo}} style={styles.fondo}>
  <View style={styles.overlay}/>
  <View style={styles.contenido}>
   <Text variant="displaySmall" style={styles.logo}>ECOS</Text>
   <Text variant="headlineSmall" style={styles.titulo}>Explora lo inexplicable</Text>
   <Text style={styles.descripcion}>Descubre lugares, historias y experiencias paranormales. Adéntrate en lo desconocido.</Text>
   <Button mode="contained" icon="login" buttonColor="#7C4DFF" style={styles.boton} contentStyle={styles.altura} onPress={()=>navigation.navigate("InicioSesion")}>Iniciar sesión</Button>
   <Button mode="outlined" textColor="#FFF" icon="account-plus" style={styles.registro} contentStyle={styles.altura} onPress={()=>navigation.navigate("Registro")}>Registrarse</Button>
   <Button mode="text" textColor="#D1C4E9" onPress={()=>navigation.navigate("Principal")}>Explorar como invitado</Button>
  </View>
 </ImageBackground>;
}
const styles=StyleSheet.create({
 fondo:{flex:1,justifyContent:"center"},overlay:{...StyleSheet.absoluteFillObject,backgroundColor:"rgba(0,0,0,.68)"},
 contenido:{padding:28,alignItems:"center"},logo:{color:"#FFF",fontWeight:"900",letterSpacing:6,marginBottom:8},
 titulo:{color:"#D1C4E9",textAlign:"center",fontWeight:"700",marginBottom:16},
 descripcion:{color:"#E0E0E0",textAlign:"center",fontSize:16,lineHeight:24,marginBottom:30},
 boton:{width:"100%",borderRadius:10,marginBottom:12},registro:{width:"100%",borderRadius:10,borderColor:"#B39DDB",marginBottom:10},altura:{height:50}
});