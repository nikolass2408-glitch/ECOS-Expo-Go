import React,{useState} from "react";
import { ScrollView,StyleSheet,View } from "react-native";
import { Appbar,FAB,Snackbar,Text } from "react-native-paper";
import LugarCard from "../components/LugarCard";

const lugares=[
{id:1,nombre:"La Casa de los Espíritus",categoria:"Lugar paranormal",descripcion:"Una antigua casa donde visitantes aseguran haber escuchado voces y pasos durante la noche.",imagen:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80"},
{id:2,nombre:"El Hotel Abandonado",categoria:"Investigación paranormal",descripcion:"Edificio abandonado relacionado con relatos de apariciones y fenómenos inexplicables.",imagen:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"},
{id:3,nombre:"Bosque de los Susurros",categoria:"Experiencia paranormal",descripcion:"Zona boscosa donde exploradores reportan sonidos extraños y luces entre los árboles.",imagen:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"},
{id:4,nombre:"El Cementerio Antiguo",categoria:"Sitio histórico",descripcion:"Cementerio antiguo con historias locales sobre apariciones y acontecimientos misteriosos.",imagen:"https://images.unsplash.com/photo-1509825480400-53c94f6c4f4e?auto=format&fit=crop&w=900&q=80"}];

export default function Principal({navigation}) {
 const [mensaje,setMensaje]=useState("");
 return <View style={styles.container}>
  <Appbar.Header style={styles.header}><Appbar.Content title="ECOS" subtitle="Explora lo inexplicable" titleStyle={styles.ht} subtitleStyle={styles.hs}/><Appbar.Action icon="account-circle" color="#FFF" onPress={()=>setMensaje("Perfil de usuario")}/><Appbar.Action icon="menu" color="#FFF" onPress={()=>setMensaje("Menú de ECOS")}/></Appbar.Header>
  <ScrollView contentContainerStyle={styles.scroll}><Text variant="headlineSmall" style={styles.seccion}>Lugares destacados</Text><Text style={styles.intro}>Descubre sitios y experiencias que esconden historias inexplicables.</Text><View style={styles.cards}>{lugares.map(l=><LugarCard key={l.id} lugar={l} onPress={()=>navigation.navigate("DetalleLugar",{lugar:l})}/>)}</View></ScrollView>
  <FAB icon="plus" label="Nuevo" color="#FFF" style={styles.fab} onPress={()=>setMensaje("Agregar un nuevo lugar o experiencia")}/>
  <Snackbar visible={!!mensaje} onDismiss={()=>setMensaje("")} duration={2200} action={{label:"Cerrar",onPress:()=>setMensaje("")}}>{mensaje}</Snackbar>
 </View>;
}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:"#0F0F12"},header:{backgroundColor:"#15151A"},ht:{color:"#FFF",fontWeight:"800"},hs:{color:"#BDBDBD"},scroll:{padding:16,paddingBottom:120},seccion:{color:"#FFF",fontWeight:"800",marginBottom:5},intro:{color:"#AFAFAF",marginBottom:18,lineHeight:20},cards:{gap:16},fab:{position:"absolute",right:18,bottom:22,backgroundColor:"#7C4DFF"}});
