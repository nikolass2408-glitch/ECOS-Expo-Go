import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  FAB,
  Snackbar,
  Text,
  Portal,
  Dialog,
  Button,
  Divider,
  List,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

import LugarCard from "../components/LugarCard";

const lugares = [
  {
    id: 1,
    nombre: "La Casa de los Espíritus",
    categoria: "Lugar paranormal",
    descripcion:
      "Una antigua casa donde visitantes aseguran haber escuchado voces y pasos durante la noche.",
    imagen:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    nombre: "El Hotel Abandonado",
    categoria: "Investigación paranormal",
    descripcion:
      "Edificio abandonado relacionado con relatos de apariciones y fenómenos inexplicables.",
    imagen:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    nombre: "Bosque de los Susurros",
    categoria: "Experiencia paranormal",
    descripcion:
      "Zona boscosa donde exploradores reportan sonidos extraños y luces entre los árboles.",
    imagen:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    nombre: "El Cementerio Antiguo",
    categoria: "Sitio histórico",
    descripcion:
      "Cementerio antiguo con historias locales sobre apariciones y acontecimientos misteriosos.",
    imagen:
      "https://images.unsplash.com/photo-1509825480400-53c94f6c4f4e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Principal({ navigation }) {
  const [mensaje, setMensaje] = useState("");
  const [dialogoNuevo, setDialogoNuevo] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const seleccionarFoto = async () => {
    setDialogoNuevo(false);

    const permiso =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permiso.granted) {
      setMensaje("Necesitas permitir el acceso a tus fotos.");
      return;
    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1,
      });

    if (!resultado.canceled) {
      setMensaje("Foto seleccionada correctamente.");
      console.log("Foto:", resultado.assets[0].uri);
    }
  };

  const seleccionarVideo = async () => {
    setDialogoNuevo(false);

    const permiso =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permiso.granted) {
      setMensaje("Necesitas permitir el acceso a tus videos.");
      return;
    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["videos"],
        allowsEditing: false,
      });

    if (!resultado.canceled) {
      setMensaje("Video seleccionado correctamente.");
      console.log("Video:", resultado.assets[0].uri);
    }
  };

  const seleccionarAudio = async () => {
    setDialogoNuevo(false);

    const resultado =
      await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        copyToCacheDirectory: true,
      });

    if (!resultado.canceled) {
      setMensaje("Audio seleccionado correctamente.");
      console.log("Audio:", resultado.assets[0].uri);
    }
  };

  const seleccionarArchivo = async () => {
    setDialogoNuevo(false);

    const resultado =
      await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

    if (!resultado.canceled) {
      setMensaje("Archivo seleccionado correctamente.");
      console.log("Archivo:", resultado.assets[0].uri);
    }
  };

  const abrirPerfil = () => {
    setMenuVisible(false);
    navigation.navigate("Perfil");
  };

  const abrirInicio = () => {
    setMenuVisible(false);
    navigation.navigate("Inicio");
  };

  const abrirLugares = () => {
    setMenuVisible(false);
    setMensaje("Ya estás viendo los lugares de ECOS.");
  };

  const abrirNuevo = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setDialogoNuevo(true);
    }, 200);
  };

  const abrirAcerca = () => {
    setMenuVisible(false);
    setMensaje("ECOS - Explora lo inexplicable.");
  };

  const cerrarSesion = () => {
    setMenuVisible(false);
    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title="ECOS"
          subtitle="Explora lo inexplicable"
          titleStyle={styles.ht}
          subtitleStyle={styles.hs}
        />

        <Appbar.Action
          icon="account-circle"
          color="#FFF"
          onPress={abrirPerfil}
        />

        <Appbar.Action
          icon="menu"
          color="#FFF"
          onPress={() => setMenuVisible(true)}
        />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text variant="headlineSmall" style={styles.seccion}>
          Lugares destacados
        </Text>

        <Text style={styles.intro}>
          Descubre sitios y experiencias que esconden historias
          inexplicables.
        </Text>

        <View style={styles.cards}>
          {lugares.map((l) => (
            <LugarCard
              key={l.id}
              lugar={l}
              onPress={() =>
                navigation.navigate("DetalleLugar", {
                  lugar: l,
                })
              }
            />
          ))}
        </View>
      </ScrollView>

      {/* BOTÓN NUEVO */}
      <FAB
        icon="plus"
        label="Nuevo"
        color="#FFF"
        style={styles.fab}
        onPress={() => setDialogoNuevo(true)}
      />

      {/* MENÚ PRINCIPAL */}
      <Portal>
        <Dialog
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          style={styles.dialog}
        >
          <Dialog.Title>Menú de ECOS</Dialog.Title>

          <Dialog.Content>
            <List.Item
              title="Inicio"
              description="Volver a la pantalla de inicio"
              left={(props) => <List.Icon {...props} icon="home" />}
              onPress={abrirInicio}
            />

            <Divider />

            <List.Item
              title="Mi perfil"
              description="Ver y actualizar tu perfil"
              left={(props) => (
                <List.Icon {...props} icon="account-circle" />
              )}
              onPress={abrirPerfil}
            />

            <Divider />

            <List.Item
              title="Lugares"
              description="Explorar lugares paranormales"
              left={(props) => <List.Icon {...props} icon="map-marker" />}
              onPress={abrirLugares}
            />

            <Divider />

            <List.Item
              title="Nuevo contenido"
              description="Subir foto, video, audio o archivo"
              left={(props) => <List.Icon {...props} icon="plus-circle" />}
              onPress={abrirNuevo}
            />

            <Divider />

            <List.Item
              title="Acerca de ECOS"
              description="Información sobre la aplicación"
              left={(props) => <List.Icon {...props} icon="information" />}
              onPress={abrirAcerca}
            />

            <Divider />

            <List.Item
              title="Cerrar sesión"
              description="Salir de tu cuenta"
              left={(props) => <List.Icon {...props} icon="logout" />}
              onPress={cerrarSesion}
            />
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => setMenuVisible(false)}>
              Cerrar
            </Button>
          </Dialog.Actions>
        </Dialog>

        {/* DIÁLOGO PARA SUBIR CONTENIDO */}
        <Dialog
          visible={dialogoNuevo}
          onDismiss={() => setDialogoNuevo(false)}
          style={styles.dialog}
        >
          <Dialog.Title>¿Qué quieres subir?</Dialog.Title>

          <Dialog.Content>
            <Text style={styles.dialogText}>
              Selecciona el tipo de contenido que quieres
              compartir en ECOS.
            </Text>
          </Dialog.Content>

          <Dialog.Actions style={styles.actions}>
            <Button
              icon="camera"
              mode="contained"
              onPress={seleccionarFoto}
            >
              Foto
            </Button>

            <Button
              icon="video"
              mode="contained"
              onPress={seleccionarVideo}
            >
              Video
            </Button>

            <Button
              icon="music"
              mode="contained"
              onPress={seleccionarAudio}
            >
              Audio
            </Button>

            <Button
              icon="file"
              mode="contained"
              onPress={seleccionarArchivo}
            >
              Archivo
            </Button>
          </Dialog.Actions>

          <Dialog.Actions>
            <Button onPress={() => setDialogoNuevo(false)}>
              Cancelar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <Snackbar
        visible={!!mensaje}
        onDismiss={() => setMensaje("")}
        duration={2200}
        action={{
          label: "Cerrar",
          onPress: () => setMensaje(""),
        }}
      >
        {mensaje}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F12",
  },

  header: {
    backgroundColor: "#15151A",
  },

  ht: {
    color: "#FFF",
    fontWeight: "800",
  },

  hs: {
    color: "#BDBDBD",
  },

  scroll: {
    padding: 16,
    paddingBottom: 120,
  },

  seccion: {
    color: "#FFF",
    fontWeight: "800",
    marginBottom: 5,
  },

  intro: {
    color: "#AFAFAF",
    marginBottom: 18,
    lineHeight: 20,
  },

  cards: {
    gap: 16,
  },

  fab: {
    position: "absolute",
    right: 18,
    bottom: 22,
    backgroundColor: "#7C4DFF",
  },

  dialog: {
    backgroundColor: "#19191F",
  },

  dialogText: {
    color: "#BDBDBD",
    marginBottom: 10,
  },

  actions: {
    flexWrap: "wrap",
    gap: 8,
  },
});