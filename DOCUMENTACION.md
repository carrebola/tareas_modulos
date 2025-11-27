# Documentación Tutorial: Proyecto React con Metodología Agile

## Sección 1: Introducción

### Objetivo del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web que permite a los estudiantes visualizar y gestionar módulos y tareas de ciclos formativos según el nuevo currículum de Cataluña.

La aplicación está diseñada para:

- Permitir a usuarios no registrados visualizar los módulos de diferentes ciclos formativos
- Permitir a estudiantes registrados gestionar sus tareas asociadas a los módulos de su ciclo formativo
- Facilitar el seguimiento de notas y estados de las tareas
- Proporcionar funcionalidades de filtrado y ordenación

### Contexto del Proyecto

Este proyecto forma parte del ciclo de **Desarrollo de Aplicaciones Web** y está diseñado para ser desarrollado en **parejas** utilizando metodología **Agile**. El objetivo no es solo crear una aplicación funcional, sino también aprender:

- Desarrollo colaborativo con control de versiones (Git/GitHub)
- Metodología Agile y trabajo con Scrum
- Desarrollo frontend con React y TypeScript
- Gestión de estado y persistencia de datos
- Buenas prácticas de desarrollo

### Cronograma del Proyecto

- **Duración total**: 6-7 semanas
- **Tiempo semanal**: 3 horas por semana
- **Total de horas**: aproximadamente 18-21 horas
- **Distribución sugerida**:
  - Semanas 1-2: Especificaciones, casos de uso, configuración inicial
  - Semanas 3-4: Desarrollo de funcionalidades básicas (Fase 1: LocalStorage)
  - Semanas 5-6: Desarrollo de funcionalidades avanzadas
  - Semana 7: Migración a API (Fase 2) y mejoras finales

### Estructura del Documento

Esta documentación está organizada en las siguientes secciones:

1. **Introducción** (esta sección)
2. **Especificaciones del Proyecto**: Requisitos y funcionalidades
3. **Casos de Uso**: Descripción detallada de los casos de uso
4. **Creación del Proyecto**: Configuración inicial
5. **Introducción a TypeScript**: Conceptos básicos con tipado ligero
6. **Configuración del Entorno**: Herramientas y configuración
7. **Configuración de GitHub**: Repositorio y ramas
8. **Organización del Trabajo con Git y GitHub**: Flujo de trabajo
9. **Organización con Scrum Board**: Gestión de tareas
10. **Metodología Agile y Planificación**: Proceso de desarrollo
11. **Configuración de Tailwind CSS y Shadcn/ui**: Estilos y componentes
12. **Conceptos Clave de React**: Hooks y conceptos fundamentales
13. **Arquitectura de Datos y Persistencia**: ORM y persistencia
14. **Desarrollo del Proyecto**: Implementación
15. **Recursos y Referencias**: Enlaces útiles

---

## Sección 2: Especificaciones del Proyecto

### Descripción del Dominio

La aplicación permite gestionar información sobre ciclos formativos, sus módulos y las tareas asociadas a cada módulo. Los estudiantes pueden registrarse, seleccionar su ciclo formativo y gestionar sus tareas y notas. Los administradores pueden gestionar los módulos para cada ciclo formativo.

### Ciclos Formativos Soportados

La aplicación soporta los siguientes ciclos formativos según el nuevo currículum de Cataluña:

1. **Desarrollo de Aplicaciones Web** (Grado Superior)
2. **Automatización y Robótica Industrial** (Grado Superior)
3. **Sistemas Microinformáticos** (Grado Medio)
4. **Instalaciones Eléctricas y Automáticas** (Grado Medio)

### Funcionalidades Principales

#### Usuario No Registrado

Un usuario no registrado puede:

- **Seleccionar un ciclo formativo**: A través de un selector en la interfaz
- **Ver módulos del ciclo**: Los módulos se muestran en formato de tarjetas (cards)
- **Navegar por la información**: Explorar los módulos disponibles sin necesidad de registro
- **Registro**
  - Registrarse seleccionando su ciclo formativo

#### Usuario Registrado (Estudiante)

Un estudiante registrado puede:

1. **Autenticación**:

   - Iniciar sesión con sus credenciales
   - Cerrar sesión

2. **Visualización de Módulos**:

   - Ver todos los módulos correspondientes a su ciclo formativo (añadidos automáticamente al registrarse)
   - Filtrar módulos por curso (primero o segundo)
   - Ordenar módulos según diferentes criterios

3. **Gestión de Notas de Módulos**:

   - Cambiar la nota de cada módulo para diferentes evaluaciones:
     - Trimestre 1
     - Trimestre 2
     - Trimestre 3
     - Ordinaria
     - Extraordinaria
   - Cambiar el estado del módulo (aprobado, cursando, no cursa, etc.)

4. **Gestión de Tareas**:

   - Acceder a un módulo específico
   - Crear nuevas tareas
   - Editar tareas existentes
   - Eliminar tareas
   - Ver todas las tareas de un módulo
   - Marcar tareas como completadas o en diferentes estados
   - Añadir y modificar la nota de cada tarea (el estudiante gestiona sus propias notas)

5. **Filtrado y Ordenación**:
   - Filtrar tareas por módulo
   - Filtrar tareas por fecha
   - Filtrar tareas por estado
   - Ordenar tareas según diferentes criterios

#### Usuario Administrador

Un administrador puede:

1. **Autenticación**:

   - Iniciar sesión con credenciales de administrador
   - Cerrar sesión

2. **Gestión de Módulos por Ciclo**:
   - Crear módulos para cada ciclo formativo
   - Editar módulos existentes
   - Eliminar módulos
   - Asignar módulos a ciclos formativos específicos
   - Gestionar la información de los módulos (nombre, curso, etc.)

### Arquitectura de Persistencia (en Fases)

El proyecto se desarrolla en dos fases para facilitar el aprendizaje:

#### Fase 1: Persistencia en LocalStorage

- Los datos se almacenan localmente en el navegador usando LocalStorage
- Permite desarrollar la aplicación sin necesidad de un backend
- Ideal para las primeras semanas del proyecto

#### Fase 2: API REST con Express y MongoDB

- Migración a una API REST desarrollada con Express
- Base de datos NoSQL con MongoDB
- Los datos se almacenan en un servidor
- Permite acceso desde múltiples dispositivos

#### ORM/ODM: Capa de Abstracción

Se creará una capa de abstracción (ORM/ODM) que:

- Define funciones para acceder a los datos (get, create, update, delete)
- Inicialmente usa LocalStorage
- En la Fase 2 se conecta a la API usando fetch
- Permite cambiar la implementación sin modificar el código de los componentes

### Stack Tecnológico

#### Frontend

- **React 19**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript con tipado estático (con tipado ligero para facilitar el aprendizaje)
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework de utilidades CSS
- **Shadcn/ui**: Biblioteca de componentes basada en Radix UI y Tailwind CSS

#### Backend (Fase 2)

- **Express**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL

### Requisitos Funcionales

1. **RF1**: El sistema debe permitir a usuarios no registrados seleccionar un ciclo formativo y ver sus módulos
2. **RF2**: El sistema debe permitir el registro de estudiantes con selección de ciclo formativo
3. **RF3**: El sistema debe permitir la autenticación de estudiantes y administradores
4. **RF4**: Al registrarse un estudiante, el sistema debe añadir automáticamente los módulos correspondientes a su ciclo formativo
5. **RF5**: El sistema debe permitir a estudiantes gestionar las notas de sus módulos (trimestre 1, 2, 3, ordinaria, extraordinaria)
6. **RF6**: El sistema debe permitir a estudiantes cambiar el estado de sus módulos (aprobado, cursando, no cursa, etc.)
7. **RF7**: El sistema debe permitir crear, editar, eliminar y visualizar tareas
8. **RF8**: El sistema debe permitir a estudiantes añadir y modificar las notas de sus tareas
9. **RF9**: El sistema debe permitir marcar tareas con diferentes estados
10. **RF10**: El sistema debe permitir a administradores gestionar módulos para cada ciclo formativo
11. **RF11**: El sistema debe permitir filtrar y ordenar módulos y tareas

### Requisitos No Funcionales

1. **RNF1**: La aplicación debe ser responsive (adaptable a diferentes tamaños de pantalla)
2. **RNF2**: La aplicación debe tener una interfaz intuitiva y fácil de usar
3. **RNF3**: El código debe seguir buenas prácticas y convenciones
4. **RNF4**: La aplicación debe funcionar correctamente en navegadores modernos

### Historias de Usuario (User Stories)

#### Historia 1: Visualización de Módulos (Usuario No Registrado)

**Como** usuario no registrado  
**Quiero** seleccionar un ciclo formativo y ver sus módulos  
**Para** conocer qué módulos incluye cada ciclo

**Criterios de Aceptación**:

- Debe existir un selector de ciclos formativos
- Al seleccionar un ciclo, se muestran sus módulos en formato de tarjetas
- Las tarjetas muestran información relevante del módulo

#### Historia 2: Registro de Estudiante

**Como** nuevo usuario  
**Quiero** registrarme seleccionando mi ciclo formativo  
**Para** acceder a las funcionalidades de estudiante

**Criterios de Aceptación**:

- Debe existir un formulario de registro
- El formulario debe incluir selección de ciclo formativo
- Los datos deben guardarse correctamente

#### Historia 3: Autenticación

**Como** estudiante registrado  
**Quiero** iniciar sesión con mis credenciales  
**Para** acceder a mi área personal

**Criterios de Aceptación**:

- Debe existir un formulario de login
- Debe validar las credenciales
- Debe redirigir al área de estudiante tras login exitoso

#### Historia 4: Visualización de Módulos Propios

**Como** estudiante autenticado  
**Quiero** ver los módulos de mi ciclo formativo  
**Para** acceder a mis tareas

**Criterios de Aceptación**:

- Debe mostrar solo los módulos del ciclo del estudiante
- Debe permitir filtrar por curso (1º o 2º)
- Debe permitir ordenar los módulos

#### Historia 5: Gestión de Tareas

**Como** estudiante autenticado  
**Quiero** crear, editar, eliminar y ver tareas de un módulo  
**Para** organizar mi trabajo

**Criterios de Aceptación**:

- Debe permitir crear nuevas tareas
- Debe permitir editar tareas existentes
- Debe permitir eliminar tareas
- Debe mostrar todas las tareas de un módulo

#### Historia 6: Estados de Tareas

**Como** estudiante autenticado  
**Quiero** marcar tareas con diferentes estados  
**Para** hacer seguimiento de mi progreso

**Criterios de Aceptación**:

- Debe permitir cambiar el estado de una tarea
- Los estados pueden ser: pendiente, en progreso, completada, etc.
- El estado debe guardarse correctamente

#### Historia 7: Gestión de Notas de Módulos

**Como** estudiante autenticado  
**Quiero** gestionar las notas de mis módulos para diferentes evaluaciones  
**Para** hacer seguimiento de mi progreso académico

**Criterios de Aceptación**:

- Debe permitir añadir/modificar la nota para cada evaluación (trimestre 1, 2, 3, ordinaria, extraordinaria)
- Debe permitir cambiar el estado del módulo (aprobado, cursando, no cursa, etc.)
- Las notas y estados deben guardarse correctamente
- Debe mostrar todas las notas del módulo

#### Historia 7b: Gestión de Notas de Tareas

**Como** estudiante autenticado  
**Quiero** añadir y modificar las notas de mis tareas  
**Para** hacer seguimiento de mi evaluación en cada tarea

**Criterios de Aceptación**:

- Debe permitir añadir una nota a cada tarea
- Debe permitir modificar la nota de una tarea existente
- Las notas deben guardarse correctamente
- Debe mostrar la nota de cada tarea

#### Historia 8: Filtrado y Ordenación

**Como** estudiante autenticado  
**Quiero** filtrar y ordenar módulos y tareas  
**Para** encontrar información rápidamente

**Criterios de Aceptación**:

- Debe permitir filtrar tareas por módulo, fecha y estado
- Debe permitir ordenar tareas por diferentes criterios
- Debe permitir filtrar y ordenar módulos

#### Historia 9: Gestión de Módulos por Administrador

**Como** administrador  
**Quiero** gestionar los módulos para cada ciclo formativo  
**Para** mantener actualizada la información de los ciclos

**Criterios de Aceptación**:

- Debe permitir crear nuevos módulos para un ciclo formativo
- Debe permitir editar módulos existentes
- Debe permitir eliminar módulos
- Debe permitir asignar módulos a ciclos formativos específicos
- Los cambios deben reflejarse en los estudiantes del ciclo correspondiente

### Criterios de Aceptación

Cada historia de usuario debe cumplir con:

- Funcionalidad implementada según la descripción
- Interfaz de usuario clara e intuitiva
- Datos persistidos correctamente
- Código revisado y sin errores críticos
- Tests básicos pasando (si se implementan)

### Definición de "Done"

Una historia de usuario se considera "Done" cuando:

1. ✅ La funcionalidad está implementada según los criterios de aceptación
2. ✅ El código está revisado por la pareja
3. ✅ El código está en el repositorio (rama develop o main)
4. ✅ No hay errores críticos en la consola
5. ✅ La interfaz es funcional y usable
6. ✅ Los datos se persisten correctamente
7. ✅ El Pull Request está cerrado y mergeado (si aplica)

---

## Sección 3: Casos de Uso

### Diagrama de Casos de Uso (Texto)

```
Actores:
- Usuario No Registrado
- Estudiante (Usuario Registrado)

Casos de Uso:

Usuario No Registrado:
├── Seleccionar Ciclo Formativo
└── Ver Módulos del Ciclo

Estudiante:
├── Registrarse
├── Iniciar Sesión
├── Cerrar Sesión
├── Ver Módulos Propios
├── Filtrar Módulos
├── Ordenar Módulos
├── Acceder a Módulo
├── Ver Tareas del Módulo
├── Crear Tarea
├── Editar Tarea
├── Eliminar Tarea
├── Cambiar Estado de Tarea
├── Ver Nota de Módulo
├── Ver Nota de Tarea
├── Filtrar Tareas
└── Ordenar Tareas
```

### Casos de Uso para Usuario No Registrado

#### CU-1: Seleccionar Ciclo Formativo

**Actor**: Usuario No Registrado

**Descripción**: El usuario puede seleccionar un ciclo formativo de una lista para ver sus módulos.

**Flujo Principal**:

1. El usuario accede a la aplicación
2. El sistema muestra un selector con los ciclos formativos disponibles
3. El usuario selecciona un ciclo formativo
4. El sistema muestra los módulos del ciclo seleccionado

**Flujos Alternativos**:

- 3a. Si no hay ciclos disponibles, se muestra un mensaje informativo

**Precondiciones**: Ninguna

**Postcondiciones**: Se muestran los módulos del ciclo seleccionado

#### CU-2: Ver Módulos del Ciclo

**Actor**: Usuario No Registrado

**Descripción**: El usuario puede ver los módulos de un ciclo formativo en formato de tarjetas.

**Flujo Principal**:

1. El usuario ha seleccionado un ciclo formativo
2. El sistema muestra los módulos en formato de tarjetas
3. Cada tarjeta muestra información del módulo (nombre, curso, etc.)

**Flujos Alternativos**: Ninguno

**Precondiciones**: El usuario ha seleccionado un ciclo formativo

**Postcondiciones**: Se visualizan los módulos del ciclo

### Casos de Uso para Estudiante

#### CU-3: Registrarse

**Actor**: Estudiante (nuevo usuario)

**Descripción**: Un nuevo usuario se registra en la aplicación seleccionando su ciclo formativo. Al registrarse, el sistema añade automáticamente los módulos correspondientes a su ciclo.

**Flujo Principal**:

1. El usuario accede al formulario de registro
2. El usuario completa los datos (nombre, email, contraseña, etc.)
3. El usuario selecciona su ciclo formativo
4. El usuario envía el formulario
5. El sistema valida los datos
6. El sistema guarda el nuevo usuario
7. El sistema añade automáticamente los módulos correspondientes al ciclo formativo seleccionado a la base de datos del estudiante
8. El sistema redirige al usuario a la página de login

**Flujos Alternativos**:

- 5a. Si los datos son inválidos, se muestran mensajes de error
- 6a. Si el email ya existe, se muestra un mensaje de error

**Precondiciones**: El usuario no está registrado

**Postcondiciones**: El usuario queda registrado en el sistema y tiene los módulos de su ciclo asignados

#### CU-4: Iniciar Sesión

**Actor**: Estudiante

**Descripción**: Un estudiante registrado inicia sesión en la aplicación.

**Flujo Principal**:

1. El usuario accede al formulario de login
2. El usuario introduce su email y contraseña
3. El usuario envía el formulario
4. El sistema valida las credenciales
5. El sistema autentica al usuario
6. El sistema redirige al usuario a su área personal

**Flujos Alternativos**:

- 4a. Si las credenciales son incorrectas, se muestra un mensaje de error
- 4b. Si el usuario no existe, se muestra un mensaje de error

**Precondiciones**: El usuario está registrado

**Postcondiciones**: El usuario queda autenticado en el sistema

#### CU-5: Cerrar Sesión

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante autenticado cierra su sesión.

**Flujo Principal**:

1. El usuario hace clic en el botón de cerrar sesión
2. El sistema cierra la sesión del usuario
3. El sistema redirige al usuario a la página principal

**Flujos Alternativos**: Ninguno

**Precondiciones**: El usuario está autenticado

**Postcondiciones**: El usuario ya no está autenticado

#### CU-6: Ver Módulos Propios

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante autenticado ve los módulos de su ciclo formativo.

**Flujo Principal**:

1. El estudiante accede a su área personal
2. El sistema obtiene el ciclo formativo del estudiante
3. El sistema muestra los módulos del ciclo del estudiante
4. Los módulos se muestran en formato de tarjetas

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado

**Postcondiciones**: Se visualizan los módulos del ciclo del estudiante

#### CU-7: Filtrar Módulos

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante filtra los módulos por curso (1º o 2º).

**Flujo Principal**:

1. El estudiante ve la lista de módulos
2. El estudiante selecciona un filtro (1º curso o 2º curso)
3. El sistema filtra los módulos según el criterio seleccionado
4. El sistema muestra solo los módulos que cumplen el filtro

**Flujos Alternativos**:

- 2a. El estudiante puede seleccionar "Todos" para ver todos los módulos

**Precondiciones**: El estudiante está autenticado y ve sus módulos

**Postcondiciones**: Se muestran solo los módulos filtrados

#### CU-8: Ordenar Módulos

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante ordena los módulos según diferentes criterios.

**Flujo Principal**:

1. El estudiante ve la lista de módulos
2. El estudiante selecciona un criterio de ordenación
3. El sistema ordena los módulos según el criterio
4. El sistema muestra los módulos ordenados

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y ve sus módulos

**Postcondiciones**: Los módulos se muestran ordenados

#### CU-9: Acceder a Módulo

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante accede a un módulo específico para ver y gestionar sus tareas.

**Flujo Principal**:

1. El estudiante ve la lista de módulos
2. El estudiante hace clic en un módulo
3. El sistema muestra la vista detallada del módulo
4. El sistema muestra las tareas del módulo

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y ve sus módulos

**Postcondiciones**: Se muestra la vista del módulo con sus tareas

#### CU-10: Ver Tareas del Módulo

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante ve todas las tareas de un módulo.

**Flujo Principal**:

1. El estudiante accede a un módulo
2. El sistema obtiene las tareas del módulo
3. El sistema muestra todas las tareas del módulo

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y accede a un módulo

**Postcondiciones**: Se visualizan todas las tareas del módulo

#### CU-11: Crear Tarea

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante crea una nueva tarea en un módulo.

**Flujo Principal**:

1. El estudiante accede a un módulo
2. El estudiante hace clic en "Crear Tarea"
3. El sistema muestra un formulario para crear tarea
4. El estudiante completa el formulario (título, descripción, fecha, etc.)
5. El estudiante envía el formulario
6. El sistema valida los datos
7. El sistema guarda la nueva tarea
8. El sistema actualiza la lista de tareas

**Flujos Alternativos**:

- 6a. Si los datos son inválidos, se muestran mensajes de error

**Precondiciones**: El estudiante está autenticado y accede a un módulo

**Postcondiciones**: Se crea una nueva tarea en el módulo

#### CU-12: Editar Tarea

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante edita una tarea existente.

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante hace clic en "Editar" en una tarea
3. El sistema muestra el formulario con los datos actuales
4. El estudiante modifica los datos
5. El estudiante envía el formulario
6. El sistema valida los datos
7. El sistema actualiza la tarea
8. El sistema actualiza la lista de tareas

**Flujos Alternativos**:

- 6a. Si los datos son inválidos, se muestran mensajes de error

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: La tarea queda actualizada

#### CU-13: Eliminar Tarea

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante elimina una tarea.

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante hace clic en "Eliminar" en una tarea
3. El sistema muestra un diálogo de confirmación
4. El estudiante confirma la eliminación
5. El sistema elimina la tarea
6. El sistema actualiza la lista de tareas

**Flujos Alternativos**:

- 4a. Si el estudiante cancela, no se elimina la tarea

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: La tarea queda eliminada

#### CU-14: Cambiar Estado de Tarea

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante cambia el estado de una tarea (pendiente, en progreso, completada, etc.).

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante selecciona un nuevo estado para una tarea
3. El sistema actualiza el estado de la tarea
4. El sistema actualiza la visualización de la tarea

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: La tarea queda con el nuevo estado

#### CU-15: Gestionar Notas de Módulo

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante gestiona las notas de un módulo para diferentes evaluaciones y cambia su estado.

**Flujo Principal**:

1. El estudiante accede a un módulo
2. El sistema muestra las notas del módulo (trimestre 1, 2, 3, ordinaria, extraordinaria)
3. El estudiante modifica una nota o añade una nueva
4. El estudiante puede cambiar el estado del módulo (aprobado, cursando, no cursa, etc.)
5. El sistema guarda los cambios

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y accede a un módulo

**Postcondiciones**: Las notas y el estado del módulo quedan actualizados

#### CU-16: Gestionar Nota de Tarea

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante añade o modifica la nota de una tarea.

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante selecciona una tarea para añadir o modificar su nota
3. El estudiante introduce o modifica la nota
4. El sistema guarda la nota

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: La nota de la tarea queda guardada o actualizada

#### CU-17: Filtrar Tareas

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante filtra las tareas por módulo, fecha o estado.

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante selecciona un filtro (módulo, fecha, estado)
3. El sistema filtra las tareas según el criterio
4. El sistema muestra solo las tareas que cumplen el filtro

**Flujos Alternativos**:

- 2a. El estudiante puede combinar múltiples filtros

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: Se muestran solo las tareas filtradas

#### CU-18: Ordenar Tareas

**Actor**: Estudiante autenticado

**Descripción**: Un estudiante ordena las tareas según diferentes criterios.

**Flujo Principal**:

1. El estudiante ve la lista de tareas
2. El estudiante selecciona un criterio de ordenación
3. El sistema ordena las tareas según el criterio
4. El sistema muestra las tareas ordenadas

**Flujos Alternativos**: Ninguno

**Precondiciones**: El estudiante está autenticado y accede a un módulo con tareas

**Postcondiciones**: Las tareas se muestran ordenadas

#### CU-19: Gestionar Módulos (Administrador)

**Actor**: Administrador

**Descripción**: Un administrador gestiona los módulos para cada ciclo formativo.

**Flujo Principal**:

1. El administrador accede al panel de administración
2. El administrador selecciona un ciclo formativo
3. El administrador puede crear, editar o eliminar módulos del ciclo
4. El sistema guarda los cambios
5. Los módulos se actualizan para todos los estudiantes del ciclo

**Flujos Alternativos**:

- 3a. Si se crea un nuevo módulo, se asigna automáticamente a los estudiantes del ciclo
- 3b. Si se elimina un módulo, se elimina de todos los estudiantes del ciclo

**Precondiciones**: El administrador está autenticado

**Postcondiciones**: Los módulos del ciclo quedan actualizados

---

## Sección 4: Creación del Proyecto

### Requisitos Previos

Antes de crear el proyecto, asegúrate de tener instalado:

1. **Node.js**: Versión 18 o superior

   - Descarga desde: https://nodejs.org/
   - Verifica la instalación: `node --version`
   - Verifica npm: `npm --version`

2. **Git**: Para control de versiones

   - Descarga desde: https://git-scm.com/
   - Verifica la instalación: `git --version`

3. **Editor de código**: Recomendamos Visual Studio Code
   - Descarga desde: https://code.visualstudio.com/

### Creación del Proyecto con Vite + React + TypeScript

Vite es una herramienta de construcción moderna que proporciona una experiencia de desarrollo rápida. Vamos a crear el proyecto:

1. **Abre la terminal** en la carpeta donde quieres crear el proyecto

2. **Crea el proyecto** usando npm:

```bash
npm create vite@latest tareas_modulos -- --template react-ts
```

Este comando:

- Crea un nuevo proyecto llamado `tareas_modulos`
- Usa la plantilla `react-ts` que incluye React y TypeScript
- Configura Vite automáticamente

3. **Navega a la carpeta del proyecto**:

```bash
cd tareas_modulos
```

4. **Instala las dependencias**:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (React, TypeScript, Vite, etc.)

5. **Inicia el servidor de desarrollo**:

```bash
npm run dev
```

Deberías ver algo como:

```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

6. **Abre tu navegador** en `http://localhost:5173` para ver la aplicación funcionando

### Estructura de Carpetas Inicial

Después de crear el proyecto, tendrás esta estructura:

```
tareas_modulos/
├── public/                 # Archivos estáticos (se sirven directamente)
│   └── vite.svg
├── src/                    # Código fuente
│   ├── assets/            # Recursos (imágenes, iconos, etc.)
│   │   └── react.svg
│   ├── App.css            # Estilos del componente App
│   ├── App.tsx             # Componente principal
│   ├── index.css           # Estilos globales
│   └── main.tsx            # Punto de entrada de la aplicación
├── index.html              # HTML principal
├── .gitignore             # Archivos ignorados por Git
├── eslint.config.js       # Configuración de ESLint
├── package.json           # Dependencias y scripts
├── package-lock.json      # Versiones exactas de dependencias
├── tsconfig.json          # Configuración de TypeScript
├── tsconfig.app.json      # Configuración de TypeScript para la app
├── tsconfig.node.json     # Configuración de TypeScript para Node
└── vite.config.ts         # Configuración de Vite
```

### Comandos Básicos

El proyecto incluye varios scripts en `package.json`:

- **`npm run dev`**: Inicia el servidor de desarrollo

  - Hot Module Replacement (HMR): los cambios se reflejan automáticamente
  - No necesitas recargar la página manualmente

- **`npm run build`**: Construye la aplicación para producción

  - Crea una carpeta `dist/` con los archivos optimizados
  - Los archivos están listos para desplegar

- **`npm run preview`**: Previsualiza la build de producción

  - Útil para probar cómo se verá la app en producción

- **`npm run lint`**: Ejecuta el linter para verificar el código
  - Ayuda a mantener el código consistente y sin errores

### Verificación de la Instalación

Para verificar que todo está correcto:

1. El servidor de desarrollo debe iniciar sin errores
2. Debes ver la página de bienvenida de Vite + React en el navegador
3. Si modificas `src/App.tsx`, los cambios deben reflejarse automáticamente

Si encuentras algún problema, verifica:

- Que Node.js esté correctamente instalado
- Que todas las dependencias se hayan instalado (`npm install`)
- Que no haya conflictos de puertos (5173 debe estar libre)

---

## Sección 5: Introducción a TypeScript con Tipado Ligero

### ¿Qué es TypeScript?

**TypeScript** es un lenguaje de programación desarrollado por Microsoft que es un "superset" de JavaScript. Esto significa que todo código JavaScript válido es también código TypeScript válido.

**¿Por qué usar TypeScript?**

- **Detección temprana de errores**: TypeScript encuentra errores antes de ejecutar el código
- **Mejor autocompletado**: Los editores pueden sugerir mejor código
- **Documentación implícita**: Los tipos actúan como documentación
- **Refactorización más segura**: Cambiar código es más seguro con tipos

**Diferencias básicas con JavaScript**:

- TypeScript añade tipos estáticos a JavaScript
- Se compila a JavaScript antes de ejecutarse
- Proporciona herramientas de desarrollo más potentes

### Conceptos Fundamentales

#### Tipos Básicos

TypeScript tiene tipos básicos que puedes usar:

```typescript
// Números
let edad: number = 25;

// Texto (strings)
let nombre: string = "Juan";

// Booleanos
let activo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis"];
```

#### Type Annotations (Anotaciones de Tipo)

Puedes especificar el tipo de una variable usando `:` seguido del tipo:

```typescript
let edad: number = 25;
let nombre: string = "María";
```

#### Interfaces

Las interfaces definen la estructura de un objeto:

```typescript
interface Usuario {
	nombre: string;
	email: string;
	edad: number;
}

let usuario: Usuario = {
	nombre: "Carlos",
	email: "carlos@example.com",
	edad: 20,
};
```

### Estrategia de Tipado Ligero

Para facilitar el aprendizaje, usaremos una **estrategia de tipado ligero**:

#### Uso de `any` cuando sea necesario

El tipo `any` permite cualquier valor. Úsalo cuando:

- Estés aprendiendo y no sepas qué tipo usar
- Trabajes con código que aún no tiene tipos
- Necesites flexibilidad temporal

```typescript
// Está bien usar 'any' mientras aprendes
let dato: any = "cualquier cosa";
dato = 123; // También funciona
dato = true; // También funciona
```

**Nota**: Con el tiempo, intenta reemplazar `any` con tipos más específicos.

#### Tipos Básicos Primero

Empieza usando solo los tipos básicos:

- `string` para texto
- `number` para números
- `boolean` para valores verdadero/falso
- `any` cuando no estés seguro

#### Progresión Gradual

1. **Semana 1-2**: Usa principalmente `any` y tipos básicos
2. **Semana 3-4**: Empieza a usar interfaces simples
3. **Semana 5-6**: Añade más tipos específicos
4. **Semana 7**: Refina los tipos donde sea importante

#### No Forzar Tipado Estricto Inicialmente

No te preocupes por tener tipos perfectos desde el principio. Es mejor tener código funcionando con tipos básicos que código que no funciona por tipos demasiado estrictos.

### Ejemplos Prácticos

#### Componentes React con Tipado Básico

```typescript
// Componente simple con props básicas
function Saludo(props: any) {
	return <h1>Hola, {props.nombre}</h1>;
}

// Uso
<Saludo nombre="María" />;
```

#### Props con Tipos Simples

```typescript
// Mejor: definir tipos para las props
interface SaludoProps {
	nombre: string;
	edad?: number; // El ? significa opcional
}

function Saludo(props: SaludoProps) {
	return (
		<div>
			<h1>Hola, {props.nombre}</h1>
			{props.edad && <p>Tienes {props.edad} años</p>}
		</div>
	);
}
```

#### Funciones con Tipos Básicos

```typescript
// Función simple
function sumar(a: number, b: number): number {
	return a + b;
}

// Función con parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
	if (apellido) {
		return `Hola, ${nombre} ${apellido}`;
	}
	return `Hola, ${nombre}`;
}
```

#### Cuándo Usar `any` y Cuándo Evitarlo

**Usa `any` cuando**:

- Estás empezando y no sabes el tipo exacto
- Trabajas con APIs externas sin tipos
- Necesitas prototipar rápidamente

**Evita `any` cuando**:

- Ya conoces el tipo exacto
- Quieres aprovechar las ventajas de TypeScript
- El código será usado por otros

### Configuración de TypeScript

El archivo `tsconfig.json` controla cómo TypeScript compila tu código. Para empezar con tipado ligero, usa una configuración permisiva:

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"useDefineForClassFields": true,
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"module": "ESNext",
		"skipLibCheck": true,
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"strict": false, // ← Permite tipado más flexible
		"noUnusedLocals": false, // ← No marca variables no usadas como error
		"noUnusedParameters": false,
		"noFallthroughCasesInSwitch": true
	},
	"include": ["src"]
}
```

**Opciones clave**:

- `"strict": false`: Permite código más flexible
- `"noUnusedLocals": false`: No marca errores por variables no usadas
- `"jsx": "react-jsx"`: Permite usar JSX en archivos .tsx

---

## Sección 6: Configuración del Entorno de Desarrollo

### Instalación de Dependencias

Las dependencias ya están instaladas cuando ejecutaste `npm install` al crear el proyecto. Si necesitas instalar dependencias adicionales:

```bash
# Instalar una dependencia
npm install nombre-paquete

# Instalar una dependencia de desarrollo
npm install -D nombre-paquete

# Instalar múltiples dependencias
npm install paquete1 paquete2 paquete3
```

### Configuración de TypeScript

El proyecto ya viene con TypeScript configurado. Los archivos de configuración son:

- `tsconfig.json`: Configuración principal
- `tsconfig.app.json`: Configuración para la aplicación
- `tsconfig.node.json`: Configuración para scripts de Node

Puedes modificar estos archivos según necesites, pero para empezar, la configuración por defecto es suficiente.

### Configuración de ESLint

ESLint es una herramienta que analiza tu código y encuentra problemas. El archivo `eslint.config.js` contiene la configuración.

**Comandos útiles**:

```bash
# Verificar el código
npm run lint

# Corregir automáticamente algunos problemas
npm run lint -- --fix
```

### Configuración de Git

Antes de empezar a trabajar, configura Git:

1. **Configura tu identidad** (si no lo has hecho antes):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@example.com"
```

2. **Inicializa el repositorio** (si no lo creaste desde GitHub):

```bash
git init
```

3. **Añade los archivos**:

```bash
git add .
```

4. **Haz tu primer commit**:

```bash
git commit -m "Initial commit: proyecto base con Vite + React + TypeScript"
```

### Editor Recomendado: Visual Studio Code

**Visual Studio Code (VS Code)** es el editor recomendado. Ofrece excelente soporte para React y TypeScript.

#### Extensiones Recomendadas

Instala estas extensiones en VS Code:

1. **ES7+ React/Redux/React-Native snippets**

   - Snippets útiles para React
   - Busca: "ES7+ React/Redux/React-Native snippets"

2. **TypeScript Importer**

   - Ayuda a importar tipos automáticamente
   - Busca: "TypeScript Importer"

3. **ESLint**

   - Muestra errores de ESLint en el editor
   - Busca: "ESLint"

4. **Prettier - Code formatter**

   - Formatea el código automáticamente
   - Busca: "Prettier - Code formatter"

5. **GitLens**
   - Mejora la integración con Git
   - Busca: "GitLens"

#### Configuración de VS Code

Crea un archivo `.vscode/settings.json` en la raíz del proyecto:

```json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"typescript.tsdk": "node_modules/typescript/lib",
	"typescript.enablePromptUseWorkspaceTsdk": true
}
```

Esto configurará:

- Formateo automático al guardar
- Corrección automática de ESLint
- Uso de TypeScript del proyecto

---

## Sección 7: Configuración de GitHub

### Creación del Repositorio

1. **Inicia sesión en GitHub** (https://github.com)

2. **Crea un nuevo repositorio**:

   - Haz clic en el botón "+" en la esquina superior derecha
   - Selecciona "New repository"
   - Nombre: `tareas-modulos` (o el nombre que prefieras)
   - Descripción: "Aplicación para gestionar módulos y tareas de ciclos formativos"
   - Visibilidad: Público o Privado (según prefieras)
   - **NO** marques "Initialize this repository with a README" (ya tienes código local)
   - Haz clic en "Create repository"

3. **Conecta tu repositorio local con GitHub**:

```bash
# Añade el remoto (reemplaza USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/tareas-modulos.git

# Cambia el nombre de la rama principal a 'main' (si es necesario)
git branch -M main

# Sube tu código
git push -u origin main
```

### Configuración de Ramas

#### Estrategia de Ramas

Usaremos una estrategia de ramas simple:

- **`main`**: Código estable y listo para producción
- **`develop`**: Código en desarrollo, integración de features
- **`feature/nombre-historia`**: Ramas para desarrollar funcionalidades específicas

#### Crear la Rama Develop

```bash
# Crea la rama develop
git checkout -b develop

# Súbela a GitHub
git push -u origin develop
```

#### Crear Ramas de Características

Para cada historia de usuario, crea una rama desde `develop`:

```bash
# Cambia a develop
git checkout develop

# Actualiza develop
git pull origin develop

# Crea una nueva rama para la feature
git checkout -b feature/registro-usuario

# Trabaja en la feature...
# Cuando termines, vuelve a develop y haz merge
```

### .gitignore Apropiado

El proyecto ya incluye un `.gitignore` básico. Asegúrate de que incluya:

```
# Dependencias
node_modules/

# Build
dist/
dist-ssr/
*.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Variables de entorno
.env
.env.local
.env.production
```

### README Inicial

El README.md ya está actualizado con información básica del proyecto. Asegúrate de mantenerlo actualizado con:

- Descripción del proyecto
- Instrucciones de instalación
- Comandos disponibles
- Enlace a la documentación completa

---

## Sección 8: Organización del Trabajo con Git y GitHub

### Flujo de Trabajo con Git

#### ¿Qué es Git?

**Git** es un sistema de control de versiones que permite:

- Guardar el historial de cambios en tu código
- Trabajar en equipo sin conflictos
- Revertir cambios si algo sale mal
- Crear ramas para desarrollar funcionalidades

**¿Por qué es importante?**

- Permite trabajar en equipo de forma organizada
- Mantiene un historial de todos los cambios
- Facilita la colaboración
- Es esencial en el desarrollo profesional

#### Conceptos Básicos

- **Repositorio**: Carpeta del proyecto con historial de Git
- **Commit**: Un "punto de guardado" en el historial
- **Rama (Branch)**: Una línea de desarrollo independiente
- **Merge**: Combinar cambios de una rama a otra

#### Comandos Básicos de Git

**`git init`**: Inicializa un repositorio Git en la carpeta actual

```bash
git init
```

**`git add`**: Añade archivos al área de staging (preparación para commit)

```bash
git add archivo.tsx        # Añade un archivo específico
git add .                  # Añade todos los archivos modificados
git add src/               # Añade todos los archivos de una carpeta
```

**`git commit`**: Guarda los cambios en el historial

```bash
git commit -m "Mensaje descriptivo del cambio"
```

**`git push`**: Envía los commits al repositorio remoto (GitHub)

```bash
git push origin main       # Envía a la rama main
git push origin develop    # Envía a la rama develop
```

**`git pull`**: Descarga y combina cambios del repositorio remoto

```bash
git pull origin develop
```

**`git branch`**: Gestiona ramas

```bash
git branch                 # Lista todas las ramas
git branch nombre-rama     # Crea una nueva rama
git branch -d nombre-rama  # Elimina una rama
```

**`git checkout`**: Cambia de rama o restaura archivos

```bash
git checkout nombre-rama   # Cambia a otra rama
git checkout -b nueva-rama # Crea y cambia a una nueva rama
```

**`git status`**: Muestra el estado del repositorio

```bash
git status
```

### Estrategia de Ramas (Branching Strategy)

#### Ramas Principales

**`main`**:

- Código estable y listo para producción
- Solo se actualiza desde `develop` cuando hay una versión lista
- Protegida (no se hace commit directo)

**`develop`**:

- Código en desarrollo
- Integración de todas las features
- Base para crear nuevas ramas de features

#### Ramas de Características

**`feature/nombre-historia`**:

- Una rama por cada historia de usuario
- Se crea desde `develop`
- Se mergea de vuelta a `develop` cuando está completa
- Convención de nombres: `feature/registro-usuario`, `feature/lista-modulos`, etc.

#### Convenciones de Nombres para Ramas

- **Features**: `feature/nombre-descriptivo`

  - Ejemplo: `feature/registro-estudiante`
  - Ejemplo: `feature/lista-tareas`

- **Bugs**: `fix/descripcion-bug`

  - Ejemplo: `fix/error-login`

- **Hotfixes**: `hotfix/descripcion`
  - Ejemplo: `hotfix/correccion-critica`

#### Creación y Cambio de Ramas

```bash
# Crear una nueva rama desde develop
git checkout develop
git pull origin develop
git checkout -b feature/registro-usuario

# Trabajar en la rama...
# Hacer commits...

# Cuando termines, volver a develop y hacer merge
git checkout develop
git merge feature/registro-usuario
git push origin develop
```

### Commits Efectivos

#### ¿Qué es un Commit?

Un **commit** es un "punto de guardado" en el historial de Git. Representa un conjunto de cambios relacionados.

#### Mensajes de Commit Descriptivos

Un buen mensaje de commit:

- Es claro y descriptivo
- Explica QUÉ cambió y POR QUÉ
- Usa el presente ("añade" no "añadí")
- Es conciso pero informativo

**Ejemplos de buenos commits**:

```
✅ Añade formulario de registro de estudiante
✅ Implementa filtrado de tareas por estado
✅ Corrige error al eliminar tarea
✅ Mejora estilos del componente Card
✅ Añade validación de email en registro
```

**Ejemplos de malos commits**:

```
❌ cambios
❌ fix
❌ actualización
❌ wip (work in progress)
❌ asdf
```

#### Convenciones de Mensajes de Commit

Puedes usar prefijos para categorizar:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

**Ejemplos**:

```
feat: añade formulario de registro
fix: corrige error al guardar tarea
docs: actualiza README con instrucciones
style: mejora diseño de tarjetas de módulos
```

#### Frecuencia de Commits

- **Haz commits frecuentes**: Cada vez que completes una pequeña funcionalidad
- **Commits atómicos**: Un commit por cambio lógico
- **No esperes al final del día**: Haz commits mientras trabajas

**Buenas prácticas**:

- Commit después de completar una función pequeña
- Commit antes de cambiar de tarea
- Commit cuando algo funciona correctamente

### Pull Requests (PR)

#### ¿Qué es un Pull Request?

Un **Pull Request (PR)** es una solicitud para combinar cambios de una rama a otra. Permite:

- Revisar código antes de integrarlo
- Discutir cambios
- Hacer comentarios
- Asegurar calidad antes del merge

#### Cuándo Crear un Pull Request

Crea un PR cuando:

- Has completado una historia de usuario
- Quieres que tu pareja revise tu código
- Estás listo para integrar cambios a `develop`

#### Proceso de Revisión de Código

1. **Crea la rama y trabaja en ella**
2. **Haz commits frecuentes**
3. **Cuando termines, crea el PR**
4. **Tu pareja revisa el código**
5. **Se hacen cambios si es necesario**
6. **Se aprueba y se hace merge**

#### Cómo Crear un Pull Request en GitHub

1. **Sube tu rama a GitHub**:

```bash
git push origin feature/registro-usuario
```

2. **Ve a GitHub** y verás un botón "Compare & pull request"

3. **Completa el formulario del PR**:

   - **Título**: Descripción breve del cambio
   - **Descripción**:
     - Qué cambió
     - Por qué
     - Cómo probarlo
     - Screenshots si aplica

4. **Asocia el PR con un issue** (ver sección siguiente)

5. **Solicita revisión** a tu pareja

6. **Espera la revisión** y haz cambios si se solicitan

7. **Cuando se apruebe, haz merge**

#### Descripción del PR y Qué Incluir

Una buena descripción de PR incluye:

```markdown
## ¿Qué cambió?

- Añade formulario de registro de estudiante
- Valida email y contraseña
- Guarda usuario en LocalStorage

## ¿Por qué?

Para permitir que nuevos usuarios se registren en la aplicación.

## ¿Cómo probarlo?

1. Ir a /register
2. Completar el formulario
3. Verificar que se guarda en LocalStorage

## Screenshots

[Añadir capturas de pantalla si aplica]

## Relacionado con

Closes #5 # ← Asocia con el issue
```

#### Cierre de PR y Merge

Una vez aprobado el PR:

1. Haz clic en "Merge pull request"
2. Elige el tipo de merge:

   - **Merge commit**: Crea un commit de merge
   - **Squash and merge**: Combina todos los commits en uno
   - **Rebase and merge**: Aplica commits sin commit de merge

3. Confirma el merge
4. Elimina la rama (opcional, pero recomendado)

### Asociar Commits con Historias de Usuario (GitHub Issues/Projects)

#### Referenciar Issues en Commits

Puedes asociar commits con issues usando `#número-issue`:

```bash
git commit -m "Añade formulario de registro #5"
```

O en el mensaje del commit:

```
feat: añade formulario de registro

Implementa el formulario de registro de estudiantes
con validación de campos.

Relacionado con #5
```

#### Cerrar Issues Automáticamente desde Commits

GitHub cierra automáticamente issues si usas palabras clave:

- `fixes #5` o `fix #5`
- `closes #5` o `close #5`
- `resolves #5` o `resolve #5`

**Ejemplo**:

```bash
git commit -m "Implementa registro de usuario, fixes #5"
```

Cuando hagas merge del PR, el issue #5 se cerrará automáticamente.

#### Vincular PRs con Issues

Al crear un PR, puedes asociarlo con un issue:

1. En la descripción del PR, escribe: `Closes #5`
2. O selecciona el issue en la sección "Development" del PR
3. Cuando se haga merge, el issue se cerrará automáticamente

#### Actualizar el Estado de Historias en GitHub Projects

Cuando asocias commits o PRs con issues:

- El issue se mueve automáticamente en el Scrum Board
- Puedes ver el progreso de cada historia
- El estado se actualiza según el flujo de trabajo

#### Ejemplos Prácticos de Asociación

**Ejemplo 1: Commit que cierra un issue**

```bash
git commit -m "feat: añade lista de módulos

Implementa la visualización de módulos en formato de tarjetas.
Incluye filtrado por curso.

Closes #3"
```

**Ejemplo 2: PR asociado con múltiples issues**

```markdown
## Cambios

- Añade autenticación de usuarios
- Implementa protección de rutas

## Relacionado con

Closes #4
Closes #6
```

### Flujo de Trabajo Completo

#### Ejemplo Paso a Paso: Desde Crear Rama hasta Merge

**Paso 1: Actualizar develop**

```bash
git checkout develop
git pull origin develop
```

**Paso 2: Crear rama de feature**

```bash
git checkout -b feature/registro-usuario
```

**Paso 3: Trabajar en la feature**

```bash
# Hacer cambios en los archivos...
# Probar que funciona...

git add .
git commit -m "feat: añade formulario de registro #5"
git commit -m "feat: añade validación de campos #5"
git commit -m "feat: guarda usuario en LocalStorage #5"
```

**Paso 4: Subir la rama**

```bash
git push origin feature/registro-usuario
```

**Paso 5: Crear Pull Request en GitHub**

- Título: "Añade registro de usuario"
- Descripción: "Implementa formulario de registro... Closes #5"
- Solicitar revisión

**Paso 6: Revisión y cambios**

```bash
# Si hay cambios solicitados
git add .
git commit -m "fix: corrige validación de email"
git push origin feature/registro-usuario
```

**Paso 7: Merge del PR**

- Aprobar el PR
- Hacer merge
- Eliminar la rama

**Paso 8: Actualizar develop local**

```bash
git checkout develop
git pull origin develop
```

#### Trabajo en Parejas con Git

**Estrategia recomendada**:

1. **Cada miembro trabaja en una historia diferente**: Para evitar conflictos y potenciar el trabajo en equipo, cada miembro de la pareja se encarga de una historia de usuario diferente
2. **Cada uno crea su propia rama**: `feature/historia-miembro1` y `feature/historia-miembro2`
3. **Comunicación constante**: Sobre el progreso y posibles dependencias entre historias
4. **Pull frecuente**: Para tener los últimos cambios de develop:

```bash
git pull origin develop
```

**Evitar conflictos**:

- Trabaja en historias diferentes (cada miembro en su propia historia)
- Trabaja en archivos diferentes cuando sea posible
- Haz pull antes de empezar a trabajar
- Haz commits frecuentes
- Comunica cambios importantes y dependencias entre historias

#### Resolución de Conflictos Básicos

Si hay conflictos al hacer merge o pull:

1. **Git te mostrará los archivos en conflicto**
2. **Abre los archivos** y busca las marcas de conflicto:

```typescript
<<<<<<< HEAD
// Tu código
=======
// Código del remoto
>>>>>>> origin/develop
```

3. **Resuelve el conflicto**:

   - Decide qué código mantener
   - Elimina las marcas de conflicto
   - Guarda el archivo

4. **Marca el conflicto como resuelto**:

```bash
git add archivo-resuelto.tsx
git commit -m "Resuelve conflicto en archivo-resuelto"
```

#### Sincronización con el Repositorio Remoto

**Antes de empezar a trabajar cada día**:

```bash
git checkout develop
git pull origin develop
```

**Antes de hacer push**:

```bash
git pull origin nombre-rama  # Actualiza tu rama local
# Resuelve conflictos si los hay
git push origin nombre-rama
```

**Comandos útiles**:

```bash
git fetch origin          # Descarga cambios sin mergear
git status                # Ver estado actual
git log --oneline         # Ver historial de commits
```

#### Diagrama de Flujo del Proceso

```
1. develop (actualizado)
   ↓
2. git checkout -b feature/nueva-funcionalidad
   ↓
3. Trabajar en la feature
   ↓
4. git add . && git commit -m "mensaje #issue"
   ↓
5. git push origin feature/nueva-funcionalidad
   ↓
6. Crear Pull Request en GitHub
   ↓
7. Revisión y aprobación
   ↓
8. Merge a develop
   ↓
9. develop (actualizado con nueva funcionalidad)
```

---

## Sección 9: Organización con Scrum Board

### Configuración de GitHub Projects

GitHub Projects es una herramienta que permite organizar el trabajo usando un tablero tipo Kanban/Scrum.

#### Crear un Nuevo Project

1. **Ve a tu repositorio en GitHub**
2. **Haz clic en "Projects"** en el menú superior
3. **Haz clic en "New project"**
4. **Elige "Board"** como plantilla
5. **Asigna un nombre**: "Sprint 1" o "Proyecto Tareas Módulos"
6. **Haz clic en "Create"**

### Creación de Columnas del Scrum Board

Un Scrum Board típico tiene estas columnas:

1. **Backlog**: Historias de usuario pendientes de empezar
2. **To Do**: Historias listas para empezar
3. **In Progress**: Historias en las que se está trabajando
4. **In Review**: Historias completadas esperando revisión
5. **Done**: Historias completadas y validadas

#### Configurar las Columnas

1. **En tu Project**, haz clic en el menú de tres puntos (⋯)
2. **Selecciona "Manage columns"**
3. **Añade las columnas necesarias**:
   - To Do
   - In Progress
   - In Review
   - Done
4. **Guarda los cambios**

### Creación de Issues desde Historias de Usuario

Cada historia de usuario debe convertirse en un **Issue** de GitHub.

#### Crear un Issue

1. **Ve a tu repositorio**
2. **Haz clic en "Issues"**
3. **Haz clic en "New issue"**
4. **Completa el formulario**:

   - **Título**: Nombre de la historia (ej: "Registro de estudiante")
   - **Descripción**:

     ```markdown
     ## Como [rol]

     Quiero [funcionalidad]
     Para [objetivo]

     ## Criterios de Aceptación

     - [ ] Criterio 1
     - [ ] Criterio 2
     - [ ] Criterio 3
     ```

   - **Labels**: Añade etiquetas (ver siguiente sección)
   - **Assignees**: Asigna a tu pareja
   - **Projects**: Asocia con tu Scrum Board
   - **Milestone**: Asocia con un sprint (opcional)

5. **Haz clic en "Submit new issue"**

#### Ejemplo de Issue

```markdown
## Como estudiante

Quiero registrarme en la aplicación seleccionando mi ciclo formativo
Para acceder a las funcionalidades de estudiante

## Criterios de Aceptación

- [ ] Existe un formulario de registro
- [ ] El formulario incluye selección de ciclo formativo
- [ ] Los datos se guardan correctamente
- [ ] Se redirige al login tras registro exitoso

## Notas Técnicas

- Usar LocalStorage para guardar usuarios
- Validar email y contraseña
```

### Asignación a Parejas

#### Asignar Issues

1. **Al crear el issue**, selecciona a tu pareja en "Assignees"
2. **O después**, edita el issue y añade asignados

#### Trabajo en Parejas

- **Una historia = una pareja**: Cada historia se asigna a una pareja
- **Comunicación**: Decidir quién trabaja en qué parte
- **Revisión cruzada**: La pareja revisa el código del otro

### Etiquetas y Milestones

#### Etiquetas (Labels)

Las etiquetas ayudan a categorizar issues:

**Etiquetas sugeridas**:

- `enhancement`: Nueva funcionalidad
- `bug`: Corrección de error
- `documentation`: Cambios en documentación
- `frontend`: Trabajo en frontend
- `backend`: Trabajo en backend (Fase 2)
- `urgent`: Prioridad alta
- `easy`: Tarea fácil
- `medium`: Tarea de dificultad media
- `hard`: Tarea difícil

**Crear etiquetas**:

1. Ve a "Issues" → "Labels"
2. Haz clic en "New label"
3. Asigna nombre y color
4. Guarda

#### Milestones

Los milestones agrupan issues por sprint o versión:

**Crear un Milestone**:

1. Ve a "Issues" → "Milestones"
2. Haz clic en "New milestone"
3. Nombre: "Sprint 1", "Sprint 2", etc.
4. Fecha: Fecha de finalización del sprint
5. Descripción: Objetivos del sprint

**Asociar Issues con Milestones**:

- Al crear o editar un issue, selecciona el milestone

### Flujo de Trabajo: To Do → In Progress → In Review → Done

#### To Do

- Issues que están listos para empezar
- Tienen todos los detalles necesarios
- Están asignados a una pareja

**Acción**: Cuando empieces a trabajar, mueve el issue a "In Progress"

#### In Progress

- Issues en los que se está trabajando activamente
- Hay una rama de feature asociada
- Se están haciendo commits

**Acción**: Cuando termines el código, mueve a "In Review"

#### In Review

- El código está completo
- Hay un Pull Request abierto
- Esperando revisión y aprobación

**Acción**: Cuando se apruebe el PR, mueve a "Done"

#### Done

- La funcionalidad está implementada
- El PR está mergeado
- El issue está cerrado

**Acción**: El issue se cierra automáticamente cuando se hace merge del PR

### Relación entre Issues, Commits y PRs

#### Flujo Completo

1. **Crear Issue** → Aparece en "To Do"
2. **Crear rama** → `feature/nombre-historia`
3. **Hacer commits** → Referenciar issue: `#5`
4. **Crear PR** → Asociar con issue: `Closes #5`
5. **Mover issue** → "In Progress" → "In Review"
6. **Aprobar PR** → Hacer merge
7. **Issue se cierra** → Aparece en "Done"

#### Automatización

GitHub puede mover issues automáticamente:

- Cuando creas un PR asociado, el issue puede moverse a "In Review"
- Cuando haces merge, el issue se cierra y va a "Done"

**Configurar automatización**:

1. En el Project, haz clic en "⋯" → "Workflows"
2. Activa las automatizaciones que necesites

---

## Sección 10: Metodología Agile y Planificación

### Cronograma Detallado del Proyecto

#### Distribución por Semanas

**Semanas 1-2: Especificaciones y Configuración**

- Definir especificaciones
- Crear casos de uso
- Configurar proyecto y herramientas
- Configurar GitHub y Scrum Board
- Crear historias de usuario

**Semanas 3-4: Desarrollo Básico (Fase 1: LocalStorage)**

- Implementar registro y autenticación
- Implementar visualización de módulos
- Implementar gestión básica de tareas
- Usar LocalStorage para persistencia

**Semanas 5-6: Funcionalidades Avanzadas**

- Implementar filtrado y ordenación
- Mejorar interfaz de usuario
- Añadir validaciones
- Testing y corrección de bugs

**Semana 7: Migración a API (Fase 2)**

- Crear API con Express
- Configurar MongoDB
- Migrar ORM a usar API
- Despliegue y documentación final

#### Planificación de Entregas por Sprint

**Sprint 1 (Semanas 1-2)**:

- Entregable: Especificaciones completas, proyecto configurado, historias creadas

**Sprint 2 (Semanas 3-4)**:

- Entregable: Aplicación funcional con LocalStorage, registro y autenticación

**Sprint 3 (Semanas 5-6)**:

- Entregable: Funcionalidades completas, filtrado, ordenación

**Sprint 4 (Semana 7)**:

- Entregable: API funcionando, migración completada

### Roles en Parejas

#### Organización del Trabajo

**Cada pareja desarrolla su propio proyecto**. Para evitar conflictos y potenciar el trabajo en equipo:

- **Cada miembro se encarga de una historia diferente**: Esto permite trabajar en paralelo sin conflictos de Git
- **Cada uno crea su propia rama**: `feature/historia-miembro1` y `feature/historia-miembro2`
- **Revisión cruzada**: Cada miembro revisa el código del otro antes de hacer merge
- **Comunicación constante**: Sobre el progreso, dependencias y decisiones técnicas

#### Driver/Navigator (Piloto/Copiloto) - Cuando trabajan juntos

Cuando trabajan juntos en la misma historia o para revisar código:

**Driver (Piloto)**:

- Escribe el código
- Maneja el teclado
- Implementa lo que el Navigator sugiere

**Navigator (Copiloto)**:

- Revisa el código mientras se escribe
- Sugiere mejoras
- Detecta errores
- Planifica los siguientes pasos

#### Rotación de Roles

**Recomendación**: Cuando trabajan juntos, rotar cada 15-30 minutos o cuando se complete una tarea pequeña.

**Beneficios**:

- Ambas personas participan activamente
- Se aprende tanto escribiendo como revisando
- Se evita que una persona domine la sesión

#### Mejores Prácticas

- **Trabajo en historias diferentes**: Cada miembro trabaja en su propia historia para evitar conflictos
- **Comunicación constante**: Hablar sobre el progreso, dependencias y decisiones técnicas
- **Revisión de código**: Revisar el código del compañero antes de hacer merge
- **Preguntas frecuentes**: Si algo no está claro, preguntar
- **Respeto mutuo**: Escuchar las sugerencias y opiniones del otro

### Sprints y Duración Sugerida

#### Organización en Sprints

**Duración**: 1-2 semanas por sprint (según el cronograma de 6-7 semanas)

**Sprint 1**: 2 semanas (Semanas 1-2)
**Sprint 2**: 2 semanas (Semanas 3-4)
**Sprint 3**: 2 semanas (Semanas 5-6)
**Sprint 4**: 1 semana (Semana 7)

#### Planificación de Sprints

**Al inicio de cada sprint**:

1. **Sprint Planning**:

   - Revisar historias del backlog
   - Seleccionar historias para el sprint
   - Estimar tiempo de cada historia
   - Asignar historias a parejas

2. **Definir Objetivos del Sprint**:

   - ¿Qué queremos lograr este sprint?
   - ¿Qué funcionalidades son prioritarias?

3. **Crear Milestone en GitHub**:
   - Asociar issues con el milestone del sprint

#### Distribución de Historias de Usuario por Sprint

**Sprint 1**:

- Historia: Configuración del proyecto
- Historia: Crear estructura base
- Historia: Configurar GitHub y Scrum Board

**Sprint 2**:

- Historia: Registro de estudiante
- Historia: Autenticación
- Historia: Visualización de módulos (usuario no registrado)
- Historia: Visualización de módulos propios (estudiante)

**Sprint 3**:

- Historia: Gestión de tareas (CRUD)
- Historia: Estados de tareas
- Historia: Filtrado y ordenación
- Historia: Visualización de notas

**Sprint 4**:

- Historia: Crear API con Express
- Historia: Configurar MongoDB
- Historia: Migrar ORM a API
- Historia: Despliegue

#### Estimación de Tiempo por Historia

Usa una escala simple:

- **XS (Extra Small)**: 1-2 horas
- **S (Small)**: 3-4 horas
- **M (Medium)**: 5-6 horas
- **L (Large)**: 7-9 horas
- **XL (Extra Large)**: 10+ horas (considerar dividir)

**Ejemplo de estimación**:

- Registro de estudiante: M (5-6 horas)
- Autenticación: S (3-4 horas)
- Lista de módulos: S (3-4 horas)
- CRUD de tareas: L (7-9 horas)

### Daily Standups (Adaptados al Contexto Académico)

#### Formato Breve para Sesiones de Trabajo

En lugar de daily standups diarios, haz un **standup al inicio de cada sesión de trabajo** (3 horas semanales):

**Preguntas**:

1. ¿Qué hice la última vez?
2. ¿Qué voy a hacer hoy?
3. ¿Hay algún bloqueo o problema?

**Duración**: 5-10 minutos máximo

#### Qué Compartir en Cada Sesión

- **Progreso**: Qué historias se completaron
- **Planes**: Qué se va a trabajar hoy
- **Problemas**: Si hay algo bloqueando el trabajo
- **Ayuda**: Si necesitas ayuda con algo

#### Cómo Mantener el Foco en el Tiempo Disponible

**3 horas semanales**:

- **15 min**: Standup y planificación
- **2h 30min**: Desarrollo activo
- **15 min**: Revisión y commit final

**Consejos**:

- Prioriza tareas pequeñas y completables
- Evita empezar tareas grandes al final de la sesión
- Haz commits frecuentes
- Documenta dónde te quedaste para la próxima sesión

### Retrospectivas

#### Al Final de Cada Sprint

Al finalizar cada sprint, haz una **retrospectiva**:

**Formato simple**:

1. **¿Qué salió bien?**

   - Qué funcionó bien
   - Qué aprendimos
   - Qué nos gustó

2. **¿Qué se puede mejorar?**

   - Qué no funcionó
   - Qué fue difícil
   - Qué nos frustró

3. **Acciones para el próximo sprint**
   - Qué vamos a hacer diferente
   - Qué vamos a mantener

**Duración**: 15-20 minutos

#### Adaptación del Proceso Según el Tiempo Disponible

Si el tiempo es limitado:

- **Retrospectivas más cortas**: 10 minutos
- **Enfocarse en lo esencial**: 1-2 puntos de mejora
- **Aplicar cambios inmediatamente**: No esperar al siguiente sprint

### Definición de "Done" para Cada Historia

Una historia está "Done" cuando:

1. ✅ **Funcionalidad implementada** según criterios de aceptación
2. ✅ **Código revisado** por la pareja
3. ✅ **Código en el repositorio** (rama develop o main)
4. ✅ **Sin errores críticos** en la consola
5. ✅ **Interfaz funcional** y usable
6. ✅ **Datos persistidos** correctamente
7. ✅ **Pull Request cerrado** y mergeado
8. ✅ **Issue cerrado** en GitHub

**Verificación antes de marcar como "Done"**:

- Probar la funcionalidad manualmente
- Verificar que no hay errores en consola
- Revisar que el código sigue las convenciones
- Asegurar que los datos se guardan correctamente

---

## Sección 11: Configuración de Tailwind CSS y Shadcn/ui

### Instalación y Configuración de Tailwind CSS

#### ¿Qué es Tailwind CSS?

**Tailwind CSS** es un framework de CSS utility-first. En lugar de escribir CSS personalizado, usas clases predefinidas para estilizar tus componentes.

**¿Por qué usarlo?**

- Desarrollo más rápido: no necesitas escribir CSS personalizado
- Consistencia: clases estándar en toda la aplicación
- Responsive fácil: clases como `md:`, `lg:` para diferentes tamaños
- Personalizable: puedes configurar colores, espaciados, etc.

**Ejemplo**:

```tsx
// En lugar de escribir CSS:
<div className="card">
  <h2 className="card-title">Título</h2>
</div>

// Usas clases de Tailwind:
<div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold text-gray-800">Título</h2>
</div>
```

#### Instalación y Configuración Inicial

1. **Instala Tailwind CSS y sus dependencias**:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. **Inicializa Tailwind**:

```bash
npx tailwindcss init -p
```

Esto crea dos archivos:

- `tailwind.config.js`: Configuración de Tailwind
- `postcss.config.js`: Configuración de PostCSS

3. **Configura `tailwind.config.js`**:

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

4. **Añade las directivas de Tailwind a tu CSS**:

En `src/index.css`, reemplaza el contenido con:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Reinicia el servidor de desarrollo**:

```bash
npm run dev
```

#### Configuración del Archivo tailwind.config.js

Puedes personalizar Tailwind:

```js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					500: "#3b82f6",
					900: "#1e3a8a",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
```

#### Uso Básico de Clases de Utilidad

**Espaciado**:

```tsx
<div className="p-4 m-2">          {/* padding: 1rem, margin: 0.5rem */}
<div className="px-6 py-4">         {/* padding horizontal y vertical */}
<div className="space-y-4">         {/* espacio vertical entre hijos */}
```

**Colores**:

```tsx
<div className="bg-blue-500">       {/* fondo azul */}
<div className="text-gray-800">    {/* texto gris oscuro */}
<div className="border-red-300">   {/* borde rojo claro */}
```

**Tamaños**:

```tsx
<div className="w-full h-64">       {/* ancho completo, altura 16rem */}
<div className="max-w-md">          {/* ancho máximo */}
```

**Flexbox**:

```tsx
<div className="flex items-center justify-between">
<div className="flex-col space-y-2">
```

**Responsive**:

```tsx
<div className="text-sm md:text-base lg:text-lg">
{/* Pequeño en móvil, base en tablet, grande en desktop */}
```

#### Ejemplos Prácticos

**Tarjeta de módulo**:

```tsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
	<h3 className="text-xl font-bold text-gray-800 mb-2">Nombre del Módulo</h3>
	<p className="text-gray-600">Descripción del módulo</p>
	<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
		Ver Detalles
	</button>
</div>
```

**Formulario**:

```tsx
<form className="space-y-4">
	<div>
		<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
		<input
			type="email"
			className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
	</div>
	<button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
		Enviar
	</button>
</form>
```

### Instalación y Configuración de Shadcn/ui

#### ¿Qué es Shadcn/ui?

**Shadcn/ui** es una biblioteca de componentes construida sobre Radix UI y Tailwind CSS. A diferencia de otras bibliotecas, los componentes se copian directamente a tu proyecto, dándote control total.

**Diferencias con otras bibliotecas**:

- **No es un paquete npm**: Los componentes son código tuyo
- **Totalmente personalizable**: Modificas el código directamente
- **Basado en Radix UI**: Componentes accesibles
- **Estilizado con Tailwind**: Fácil de personalizar

#### Instalación y Configuración Inicial

1. **Instala las dependencias necesarias**:

```bash
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot
```

2. **Instala Shadcn/ui CLI** (opcional, pero recomendado):

```bash
npx shadcn@latest init
```

Esto te preguntará:

- Estilo: Default
- Color base: Slate
- CSS variables: Yes

3. **Crea el archivo de utilidades**:

Crea `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
```

4. **Actualiza `tailwind.config.js`** para incluir las variables de Shadcn/ui:

```js
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				// ... más colores
			},
		},
	},
	plugins: [],
};
```

#### Uso de Componentes Básicos

**Instalar un componente**:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

Esto copia el componente a `src/components/ui/`

**Usar un componente**:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function App() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Módulo</CardTitle>
			</CardHeader>
			<CardContent>
				<Button>Ver Detalles</Button>
			</CardContent>
		</Card>
	);
}
```

#### Personalización de Componentes

Como los componentes son código tuyo, puedes modificarlos directamente:

```tsx
// src/components/ui/button.tsx
// Modifica el componente según necesites
export function Button({ className, ...props }) {
	return (
		<button
			className={cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium",
				// Tus estilos personalizados aquí
				className
			)}
			{...props}
		/>
	);
}
```

#### Ejemplos Prácticos

**Botón con variantes**:

```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Guardar</Button>
<Button variant="destructive">Eliminar</Button>
<Button variant="outline">Cancelar</Button>
```

**Card para módulo**:

```tsx
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

<Card>
	<CardHeader>
		<CardTitle>Desarrollo Web en Entorno Cliente</CardTitle>
	</CardHeader>
	<CardContent>
		<p>Módulo de primer curso</p>
	</CardContent>
	<CardFooter>
		<Button>Ver Tareas</Button>
	</CardFooter>
</Card>;
```

**Input de formulario**:

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div>
	<Label htmlFor="email">Email</Label>
	<Input id="email" type="email" placeholder="tu@email.com" />
</div>;
```

---

## Sección 12: Conceptos Clave de React

### Hooks de React

#### ¿Qué son los Hooks?

Los **Hooks** son funciones especiales de React que te permiten "engancharte" a características de React como el estado y el ciclo de vida.

**Concepto y propósito**:

- Permiten usar estado y otras características sin escribir clases
- Hacen el código más reutilizable y fácil de entender
- Siguen reglas específicas (solo en componentes funcionales, en el nivel superior)

**Reglas de los Hooks**:

1. Solo llamar hooks en el nivel superior (no dentro de condicionales, loops, etc.)
2. Solo llamar hooks desde componentes funcionales o otros hooks personalizados

#### useState: Gestión de Estado Local

**¿Qué es?**
`useState` es un hook que te permite añadir estado a componentes funcionales.

**Sintaxis básica**:

```typescript
import { useState } from "react";

function Componente() {
	const [valor, setValor] = useState(valorInicial);

	return (
		<div>
			<p>{valor}</p>
			<button onClick={() => setValor(nuevoValor)}>Cambiar</button>
		</div>
	);
}
```

**Explicación breve**:

- `useState` devuelve un array con dos elementos
- Primer elemento: el valor actual del estado
- Segundo elemento: función para actualizar el estado
- Cuando actualizas el estado, React re-renderiza el componente

**Ejemplo práctico en el contexto del proyecto**:

```typescript
import { useState } from "react";

function TareaForm() {
	const [titulo, setTitulo] = useState("");
	const [descripcion, setDescripcion] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Guardar tarea con titulo y descripcion
		console.log({ titulo, descripcion });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={titulo}
				onChange={(e) => setTitulo(e.target.value)}
				placeholder="Título"
			/>
			<textarea
				value={descripcion}
				onChange={(e) => setDescripcion(e.target.value)}
				placeholder="Descripción"
			/>
			<button type="submit">Guardar</button>
		</form>
	);
}
```

#### useEffect: Efectos Secundarios y Ciclo de Vida

**¿Qué es?**
`useEffect` te permite ejecutar código después de que el componente se renderiza o cuando cambian ciertas dependencias.

**Sintaxis básica**:

```typescript
import { useEffect } from "react";

function Componente() {
	useEffect(() => {
		// Código que se ejecuta después del render
		return () => {
			// Cleanup (opcional)
		};
	}, [dependencias]); // Array de dependencias
}
```

**Explicación breve**:

- Se ejecuta después de cada render por defecto
- El array de dependencias controla cuándo se ejecuta
- Si el array está vacío `[]`, se ejecuta solo una vez (al montar)
- La función de retorno (cleanup) se ejecuta antes del siguiente efecto o al desmontar

**Dependencias y cleanup**:

```typescript
useEffect(() => {
	// Este código se ejecuta cuando 'id' cambia
	fetchDatos(id);

	return () => {
		// Cleanup: se ejecuta antes del siguiente efecto o al desmontar
		// Útil para cancelar peticiones, limpiar timers, etc.
	};
}, [id]); // Solo se ejecuta si 'id' cambia
```

**Ejemplo práctico en el contexto del proyecto**:

```typescript
import { useState, useEffect } from "react";

function ModuloList() {
	const [modulos, setModulos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Cargar módulos al montar el componente
		async function cargarModulos() {
			setLoading(true);
			const datos = await obtenerModulos(); // Función del ORM
			setModulos(datos);
			setLoading(false);
		}

		cargarModulos();
	}, []); // Solo se ejecuta una vez al montar

	if (loading) return <div>Cargando...</div>;

	return (
		<div>
			{modulos.map((modulo) => (
				<div key={modulo.id}>{modulo.nombre}</div>
			))}
		</div>
	);
}
```

#### useContext: Compartir Estado entre Componentes

**¿Qué es?**
`useContext` te permite acceder a un contexto de React, permitiendo compartir datos entre componentes sin pasar props manualmente.

**Explicación breve**:

- Útil cuando varios componentes necesitan los mismos datos
- Evita "prop drilling" (pasar props a través de muchos componentes)
- Crea un contexto, provee valores, y consume en cualquier componente hijo

**Cuándo usarlo**:

- Cuando varios componentes necesitan el mismo estado
- Para datos globales como usuario autenticado, tema, etc.
- Cuando pasar props se vuelve tedioso

**Ejemplo práctico en el contexto del proyecto**:

```typescript
// 1. Crear el contexto
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// 2. Proveer el contexto
function AuthProvider({ children }: any) {
	const [usuario, setUsuario] = useState(null);

	return (
		<AuthContext.Provider value={{ usuario, setUsuario }}>
			{children}
		</AuthContext.Provider>
	);
}

// 3. Usar el contexto
function ComponenteHijo() {
	const { usuario, setUsuario } = useContext(AuthContext);

	return <div>Usuario: {usuario?.nombre}</div>;
}

// 4. Envolver la app
function App() {
	return (
		<AuthProvider>
			<ComponenteHijo />
		</AuthProvider>
	);
}
```

#### useReducer: Gestión de Estado Complejo

**¿Qué es?**
`useReducer` es una alternativa a `useState` para gestionar estado complejo. Usa un patrón similar a Redux.

**Explicación breve**:

- Útil cuando el estado tiene lógica compleja
- Usa un reducer (función) para actualizar el estado
- Más predecible que múltiples `useState`

**Cuándo usarlo vs useState**:

- **useState**: Estado simple, actualizaciones directas
- **useReducer**: Estado complejo, múltiples subvalores, lógica de actualización compleja

**Ejemplo práctico**:

```typescript
import { useReducer } from "react";

function reducer(state: any, action: any) {
	switch (action.type) {
		case "add":
			return { ...state, tareas: [...state.tareas, action.tarea] };
		case "delete":
			return {
				...state,
				tareas: state.tareas.filter((t: any) => t.id !== action.id),
			};
		default:
			return state;
	}
}

function TareaManager() {
	const [state, dispatch] = useReducer(reducer, { tareas: [] });

	return (
		<div>
			<button
				onClick={() => dispatch({ type: "add", tarea: { id: 1, nombre: "Nueva" } })}
			>
				Añadir
			</button>
		</div>
	);
}
```

#### Hooks Personalizados

**Concepto y beneficios**:

- Son funciones que usan otros hooks
- Permiten reutilizar lógica entre componentes
- Hacen el código más limpio y organizado

**Ejemplo práctico**:

```typescript
// Hook personalizado
function useLocalStorage(key: string, initialValue: any) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	const setValue = (value: any) => {
		try {
			setStoredValue(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
}

// Uso
function Componente() {
	const [usuario, setUsuario] = useLocalStorage("usuario", null);
	// ...
}
```

### Conceptos Adicionales de React

#### Componentes Funcionales vs Componentes de Clase

**Componentes Funcionales** (recomendado):

```typescript
function MiComponente(props: any) {
	return <div>{props.nombre}</div>;
}
```

**Componentes de Clase** (legacy):

```typescript
class MiComponente extends React.Component {
	render() {
		return <div>{this.props.nombre}</div>;
	}
}
```

**Recomendación**: Usa componentes funcionales. Son más simples y modernos.

#### Props y Prop Drilling

**Props**: Datos que se pasan de un componente padre a un hijo.

```typescript
function Padre() {
	const nombre = "Juan";
	return <Hijo nombre={nombre} />;
}

function Hijo({ nombre }: any) {
	return <div>{nombre}</div>;
}
```

**Prop Drilling**: Pasar props a través de muchos componentes. Si es excesivo, considera usar Context.

#### Renderizado Condicional

Mostrar contenido según condiciones:

```typescript
function Componente({ usuario }: any) {
	if (!usuario) {
		return <div>No hay usuario</div>;
	}

	return (
		<div>
			{usuario.nombre && <p>Hola, {usuario.nombre}</p>}
			{usuario.esAdmin ? <AdminPanel /> : <UserPanel />}
		</div>
	);
}
```

#### Listas y Keys

Al renderizar listas, siempre usa una `key` única:

```typescript
function ListaModulos({ modulos }: any) {
	return (
		<div>
			{modulos.map((modulo: any) => (
				<div key={modulo.id}>{modulo.nombre}</div>
			))}
		</div>
	);
}
```

**Importante**: La `key` debe ser única y estable. Usa IDs, no índices.

#### Eventos y Manejo de Formularios

**Eventos**:

```typescript
function Boton() {
	const handleClick = (e: any) => {
		e.preventDefault();
		console.log("Click!");
	};

	return <button onClick={handleClick}>Clickeame</button>;
}
```

**Formularios**:

```typescript
function Formulario() {
	const [valor, setValor] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(valor);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={valor} onChange={(e) => setValor(e.target.value)} />
			<button type="submit">Enviar</button>
		</form>
	);
}
```

#### Lifting State Up

Cuando varios componentes necesitan el mismo estado, "levántalo" al componente padre común:

```typescript
function App() {
	const [filtro, setFiltro] = useState("");

	return (
		<div>
			<Filtro filtro={filtro} setFiltro={setFiltro} />
			<Lista filtro={filtro} />
		</div>
	);
}
```

---

## Sección 13: Arquitectura de Datos y Persistencia

### Fase 1: Persistencia Local con LocalStorage

Define la estructura de datos (Usuario, Módulo, Tarea) e implementa funciones CRUD con LocalStorage.

#### Estructura de Datos Importante

**Usuario**:

```typescript
interface Usuario {
	id: string;
	nombre: string;
	email: string;
	password: string;
	cicloFormativo: string;
	rol: "estudiante" | "administrador";
}
```

**Módulo (definición general - gestionado por administrador)**:

```typescript
interface Modulo {
	id: string;
	nombre: string;
	curso: 1 | 2;
	cicloFormativo: string;
}
```

**Módulo del Estudiante** (añadido automáticamente al registrarse):

```typescript
interface ModuloEstudiante {
	id: string;
	moduloId: string; // Referencia al módulo
	estudianteId: string;
	notas: {
		trimestre1?: number;
		trimestre2?: number;
		trimestre3?: number;
		ordinaria?: number;
		extraordinaria?: number;
	};
	estado: "aprobado" | "cursando" | "no-cursa" | "pendiente";
}
```

**Tarea**:

```typescript
interface Tarea {
	id: string;
	moduloId: string;
	estudianteId: string;
	titulo: string;
	descripcion: string;
	fechaCreacion: string;
	fechaVencimiento?: string;
	estado: "pendiente" | "en-progreso" | "completada";
	nota?: number; // Gestionada por el estudiante
}
```

**Puntos clave**:

- Al registrarse un estudiante, se añaden automáticamente todos los módulos de su ciclo formativo como `ModuloEstudiante`
- El estudiante gestiona sus propias notas de módulos (para cada evaluación) y tareas
- El estudiante puede cambiar el estado de sus módulos
- El administrador gestiona los módulos generales para cada ciclo

Crea una capa ORM que abstraiga el acceso a datos, permitiendo cambiar la implementación sin modificar los componentes.

### Fase 2: Migración a API REST

Crea una API con Express y MongoDB. Implementa el ORM usando fetch para conectar a la API. Usa un factory para elegir entre LocalStorage o API según configuración.

---

## Sección 14: Desarrollo del Proyecto

Organiza los componentes React en carpetas (ui/, layout/, auth/, modulos/, tareas/). Desarrolla componentes con TypeScript usando tipado ligero inicialmente. Aplica Tailwind CSS para estilos y usa componentes de Shadcn/ui. Integra el ORM en los componentes.

---

## Sección 15: Recursos y Referencias

### Enlaces Útiles

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Vite**: https://vite.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Shadcn/ui**: https://ui.shadcn.com/
- **Git**: https://git-scm.com/doc
- **GitHub**: https://docs.github.com/

### Herramientas Recomendadas

- Visual Studio Code
- React Developer Tools
- GitHub Desktop (opcional)

---

## Conclusión

Esta documentación te ha guiado a través del desarrollo completo de una aplicación React usando metodología Agile. Has aprendido configuración, Git/GitHub, metodología Agile, desarrollo con React, y arquitectura de datos.

Recuerda que el aprendizaje es un proceso continuo. Sigue practicando y consultando la documentación cuando lo necesites.

¡Buena suerte con tu proyecto!

---

_Documentación creada para el curso de Desarrollo de Aplicaciones Web_
