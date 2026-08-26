import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Button,
  Avatar,
  Card,
} from "react-native-paper";
import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

export default function PerfilScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [imagen, setImagen] = useState(null);

  const cameraRef = useRef(null);

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Cargando permisos de cámara...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>
          Permiso de cámara
        </Text>

        <Text style={styles.text}>
          Necesitamos acceder a la cámara para tomar tu foto de perfil.
        </Text>

        <Button mode="contained" onPress={requestPermission}>
          Permitir cámara
        </Button>
      </View>
    );
  }

  const tomarFoto = async () => {
    if (cameraRef.current) {
      const foto = await cameraRef.current.takePictureAsync();

      if (foto?.uri) {
        setImagen(foto.uri);
        setCameraVisible(false);
      }
    }
  };

  if (cameraVisible) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing="front"
        />

        <View style={styles.cameraButtons}>
          <Button
            mode="contained"
            icon="camera"
            onPress={tomarFoto}
          >
            Tomar foto
          </Button>

          <Button
            mode="outlined"
            onPress={() => setCameraVisible(false)}
          >
            Cancelar
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="headlineMedium" style={styles.title}>
            Mi Perfil
          </Text>

          {imagen ? (
            <Avatar.Image
              size={140}
              source={{ uri: imagen }}
              style={styles.avatar}
            />
          ) : (
            <Avatar.Icon
              size={140}
              icon="account"
              style={styles.avatar}
            />
          )}

          <Button
            mode="contained"
            icon="camera"
            onPress={() => setCameraVisible(true)}
          >
            Tomar foto
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  cameraContainer: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  cameraButtons: {
    padding: 20,
    gap: 10,
  },

  card: {
    padding: 10,
  },

  content: {
    alignItems: "center",
  },

  title: {
    marginBottom: 20,
    textAlign: "center",
  },

  text: {
    textAlign: "center",
    marginBottom: 20,
  },

  avatar: {
    marginBottom: 20,
  },
});