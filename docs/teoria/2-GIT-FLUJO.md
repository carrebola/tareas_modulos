# 🐙 Git, GitHub y Flujo de Trabajo

Este documento explica cómo gestionamos el código fuente. El objetivo es trabajar en equipo sin sobrescribir el trabajo de los demás y manteniendo un historial limpio.

---

## 1. Conceptos Fundamentales

### Repositorio (Repo)
Es tu carpeta de proyecto, pero Git vigila cada cambio.
*   **Local**: La copia en tu ordenador.
*   **Remoto (Origin)**: La copia en GitHub (la "nube").

### Commit (Guardado)
Es una "foto" del código en un momento exacto.
*   No guardes "por si acaso". Guarda cuando tengas una **unidad de trabajo lógica** hecha (ej: "He terminado el diseño del botón").
*   Cada commit tiene un mensaje que debe explicar **qué** hiciste.

### Rama (Branch)
Es una línea temporal paralela.
*   **main**: La realidad oficial. El código que funciona.
*   **feature/mi-tarea**: Mi realidad alternativa donde estoy creando algo nuevo. Si rompo algo aquí, no afecta a `main`.

---

## 2. Nuestro Flujo de Trabajo (Workflow)

Usamos una variante simplificada de **Gitflow**. Sigue estos pasos rigurosamente para cada tarea:

### Paso 1: Actualizar
Antes de empezar nada, asegúrate de tener la última versión de la realidad oficial.
```bash
git checkout main
git pull origin main
```

### Paso 2: Crear Rama
Crea una rama para tu tarea específica. Usa nombres descriptivos.
```bash
# Estructura: tipo/descripcion-corta
git checkout -b feature/login-usuario
git checkout -b fix/error-calculo-notas
git checkout -b docs/actualizar-readme
```

### Paso 3: Trabajar y Confirmar (Commit)
Haces cambios en tus archivos. Git los detecta.
1.  **Staging (`git add`)**: Eliges qué archivos quieres guardar en la foto.
    ```bash
    git add .  # Añade todo lo modificado
    ```
2.  **Commit**: Haces la foto y le pones etiqueta.
    ```bash
    git commit -m "feat: crea formulario de login básico"
    ```

### Paso 4: Publicar (Push)
Subes tu realidad alternativa a la nube para que otros la vean.
```bash
git push origin feature/login-usuario
```

### Paso 5: Integrar (Pull Request)
Vas a GitHub y abres una **Pull Request (PR)**.
*   Estás diciendo: "He terminado mi tarea en `feature/login-usuario`, por favor, revisadla y fusionadla con `main`".
*   Tu compañero revisa el código. Si todo está bien, se hace **Merge**.

---

## 3. Conventional Commits (Mensajes Profesionales)

No escribas mensajes como "cambios", "asdf" o "arreglado". Usa esta convención para que el historial sea legible:

*   **feat**: Una nueva funcionalidad (feature).
    > `feat: añade componente de tarjeta de modulo`
*   **fix**: Arreglar un error (bug).
    > `fix: corrige cálculo de media incorrecto`
*   **docs**: Cambios solo en documentación.
    > `docs: actualiza instrucciones de instalación`
*   **style**: Cambios de formato (espacios, puntos y coma) que no afectan la lógica.
*   **refactor**: Cambiar código para mejorarlo sin cambiar su comportamiento.

---

## 4. Guía de Emergencia

### "He hecho un lío y quiero volver al último commit"
⚠️ Esto borra tus cambios no guardados.
```bash
git checkout .
```

### "¿En qué rama estoy?"
```bash
git branch
# O simplemente:
git status
```

### "Git me dice que hay conflictos"
Esto pasa cuando dos personas tocan la misma línea de código.
1.  Abre los archivos con conflicto (VS Code los marca en rojo).
2.  Verás algo como:
    ```
    <<<<<<< HEAD
    Código de mi rama
    =======
    Código que llegó de la otra rama
    >>>>>>> main
    ```
3.  Borra las marcas y deja el código como debería quedar finalmente.
4.  Guarda, haz `git add .` y `git commit`.

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

