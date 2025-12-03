# 🎨 UI/UX: Tailwind CSS y Shadcn/ui

En este proyecto no escribiremos archivos CSS tradicionales. Usaremos un enfoque moderno basado en **clases utilitarias** y **componentes copiables**.

---

## 1. Tailwind CSS: "Utility-First"

En lugar de escribir una clase `.btn-primary` y definirle 10 propiedades en otro archivo, aplicamos clases predefinidas directamente al HTML.

### ¿Por qué?
*   **Velocidad**: No tienes que inventar nombres de clases.
*   **Mantenimiento**: Si borras el HTML, borras los estilos. El CSS nunca crece infinitamente.
*   **Consistencia**: Usas valores fijos del sistema de diseño (espacios, colores).

### Conceptos Básicos

#### Modelo de Caja (Box Model)
*   `m-4`: Margin de 1rem (16px). `mx-4` (horizontal), `my-4` (vertical), `mt-4` (top).
*   `p-4`: Padding (igual lógica que margin).
*   `w-full`: Width 100%. `w-1/2`: 50%.
*   `h-screen`: Height 100vh.

#### Flexbox
*   `flex`: `display: flex`.
*   `flex-col`: `flex-direction: column`.
*   `items-center`: `align-items: center` (eje cruzado).
*   `justify-center`: `justify-content: center` (eje principal).
*   `gap-4`: Espacio entre elementos.

#### Colores y Texto
*   `bg-blue-500`: Fondo azul tono medio.
*   `text-white`: Texto blanco.
*   `font-bold`: Negrita.
*   `text-xl`: Tamaño de fuente extra grande.

#### Estados
Añades un prefijo para definir cuándo se aplica el estilo.
*   `hover:bg-blue-600`: Al pasar el ratón.
*   `focus:ring-2`: Al hacer foco (input).
*   `disabled:opacity-50`: Cuando está deshabilitado.

#### Responsive
Diseñamos primero para móvil (**Mobile First**) y añadimos prefijos para pantallas más grandes.
*   `w-full md:w-1/2`: En móvil ancho completo, en tablet (md) o superior, mitad de ancho.

```tsx
// Ejemplo: Tarjeta centrada
<div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <h1 className="text-2xl font-bold text-gray-800">Hola Mundo</h1>
  </div>
</div>
```

---

## 2. Shadcn/ui: Componentes Reutilizables

Shadcn **NO es una librería de componentes** (como Bootstrap o Material UI que instalas con npm).
Es una colección de componentes que **copias y pegas** en tu código.

### ¿Qué significa esto?
Tú eres el dueño del código del botón.
*   El componente se instala en `src/components/ui/button.tsx`.
*   Puedes abrir ese archivo y cambiarlo si quieres.
*   Está construido sobre **Radix UI** (que maneja la accesibilidad y lógica compleja) y estilizado con **Tailwind**.

### Cómo se usa

1.  **Añadir un componente** (usando la CLI):
    ```bash
    npx shadcn@latest add button
    npx shadcn@latest add input
    npx shadcn@latest add card
    ```

2.  **Importar y usar**:
    ```tsx
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"

    export function LoginForm() {
      return (
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" />
          <Button variant="default">Entrar</Button>
        </div>
      )
    }
    ```

### Componentes Clave que usaremos
*   **Card**: Para mostrar los módulos.
*   **Badge**: Para mostrar el estado (Aprobado/Pendiente).
*   **Dialog**: Para modales de crear tarea.
*   **Form**: Para validación de formularios (usando react-hook-form).

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

