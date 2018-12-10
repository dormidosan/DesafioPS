# Desafio Proximity Software
Este es un proyecto para dar a conocer mis conocimientos de NodeJS a Proximity Software

## Requisitos previos
Se necesita una version de Node 10 LTS y para poder ejecutar esta aplicacion es necesario tener instalado los siguientes paquetes:
```
npm install -g json-server

npm install -g @angular/cli
```
El primermo para el almacenamiento de los datos y el segundo para ejecutar la aplicacion angular. En el caso de usar un SO Linux es necesario anteponer el sudo, al igual que en MacOS

## Distribucion de archivos
Este proyecto cuenta con 2 carpetas principales
* client
* fakeAPI

Dentro de la carpeta **client** se encuentra una aplicacion angular, la cual tiene un README por defecto para poder ejecutarlo correctamente.

Y dentro de **fakeAPI** esta un archivo JSON que mediante json-server nos ayudara a guardar y leer datos que utilizara la aplicacion angular, asi como la aplicacion angular, este tiene un pequeño README para poder ejecutar la base de datos, se advierte que de no ejecutar este archivo no se podra ejecutar correctamente la aplicacion que se encuentra dentro de **client**