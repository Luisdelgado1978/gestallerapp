# Readme-Parte A del Trabajo Unidad 4 Aplicacion funcionando
## Aplicacion Movil con Ionic + React
### Estudiante: Luis Delgado Aguilera

- ---
## Descripcion General
Este proyecto corresponde a la parte A del trabajo
de la unidad 4, donde se solicita completar al menos el 50%
del contenido de la aplicacion movil utilizando el framework
Ionic + React
se implementaron cuatro pantallas en la estructura basada en Tabs:
- Login
- Agendar Cita
- Estado del vehiculo
- Historial de servicios
- Presupuesto
cada pantalla utiliza componentes propios de ionic, cumpliendo
con la instruccion de utilizar al menos dos componentes nuevos
dentro de la aplicacion

---

## pantallas Implementadas

### 1. Login
formulario simple con campos de correo y contraseña, y enlace para
crear una cuenta.

### 2. Agensar Cita
pantalla que permite seleccionar tipo de servicio (mantencion, revicion o reparacion) y confirmar reserva.

### 3. Estado del vehiculo
se muestra informaciondel estado de avance del vehiculo, notas del mecanico y enlace hacia la pantalla de presupuesto.

### 4. Historial de Servicio
lista de trabajos anteriores realizados al vehiculo.

### 5. Presupuesto
pantalla donde se visualizan los costos tentativos de servicios y botones para solicitar cambios y aprobar.

## componentes de Ionic Utilizados
dentro de la aplicacion se utilizan componentes tales como:

- IonPage
- IonContent
- IonList
- IonItem
- IonButton
- IonBadge
- IonRouterOutlet
- IonTabs, IonTabBar, IonTabButton.

con esto se cumple el requerimiento de utilizar al menos dos componentes nuevos y contruir mas del 50% de la aplicacion.

## como ejecutar la aplicacion
### 1. clonar el repositorio

git clone
https://github.com/luisdelgado1978/gestallerapp

### 2.instalar dependencias

npm install

### 3.ejecutar en modo desarrollo

Ionic serve

la aplcacion de abrira en:

http://localhost:8100/

## funcionamiento correcto
antes de subir esta entrega se verifico que:
- todas las rutas funcionan sin errores
- los tabs muestran correctamente sus pantallas
- el Login redirige a las tabs
- todas las paginas cargan contenido visible
- no existen errores de sintaxis en la consola
- se puede navegar en todas las vistas.

## Dificultades y soluciones
### problema con rutas en Ionic
solucion Ajustre de App.tsx se corrigienron las rutas para que las tabs funcionaran y la pantalla login apareciera primero.

### error al mostrar pantallas en blanco
se soluciono revisando importaciones y ubicaciones de componentes.

### problemas al subir a github
se resolvio con:
git pull origin master--allow- unrelated-histories
git push origin master


## repositorio del proyecto
link oficial:
https://github.com/luisdelgado1978/gestallerapp/


# README parte B del trabajo unidad 4 (pendiente)
en esta seccion agregaremos 
- nuevos componentes
- mejoras en funcionalidades
- generacion del APK
- nuevos problemas y soluciones


## README - Parte B del Trabajo Unidad 4 desarrollo Final de la aplicacion
 esta es la segunda parte del trabajo se completo el desarrollo de la aplicacion movil, incorporando mejoras visuales, interaccion con el usuario y nuevos componentes de ionic, cumpliendo con los requisitos establecidos para la unidad 4.

 ### Objetivos de la parte B
 finalizar el 50% restante de la aplicacion, mejorar la experiencia de usuario y aplicar componentes adicionales del framework Ionic.

 ---

 ### Componentes ionic Utilizados en la Parte B
 durante esta etapa se incorporaron los siguientes componentes:

 - IonicToast
 utilizado en las pantallas de login, Estado y presupuesto para mostrar mensajes informativos y de validacion de forma clara y visible.

 - IonModal 
 implementado en la pantalla historial para mostrar el detalle de servicios realizados, mejorando la navegacion y presentacion de la informacion.
 ademas, se reforzo el uso de componentes como:
 - IonCard
 - IonList
 - IonButton
 - IonText

 ---

 ### Funcionalidades Desarrolladas
 - validacion de campos en login.
 - Mensajes de Retroalimentacion al usuario (Exito, advertencia).
 - Visualizacion del estado actual del vehiculo.
 - aprobacion o solicitud de cambios en el presupuesto.
 - consulta de historial de servicios con vista de detalle mediante Modal.
 - Navegacion fluida mediante Tabs.

 ---

 ### Correcciones y mejoras visuales
 - correcciones de estilo ionic mediante carga adecauada de CSS en Main.tsx
 - Alineacion y presentacion consistente en todas las pantallas.
 - eliminacion de superpocicion de mensajes en pantalla.
 - Interfaz responsiva y clara.

 ---

 ### estado Final Del Proyecto
 La aplicacion se encuentra completamente funcional, cumpliendo con los requicitos solicitados para la parte A y parte B de la unidad 4, lista para su evaluacion.

 Repositorio del Proyecto:

 https://github.com/luisdelgado1978/gestallerapp
 
---

## APK de la aplicacion
el archivo Apk generado de la aplicacion se encuentra disponible en la carpeta:
/apk/app-debug.apk

este APK corresponde a la version compilada de la aplicacion movil desarrollada en Ionic + React, lista para ser instalada en dispositivos android con la opcion de origenes desconosidos habilitada.
