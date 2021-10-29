# healthy App API
---
Para correr la app es necesario ejercutar el comando ```npm i``` para descargar las dependencias.

## Manual
---
### Rutas
A continuacion se listaran las rutas pertinentes a cada apartado de la API, estas se listarán de la siguiente forma: 
- ``` /<Ruta> ``` (METODO): Descripción...

Asimismo la interacción del cliente con la API se realizará en formato JSON.
---
#### Doctor:

El apartado de doctores de la API cuenta con 5 rutas encargadas de la gestión de los mismos. Exceptuando la ruta ``` /api/auth ``` y ``` /api/doctor ```(POST), el resto de las rutas están protegidas.

- ``` /api/auth ``` (POST):
  Es la ruta encargada del login que genera el JsonWebToken que posteriormente será validado en el resto de las rutas, recibe los parametros en JSON del email del doctor y la contraseña, por ejemplo: ``` {
    "email": "ejemplo@email.com",
    "password": "ejemploPass"
  } ```
  
- ``` /api/doctor/ ``` (GET):
  Es la ruta encargada de listar los doctores activos dentro de la base de datos, retorna los parametros del doctor en formato JSON (los doctores deben estar autenticados para utilizar esta ruta)
  
- ``` /api/doctor/ ``` (POST):
  Esta ruta es la encargada de registrar docrtores en la base de datos, es la unica ruta no protegida por el JWT(JsonWebToken), se le debe pasar un JSON con datos como nombres, apellidos, email, telefono y password, por ejemplo: ``` { 
  "nombres": "nombresEjemplo",
  "apellidos": "apellidosEjemplo",
  "email": "ejemplo@email.com",
  "telefono": "123456789",
  "password": ejemploPass
  } ```
  
- ``` /api/doctor/<email> ``` (PUT):
  Esta ruta es la encargada de modificar los datos de determinado doctor, la busqueda se realiza por el email del doctor, se le debe pasar un JSON con los datos nuevos como nombres, apellidos, telefono y password, por ejemplo: ``` {
  "nombres": "nombresEjemplo",
  "apellidos": "apellidosEjemplo",
  "telefono": "123456789",
  "password": ejemploPass
  } ```
  
- ``` /api/doctor/<email> ``` (DELETE):
  Esta ruta es la encargada de la eliminación - eliminación logica - de doctores, es decir cambia su estado a false, la busqueda se realiza por el email del doctor
  
---

#### Paciente:
El apartado de pacientes de la API cuenta con 4 rutas encargadas de la gestión de los mismos. TODAS las rutas del paciente están protegidas.

- ``` /api/paciente/ ``` (POST):
  Esta es la ruta encargada del ingreso de pacientes al sistema por parte del doctor, el doctor debe ingresar los datos del paciente en formato JSON tales como nombres, apellidos, email, telefono, fecha_nacimiento, sexo, tipo_sangre y tipo_seguro, por ejemplo: ``` {
  "nombres": "nombresEjemplo",
  "apellidos": "apellidosEjemplo",
  "email": "ejemplo@email.com",
  "telefono": "123456789",
  "fecha_nacimiento": "01-01-2000",
  "sexo": "ejemploSexo",
  "tipo_sangre": "O+",
  "tipo_seguro": "ejemploTipoSeguro"
  } ```
  
 - ``` /api/paciente/ ``` (GET):
  Esta ruta es la encargada de listar a todos los pacientes que se encuentren activos en la base de datos en formato JSON.
  
- ``` /api/paciente/<email> ``` (PUT):
  Esta ruta es la encargada de la modificación o actualización de datos de los pacientes, realizqa la busqueda por el email y se le debe ingresar un json con los datos tales como nombres, apellidos, telefono, fecha_nacimiento, sexo, tipo_sangre y tipo_seguro, por ejemplo ``` {
  "nombres": "nombresEjemplo",
  "apellidos": "apellidosEjemplo",
  "email": "ejemplo@email.com",
  "telefono": "123456789",
  "fecha_nacimiento": "01-01-2000",
  "sexo": "ejemploSexo",
  "tipo_sangre": "O+",
  "tipo_seguro": "ejemploTipoSeguro"
  } ```
  
- ``` /api/paciente/<email> ``` (DELETE):
  Esta ruta es la encargada de la eliminación - Eliminación logica - de los pacientes, toma como parametro el email del paciente y cambia su estado a inactivo.
  
---

#### Historias clinicas: 
Este apartado de la API cuenta con 4 rutas encargadas de la gestión de las historias clinicas, TODAS las rutas de este apartado están protegidas.

- ``` /api/historia/ ``` (POST):
  Esta ruta es la encargada del ingreso de historias clinicas por parte del doctor, es necesario ingresar datos como el id del paciente, el id del doctor, los comentarios de la consulta y la receta, por ejemplo: ``` {
    "paciente": "ejemploIDPciente",
    "doctor": "ejemploIDDoctor",
    "comentarios": "Un ejemplo de los comentarios...",
    "receta": "Un ejemplo de receta..."
  }```
  
- ``` /api/historia/<email> ``` (GET):
  Esta ruta es la encargada de listar todos los registros en la colección de historias de un determinado paciente, se le pasa el email del paciente como parametro y esta retorna todos los registros del paciente en la BD.
  
- ``` /api/historia/<id> ``` (PUT):
  Esta ruta es la encargada de actualizar los datos de una historia clinica, se le pasa como parametro a la url el ID de la historia que se desea modificar y en formato JSON los datos tales como los comentarios y la receta, por ejemplo: ``` {
  "comentarios": "Un ejemplo de los comentarios modificados...",
  "receta": "Un ejemplo de la receta modificada..."
  } ```
  
- ``` /api/historia/<id> ``` (DELETE):
  Esta ruta es la encargada de la eliminación - Eliminación logica - de una historia clinica, se le pasa el ID de la historia como parametro a la URL y esta cambia su estado a inactivo
  
---

  
  
