# 📘 TypeScript: JavaScript con Superpoderes

TypeScript (TS) es JavaScript, pero con **tipos**. Nos obliga a definir qué es cada variable. Esto, que parece más trabajo al principio, nos ahorra horas de buscar errores tontos ("undefined is not a function") después.

---

## 1. Tipos Básicos

En JS, una variable puede ser lo que sea. En TS, definimos qué es.

```ts
// Primitivos
let nombre: string = "Carlos";
let edad: number = 25;
let esEstudiante: boolean = true;

// Arrays
let notas: number[] = [8, 9, 5, 10];
let tags: string[] = ["react", "frontend"];

// Especiales
let cualquiera: any = "hola"; // EVITAR: Desactiva TypeScript
let desconocido: unknown; // Mejor que any, te obliga a comprobar tipo
```

---

## 2. Interfaces y Tipos

Sirven para definir la "forma" de un objeto. Son fundamentales en nuestro proyecto para definir `Usuario`, `Modulo`, etc.

### Interface (Recomendado para objetos)
```ts
interface Usuario {
  id: string;
  nombre: string;
  email: string;
  activo: boolean;
}

const user: Usuario = {
  id: "1",
  nombre: "Ana",
  email: "ana@test.com",
  activo: true
  // Si falta algo o añado una propiedad inventada, TS da error.
};
```

### Type (Más flexible)
```ts
// Definir un objeto (igual que interface)
type Coordenada = {
  x: number;
  y: number;
};

// Union Types (¡Muy útil!)
// Define que una variable solo puede valer unas cosas concretas
type EstadoTarea = "pendiente" | "en-progreso" | "completada";

let estado: EstadoTarea = "pendiente"; // Bien
// estado = "empezada"; // ERROR: "empezada" no es un valor válido
```

### Propiedades Opcionales
A veces un dato puede no estar. Usamos `?`.

```ts
interface Tarea {
  id: string;
  titulo: string;
  nota?: number; // Puede ser un número O undefined
}

const t1: Tarea = { id: "1", titulo: "Práctica" }; // Válido (nota es undefined)
const t2: Tarea = { id: "2", titulo: "Examen", nota: 9 }; // Válido
```

---

## 3. Tipado en Funciones

Debemos decir qué entra y qué sale de una función.

```ts
// (a: numero, b: numero) -> devuelve numero
function sumar(a: number, b: number): number {
  return a + b;
}

// Función que no devuelve nada (void)
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
```

---

## 4. Genéricos (Generics)

Son como "variables de tipos". Permiten crear componentes o funciones que funcionan con varios tipos, pero manteniendo la seguridad.
Lo verás mucho en React (`useState<Tipo>`) o en nuestro ORM (`Repository<T>`).

```ts
// Una caja que puede guardar CUALQUIER cosa (T),
// pero una vez metes algo, recuerda qué es.
interface Caja<T> {
  contenido: T;
}

const cajaDeTexto: Caja<string> = { contenido: "Hola" };
const cajaDeNumero: Caja<number> = { contenido: 10 };
```

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

