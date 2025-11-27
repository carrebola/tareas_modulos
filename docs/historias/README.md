# Historias de Usuario

Esta carpeta contiene las definiciones detalladas de cada historia de usuario del proyecto, con tareas específicas para facilitar la creación del GitHub Project y el seguimiento del progreso.

## Estructura

Cada archivo de historia incluye:
- Descripción de la historia (Como/Quiero/Para)
- Criterios de aceptación
- Lista detallada de tareas con checkboxes
- Notas técnicas
- Estimación de tiempo
- Prioridad

## Historias Disponibles

### Historias de Configuración Inicial (Hacer Primero)

0. **[Historia 0: Planificación de Estructuras de Datos](historia-00-planificacion-estructuras-datos.md)**
   - Definición de interfaces TypeScript
   - Estructura de LocalStorage
   - Diseño del ORM
   - Datos de ejemplo
   - Prioridad: **CRÍTICA**
   - Estimación: 4-5 horas (S-M)

0b. **[Historia 0b: Configuración del Entorno Básico](historia-00b-configuracion-entorno-basico.md)**
   - Configuración de React Router
   - Layout, Header, Navegación
   - Componentes base
   - Contexto de autenticación (estructura)
   - Prioridad: **CRÍTICA**
   - Estimación: 5-6 horas (M)

### Historias de Funcionalidades

1. **[Historia 1: Visualización de Módulos (Usuario No Registrado)](historia-01-visualizacion-modulos-no-registrado.md)**
   - Selector de ciclos y visualización de módulos
   - Prioridad: Alta
   - Estimación: 3-4 horas (S)

2. **[Historia 2: Registro de Estudiante](historia-02-registro-estudiante.md)**
   - Formulario de registro con selección de ciclo
   - Añade automáticamente módulos al estudiante
   - Prioridad: Alta
   - Estimación: 5-6 horas (M)

3. **[Historia 3: Autenticación](historia-03-autenticacion.md)**
   - Login y logout de estudiantes
   - Gestión de sesión
   - Prioridad: Alta
   - Estimación: 4-5 horas (S-M)

4. **[Historia 4: Visualización de Módulos Propios](historia-04-visualizacion-modulos-propios.md)**
   - Vista de módulos del estudiante
   - Filtrado y ordenación básica
   - Prioridad: Alta
   - Estimación: 4-5 horas (S-M)

5. **[Historia 5: Gestión de Tareas](historia-05-gestion-tareas.md)**
   - CRUD completo de tareas
   - Prioridad: Alta
   - Estimación: 7-9 horas (L)

6. **[Historia 6: Estados de Tareas](historia-06-estados-tareas.md)**
   - Cambio de estado de tareas
   - Indicadores visuales
   - Prioridad: Media-Alta
   - Estimación: 3-4 horas (S)

7. **[Historia 7: Gestión de Notas de Módulos](historia-07-gestion-notas-modulos.md)**
   - Notas por evaluación (trimestres, ordinaria, extraordinaria)
   - Cambio de estado de módulos
   - Prioridad: Alta
   - Estimación: 5-6 horas (M)

8. **[Historia 7b: Gestión de Notas de Tareas](historia-07b-gestion-notas-tareas.md)**
   - Añadir y modificar notas de tareas
   - Prioridad: Media
   - Estimación: 3-4 horas (S)

9. **[Historia 8: Filtrado y Ordenación](historia-08-filtrado-ordenacion.md)**
   - Filtros y ordenación avanzados para módulos y tareas
   - Prioridad: Media
   - Estimación: 5-6 horas (M)

10. **[Historia 9: Gestión de Módulos por Administrador](historia-09-gestion-modulos-administrador.md)**
    - CRUD de módulos para administradores
    - Sincronización con estudiantes
    - Prioridad: Media
    - Estimación: 6-8 horas (M-L)

## Orden de Implementación Recomendado

1. **Historia 0**: Planificación de Estructuras de Datos (CRÍTICA - hacer primero)
2. **Historia 0b**: Configuración del Entorno Básico (CRÍTICA - hacer después de Historia 0)
3. **Historias 1-9**: Funcionalidades (seguir el orden sugerido o adaptar según necesidades)

## Uso con GitHub Projects

1. **Crear Issues desde las Historias**:
   - Cada historia puede convertirse en un Issue de GitHub
   - Copiar la descripción y criterios de aceptación

2. **Crear Subtareas**:
   - Cada tarea de la lista puede ser una subtarea o checklist en el Issue
   - Usar los checkboxes para hacer seguimiento

3. **Asignar a Parejas**:
   - Cada miembro de la pareja trabaja en historias diferentes
   - Asignar issues a cada miembro
   - **Nota**: Las historias 0 y 0b pueden hacerse juntos o asignarse a un miembro

4. **Seguimiento de Progreso**:
   - Marcar tareas completadas en los Issues
   - Mover issues en el Scrum Board según progreso

## Convenciones

- **Estimaciones**: XS (1-2h), S (3-4h), M (5-6h), L (7-9h), XL (10+h)
- **Prioridades**: Alta, Media-Alta, Media, Baja
- **Checkboxes**: Usar `- [ ]` para tareas pendientes, `- [x]` para completadas

## Notas

- Las historias están ordenadas por prioridad sugerida
- Cada pareja puede adaptar el orden según sus necesidades
- Las estimaciones son orientativas y pueden variar según la experiencia del equipo

