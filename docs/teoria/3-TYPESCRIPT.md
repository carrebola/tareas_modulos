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

### ¿Qué problema resuelven?

Imagina que quieres crear una función que devuelva el primer elemento de un array. Sin genéricos, tendrías que crear una función diferente para cada tipo:

```ts
// ❌ MAL: Tener que repetir código para cada tipo
function primerString(arr: string[]): string {
  return arr[0];
}

function primerNumber(arr: number[]): number {
  return arr[0];
}

function primerUsuario(arr: Usuario[]): Usuario {
  return arr[0];
}
// ... y así para cada tipo que necesites
```

**Los genéricos permiten escribir la función UNA VEZ y que funcione con CUALQUIER tipo**, manteniendo la seguridad de tipos.

### ¿Cómo funcionan?

Un genérico es como una **"variable de tipo"**. Se escribe entre `< >` y puede llamarse como quieras (normalmente `T`, `U`, `V` o nombres descriptivos).

```ts
// ✅ BIEN: Una sola función para todos los tipos
function primero<T>(arr: T[]): T {
  return arr[0];
}

// Ahora funciona con cualquier tipo:
const texto = primero<string>(["a", "b", "c"]); // TypeScript sabe que es string
const numero = primero<number>([1, 2, 3]);       // TypeScript sabe que es number
const usuario = primero<Usuario>([user1, user2]); // TypeScript sabe que es Usuario
```

### Ejemplo práctico: Array genérico

```ts
// Función que devuelve el último elemento de cualquier array
function ultimo<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

// TypeScript "recuerda" el tipo que le pasas:
const ultimaNota = ultimo<number>([8, 9, 7]); // TypeScript sabe que es number | undefined
const ultimoUsuario = ultimo<Usuario>([user1, user2]); // TypeScript sabe que es Usuario | undefined
```

### Ejemplo práctico: Interfaces genéricas

```ts
// Una "caja" que puede guardar cualquier tipo, pero una vez que defines qué guarda,
// TypeScript recuerda ese tipo específico
interface Caja<T> {
  contenido: T;
  abrir(): T; // Devuelve el tipo que guarda
}

// Cuando creas una caja, le dices qué tipo guarda:
const cajaTexto: Caja<string> = {
  contenido: "Hola",
  abrir() { return this.contenido; } // TypeScript sabe que devuelve string
};

const cajaNumero: Caja<number> = {
  contenido: 42,
  abrir() { return this.contenido; } // TypeScript sabe que devuelve number
};

// TypeScript previene errores:
const texto = cajaTexto.abrir(); // ✅ TypeScript sabe que es string
// texto.toUpperCase(); // ✅ Funciona porque TypeScript sabe que es string
// texto.toFixed(); // ❌ ERROR: toFixed() no existe en string
```

### Ejemplo real: React useState

En React, `useState` usa genéricos para saber qué tipo de dato guardas:

```ts
// Sin genérico (TypeScript no sabe qué guardas):
const [nombre, setNombre] = useState(null); // nombre es any ❌

// Con genérico (TypeScript sabe que es string):
const [nombre, setNombre] = useState<string>("");
// Ahora TypeScript sabe que:
// - nombre es string
// - setNombre solo acepta string
// - Si intentas setNombre(123), da ERROR ✅

// Con objeto:
const [usuario, setUsuario] = useState<Usuario | null>(null);
// TypeScript sabe que usuario puede ser Usuario o null
```

### Ejemplo real: Nuestro ORM

En nuestro proyecto, el ORM usa genéricos para trabajar con diferentes tipos de datos:

```ts
// Definimos un repositorio genérico que funciona con cualquier tipo
interface Repository<T> {
  getAll(): Promise<T[]>;           // Devuelve array del tipo T
  getById(id: string): Promise<T | undefined>; // Devuelve T o undefined
  create(item: Omit<T, 'id'>): Promise<T>;     // Crea un T
}

// Ahora creamos repositorios específicos:
const usuarioRepo: Repository<Usuario> = {
  getAll() { /* ... */ }, // TypeScript sabe que devuelve Usuario[]
  getById(id) { /* ... */ }, // TypeScript sabe que devuelve Usuario | undefined
};

const tareaRepo: Repository<Tarea> = {
  getAll() { /* ... */ }, // TypeScript sabe que devuelve Tarea[]
  getById(id) { /* ... */ }, // TypeScript sabe que devuelve Tarea | undefined
};
```

### Resumen

- **Genéricos** = "Variables de tipos" que se definen con `<T>`
- Permiten escribir código **una vez** que funciona con **múltiples tipos**
- TypeScript **recuerda** el tipo específico que usas
- Muy comunes en: React hooks (`useState<T>`), arrays, funciones reutilizables, ORMs

---
[⬅️ Volver al Manual del Alumno](../MANUAL_ALUMNO.md)

