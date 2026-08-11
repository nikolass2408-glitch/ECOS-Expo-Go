import React,{useState} from "react";
import { KeyboardAvoidingView,Platform,ScrollView,StyleSheet } from "react-native";
import { Button,IconButton,Text,TextInput } from "react-native-paper";

export default function InicioSesion({navigation}) {
 const [correo,setCorreo]=useState(""); const [contrasena,setContrasena]=useState(""); const [mostrar,setMostrar]=useState(false);
 return <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==="ios"?"padding":undefined}>
  <ScrollView contentContainerStyle={styles.contenido}>
   <IconButton icon="arrow-left" iconColor="#FFF" size={28} onPress={()=>navigation.goBack()} style={styles.volver}/>
   <Text variant="displaySmall" style={styles.logo}>ECOS</Text>
   <Text variant="headlineSmall" style={styles.titulo}>Iniciar sesión</Text>
   <Text style={styles.subtitulo}>Ingresa para continuar explorando lo inexplicable.</Text>
   <TextInput label="Correo electrónico" value={correo} onChangeText={setCorreo} mode="outlined" keyboardType="email-address" autoCapitalize="none" left={<TextInput.Icon icon="email-outline"/>} style={styles.input}/>
   <TextInput label="Contraseña" value={contrasena} onChangeText={setContrasena} mode="outlined" secureTextEntry={!mostrar} left={<TextInput.Icon icon="lock-outline"/>} right={<TextInput.Icon icon={mostrar?"eye-off":"eye"} onPress={()=>setMostrar(!mostrar)}/>} style={styles.input}/>
   <Button mode="contained" buttonColor="#7C4DFF" style={styles.boton} contentStyle={styles.altura} onPress={()=>navigation.replace("Principal")}>Ingresar</Button>
   <Button mode="text" textColor="#B39DDB" onPress={()=>navigation.navigate("Registro")}>¿No tienes una cuenta? Regístrate</Button>
  </ScrollView>
 </KeyboardAvoidingView>;
}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:"#0F0F12"},contenido:{flexGrow:1,justifyContent:"center",padding:26},volver:{position:"absolute",top:45,left:12},logo:{color:"#FFF",fontWeight:"900",letterSpacing:5,textAlign:"center",marginBottom:12},titulo:{color:"#FFF",textAlign:"center",fontWeight:"700"},subtitulo:{color:"#AAA",textAlign:"center",marginTop:8,marginBottom:30},input:{marginBottom:14,backgroundColor:"#19191F"},boton:{borderRadius:10,marginTop:8,marginBottom:12},altura:{height:50}});
