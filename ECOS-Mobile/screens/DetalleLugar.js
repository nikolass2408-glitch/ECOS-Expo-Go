import React from "react";
import { ScrollView,StyleSheet,View } from "react-native";
import { Appbar,Button,Card,Text } from "react-native-paper";

export default function DetalleLugar({route,navigation}) {
 const {lugar}=route.params;
 return <View style={styles.container}><Appbar.Header style={styles.header}><Appbar.BackAction onPress={()=>navigation.goBack()}/><Appbar.Content title="Detalles"/></Appbar.Header>
 <ScrollView contentContainerStyle={styles.scroll}><Card style={styles.card}><Card.Cover source={{uri:lugar.imagen}} style={styles.imagen}/><Card.Content style={styles.content}><Text variant="headlineSmall" style={styles.nombre}>{lugar.nombre}</Text><Text style={styles.categoria}>{lugar.categoria}</Text><Text style={styles.desc}>{lugar.descripcion}</Text><Text variant="titleMedium" style={styles.extra}>Sobre este lugar</Text><Text style={styles.desc}>Esta sección representa la experiencia que ECOS ofrecerá para explorar historias y lugares relacionados con fenómenos paranormales.</Text></Card.Content></Card><Button mode="contained" buttonColor="#7C4DFF" icon="map-marker" style={styles.boton}>Explorar ubicación</Button></ScrollView></View>;
}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:"#0F0F12"},header:{backgroundColor:"#15151A"},scroll:{padding:16},card:{backgroundColor:"#19191F",borderRadius:16,overflow:"hidden"},imagen:{height:230},content:{paddingTop:18},nombre:{color:"#FFF",fontWeight:"800"},categoria:{color:"#B39DDB",fontWeight:"700",marginTop:5,marginBottom:16},desc:{color:"#D0D0D0",lineHeight:22},extra:{color:"#FFF",fontWeight:"700",marginTop:24,marginBottom:8},boton:{marginTop:18,borderRadius:10}});
