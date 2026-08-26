# REPORTE DEL PROYECTO PRODUCTIVO - ECOS MOBILE

## 1. Descripción del proyecto

ECOS Mobile es una aplicación móvil desarrollada en React Native que permite explorar lugares y experiencias relacionadas con fenómenos paranormales.

## 2. Pantallas desarrolladas

### Pantalla de Inicio

Es la pantalla inicial de la aplicación. Permite al usuario acceder al inicio de sesión y al registro.

### Pantalla de Inicio de Sesión

Permite al usuario ingresar a la aplicación mediante sus datos de acceso.

### Pantalla de Registro

Permite registrar nuevos usuarios en la aplicación.

### Pantalla Principal

Muestra los lugares paranormales disponibles y permite seleccionar cada uno para consultar su información.

### Pantalla Detalle del Lugar

Muestra información detallada del lugar seleccionado, incluyendo nombre, categoría, descripción e imagen.

### Pantalla de Perfil

Permite al usuario visualizar su perfil y tomar una fotografía utilizando la cámara del dispositivo.

## 3. Navegación

Se implementó React Navigation para permitir el desplazamiento entre las diferentes pantallas de la aplicación.

El flujo principal de navegación es:

Inicio → Inicio de Sesión → Principal → Detalle del Lugar

También se implementó el acceso:

Principal → Perfil → Cámara

## 4. Integración de la cámara

Se implementó la librería Expo Camera para acceder a la cámara del dispositivo.

La cámara permite al usuario tomar una fotografía desde la pantalla de Perfil.

La fotografía capturada se almacena utilizando el estado local de React mediante `useState`.

Posteriormente, la imagen se muestra como vista previa utilizando el componente `Avatar.Image` de React Native Paper.

## 5. Diseño de interfaz

Las pantallas utilizan componentes de React Native Paper para mejorar la interfaz de usuario.

Entre los componentes utilizados se encuentran:

- Appbar
- Button
- Card
- Avatar
- FAB
- Snackbar
- Text

También se implementó un tema oscuro para mantener una apariencia visual relacionada con el proyecto ECOS.

## 6. Tecnologías utilizadas

- React Native
- Expo
- React Navigation
- Expo Camera
- React Native Paper
- JavaScript
- GitHub

## 7. Conclusión

Durante el desarrollo del proyecto productivo se completaron las principales pantallas de ECOS Mobile, se implementó la navegación entre ellas y se integró el acceso a la cámara del dispositivo.

La aplicación cuenta con un flujo funcional que permite al usuario navegar por los lugares paranormales, consultar sus detalles y acceder a su perfil para tomar una fotografía.