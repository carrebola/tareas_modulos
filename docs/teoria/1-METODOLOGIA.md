# 🔄 Metodología Agile y Scrum

Este documento explica **cómo trabajamos**. En el desarrollo de software moderno, no escribimos código a lo loco; seguimos una estructura que nos permite adaptarnos a cambios y entregar valor constantemente.

---

## 1. ¿Qué es Agile?

Tradicionalmente (modelo "Cascada"), se pasaban meses planificando, meses programando y meses probando. Si había un error en el diseño inicial, se descubría 6 meses tarde y costaba millones arreglarlo.

**Agile** cambia eso. En lugar de intentar predecir el futuro, trabajamos en ciclos cortos.
*   **Iterativo**: Hacemos una versión básica, y luego la mejoramos una y otra vez.
*   **Incremental**: Añadimos funcionalidades pieza a pieza.
*   **Adaptable**: Si descubrimos que algo no funciona, cambiamos el rumbo en el siguiente ciclo.

---

## 2. Scrum: Nuestro Marco de Trabajo

Scrum es una implementación de Agile. Divide el tiempo en bloques llamados **Sprints**.

### 2.1 El Sprint
Es un periodo de tiempo fijo (en este curso: **1 o 2 semanas**) durante el cual el equipo trabaja para completar una cantidad específica de trabajo.
*   **Regla de oro**: Una vez empieza el sprint, no se añaden tareas nuevas sorpresa. Nos enfocamos en terminar lo que prometimos.

### 2.2 Artefactos (Herramientas)

#### 📜 Product Backlog (La lista de deseos)
Es la lista de **todo** lo que hay que hacer en el proyecto, ordenado por prioridad.
*   En nuestro caso: Son todas las **Historias de Usuario** que están en la carpeta `docs/historias/`.

#### 🏃 Sprint Backlog (La lista de la semana)
Son las tareas que hemos elegido hacer **solo en este sprint**.

#### 📋 Tablero Kanban (El Board)
Es la herramienta visual para ver el progreso.
*   **To Do**: Tareas seleccionadas pero no empezadas.
*   **In Progress**: Alguien está trabajando en ello activamente.
*   **In Review**: El código está escrito, pero necesita revisión (Pull Request).
*   **Done**: Completado, probado y aceptado.

### 2.3 Eventos (Reuniones)

#### 📅 Sprint Planning (Planificación)
*   **Cuándo**: Al inicio del sprint.
*   **Qué hacemos**: Miramos el Product Backlog, cogemos las tareas más importantes que creemos que podemos terminar en una semana, y las pasamos al Sprint Backlog.

#### ☕ Daily Standup (Reunión diaria)
*   **Cuándo**: Al inicio de cada sesión de trabajo.
*   **Duración**: Máximo 15 minutos (de pie).
*   **Qué se dice**:
    1.  ¿Qué conseguí terminar ayer?
    2.  ¿Qué voy a hacer hoy?
    3.  **¿Tengo algún bloqueo?** (Necesito ayuda, me falta información, etc.)

#### 🔍 Sprint Review & Retrospective
*   **Cuándo**: Al final del sprint.
*   **Review**: Enseñamos el producto funcionando (Demo).
*   **Retrospective**: Hablamos de **nosotros** como equipo.
    *   ¿Qué salió bien? (ej: "Nos coordinamos bien con Git").
    *   ¿Qué salió mal? (ej: "Subestimamos la dificultad de la base de datos").
    *   ¿Qué vamos a cambiar? (ej: "Haremos commits más pequeños").

---

## 3. Historias de Usuario

No definimos tareas técnicas como "Crear tabla en SQL". Definimos necesidades del usuario.

**Estructura**:
> "Como **[Rol]**, quiero **[Acción/Deseo]**, para **[Beneficio]**".

**Ejemplo**:
> "Como **Estudiante**, quiero **ver mis notas por trimestres**, para **saber si necesito estudiar más para el final**."

### Criterios de Aceptación
Son las condiciones exactas para considerar que la historia está "Done".
*   [ ] Debe mostrar nota del T1, T2 y T3.
*   [ ] Debe calcular la media automáticamente.
*   [ ] Si la media es < 5, debe salir en rojo.

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

