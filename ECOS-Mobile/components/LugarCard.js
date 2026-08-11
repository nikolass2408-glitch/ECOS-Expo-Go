import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function LugarCard({lugar,onPress}) {
  return <Card style={styles.card}>
    <Card.Cover source={{uri:lugar.imagen}} style={styles.imagen}/>
    <Card.Content style={styles.content}>
      <Text variant="titleLarge" style={styles.nombre}>{lugar.nombre}</Text>
      <Text variant="labelMedium" style={styles.categoria}>{lugar.categoria}</Text>
      <Text variant="bodyMedium" style={styles.descripcion}>{lugar.descripcion}</Text>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained" icon="eye" buttonColor="#7C4DFF" style={styles.boton} onPress={onPress}>Ver Detalles</Button>
    </Card.Actions>
  </Card>;
}
const styles=StyleSheet.create({
 card:{
  borderRadius:16,
  overflow:"hidden",
  backgroundColor:"#19191F"
},

 imagen:{
  height:185
}, 

content:{
  paddingTop:14
},

 nombre:{
  color:"#FFF",
  fontWeight:"700",
  marginBottom:4
},

 categoria:{
  color:"#B39DDB",
  fontWeight:"700",
  marginBottom:8
},
 descripcion:{
  color:"#D0D0D0",
  lineHeight:20
}, 

boton:{
  borderRadius:8
}
});