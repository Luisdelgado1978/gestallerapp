# Trabajo Unidad 4 - Parte A
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
https://github.com/luisdelgado1978/gestallerapp.git

### 2.instalar dependencias

npm install

### 3.ejecutar en modo desarrollo

npm run dev

la aplcacion de abrira en:

http://localhost:5173/

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





