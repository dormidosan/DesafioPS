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
Este proyecto cuenta con 3 carpetas principales
* client
* fakeAPI
* server

Dentro de la carpeta **client** se encuentra una aplicacion angular, la cual tiene un README por defecto para poder ejecutarlo correctamente.

En **fakeAPI** esta un archivo JSON que mediante json-server nos ayudara a guardar y leer datos que utilizara la aplicacion angular

La carpeta **server** es la encargada de hacer la union de la base de datos y la aplicacion cliente escrita en angular

## Forma correcta de inicializar el proyecto

Primero nos movemos a la carpeta **fakeAPI** y ejecutamos el siguiente comando en una terminal:
```
json-server --watch db.json
```
Luego nos vamos a la carpeta  **server** y desde una terminal de comandos ejecutamos:
```
npm install
npm start
```
Para finalizar nos movemos a la carpeta **client** y ejecutamos:
```
npm install
ng serve --open
```
# Se advierte que se necesita de la paqueteria mencionada al inicion de este documento
