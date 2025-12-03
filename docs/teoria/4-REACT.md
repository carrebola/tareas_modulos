# ⚛️ React: Fundamentos y Hooks

React es una librería para construir interfaces de usuario dividiéndolas en **Componentes**.

---

## 1. Componentes y JSX

Un componente es una función que devuelve lo que parece HTML, pero en realidad es **JSX** (JavaScript XML).

```tsx
// Componente Padre
function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Saludo nombre="Ana" />
      <Saludo nombre="Carlos" />
    </div>
  );
}

// Componente Hijo (recibe Props)
// Props: Son los "parámetros" del componente
function Saludo({ nombre }: { nombre: string }) {
  return <p className="text-blue-500">Hola, {nombre}!</p>;
}
```

**Reglas de JSX**:
*   Debes cerrar todas las etiquetas (`<br />`, `<img />`).
*   Debes devolver un solo elemento padre (o usar un Fragmento `<>...</>`).
*   `class` se escribe `className` (porque `class` es reservado en JS).

---

## 2. El Estado (`useState`)

El "estado" es la memoria del componente. Si una variable normal cambia, la pantalla NO se actualiza. Si el estado cambia, React **re-renderiza** (pinta de nuevo) el componente.

```tsx
import { useState } from 'react';

function Contador() {
  // [valorActual, funcionParaCambiarlo] = useState(valorInicial)
  const [cuenta, setCuenta] = useState(0);

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Has hecho click {cuenta} veces
    </button>
  );
}
```

**Importante**:
*   Nunca modifiques el estado directamente (`cuenta = 5` ❌). Usa siempre `setCuenta(5)`.
*   Las actualizaciones de estado son asíncronas (no ocurren en la línea siguiente inmediatamente).

---

## 3. Efectos Secundarios (`useEffect`)

Sirve para sincronizar tu componente con sistemas externos (API, temporizadores, DOM).

```tsx
import { useEffect } from 'react';

function Reloj() {
  useEffect(() => {
    // Esto se ejecuta cuando el componente se monta (nace)
    console.log("Reloj montado");

    // Función de limpieza (opcional)
    return () => {
      console.log("Reloj desmontado (muere)");
    };
  }, []); // El array vacío [] significa "solo una vez al principio"
}
```

### Array de Dependencias
El segundo argumento controla **cuándo** se ejecuta el efecto.

*   `useEffect(fn)` (sin array): Se ejecuta en **cada render** (peligroso).
*   `useEffect(fn, [])`: Se ejecuta **solo al montar**.
*   `useEffect(fn, [id])`: Se ejecuta al montar Y **cada vez que `id` cambie**.

---

## 4. Contexto (`useContext`)

Sirve para pasar datos "teletransportándolos" a través del árbol de componentes sin pasarlos manualmente prop por prop (Prop Drilling).
Lo usaremos para el **Usuario Autenticado**.

1.  **Crear Contexto**: `const AuthContext = createContext(...)`
2.  **Proveer**: `<AuthContext.Provider value={usuario}> ... </AuthContext.Provider>`
3.  **Consumir**: `const usuario = useContext(AuthContext)`

---

## 5. Renderizado Condicional y Listas

### Condicional
Usamos el operador ternario (`? :`) o el AND lógico (`&&`).

```tsx
function Perfil({ usuario }: { usuario?: Usuario }) {
  return (
    <div>
      {usuario ? (
        <h1>Bienvenido, {usuario.nombre}</h1>
      ) : (
        <button>Iniciar Sesión</button>
      )}

      {/* Mostrar solo si es admin */}
      {usuario?.rol === 'admin' && <button>Panel Admin</button>}
    </div>
  );
}
```

### Listas
Usamos `.map()` para convertir un array de datos en un array de elementos JSX.
**Siempre** necesitas una `key` única.

```tsx
function ListaTareas({ tareas }: { tareas: Tarea[] }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.titulo}
        </li>
      ))}
    </ul>
  );
}
```

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

