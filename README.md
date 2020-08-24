# Examen1_UX
Este programa es un administrador de apuntes para clases academicas creado en react utilizando el framework react-strap y siendo administrado por medio de localStorage.

## Iniciando
Hay 3 maneras diferentes de visualizar este proyecto: 
*Por medio del comando 'npm start' en la terminal de VS Code
*Accediendo al link: https://franciscopagoaga.github.io/Examen1_UX/
*Abriendo el ejecutable adjunto en el repositorio llamado 'notas_clases Setup 0.1.0' realizado por medio de Electron

### Instalando
Si decidimos ejecutar el programa por medio de la primera opcion al clonar este proyecto es necesario que instalemos todas las dependencias necesarias y utilizadas en el proyecto para poder ejecutarlo, esto es con el comando 

```
npm install
```

dentro de la terminal de VS Code, una vez instaladas podemos utilizar el comando
```
npm start
```

Para poder visualizar el proyecto.

### Test
Para poder utilizar este programa efectivamente hay que saber como funciona, en el programa podemos visualizar 3 inputs, en los cuales debemos insertar: el titulo de la nota, el nombre de la clase, el apunte.
Una vez ingresameos esto apretamos el boton 

```
Agregar Apunte
```

Luego de esto se deberia actualizar la lista de notas, podemos visualizar que se agrega una nueva nota en la aplicacion, podemos hacer esto repetidas veces.

Ademas de esto tambien podemos eliminar los apuntes, lo cual es por medio de de la misma lista creada dinamicamente, donde aparece el boton de color rojo

```
Eliminar
```

Si lo apretamos podremos notar que sera elminiado de la lista el apunte y se actualizara la lista inmediatamente.

La ultima funcionalidad de la aplicacion web, es filtrar los apuntes, esto es por medio de las clases, si escribimos en el input donde esta escrito
```
Filtro de Clase
```

Podremos filtrar los apuntes por las diferentes clases que hay ingresadas, esto usa el metodo .includes() por lo que filtra con las palabras similares de igual manera.

## Construido con
*React - Manejo de componentes
*ReactStrap - Framework utilizado para el manejo visual, ademas de hacerlo dinamico, para las diferentes vistas que puede llegar a tener la app
*Electron - utlizado para convertir la aplicacion en un ejecutable


