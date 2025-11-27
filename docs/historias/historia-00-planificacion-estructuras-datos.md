# Historia 0: Planificación de Estructuras de Datos

## Descripción

**Como** desarrollador  
**Quiero** planificar y definir las estructuras de datos del proyecto  
**Para** tener una base sólida antes de comenzar el desarrollo

## Criterios de Aceptación

- Deben estar definidas todas las interfaces TypeScript necesarias
- Debe estar documentada la estructura de datos en LocalStorage
- Debe estar definida la estructura del ORM
- Debe haber datos de ejemplo/mock para desarrollo

## Tareas de Implementación

### Análisis y Diseño

- [ ] Analizar requisitos del proyecto
- [ ] Identificar todas las entidades necesarias:
  - [ ] Usuario (estudiante y administrador)
  - [ ] Módulo (definición general)
  - [ ] MóduloEstudiante (módulo del estudiante con notas y estado)
  - [ ] Tarea
  - [ ] Ciclo formativo (definición)
- [ ] Definir relaciones entre entidades
- [ ] Diseñar diagrama de entidades (opcional, texto)

### Definición de Interfaces TypeScript

- [ ] Crear archivo `src/types/index.ts` o similar
- [ ] Definir interfaz `Usuario`:
  - [ ] id: string
  - [ ] nombre: string
  - [ ] email: string
  - [ ] password: string
  - [ ] cicloFormativo: string
  - [ ] rol: 'estudiante' | 'administrador'
- [ ] Definir interfaz `Modulo`:
  - [ ] id: string
  - [ ] nombre: string
  - [ ] curso: 1 | 2
  - [ ] cicloFormativo: string
- [ ] Definir interfaz `ModuloEstudiante`:
  - [ ] id: string
  - [ ] moduloId: string
  - [ ] estudianteId: string
  - [ ] notas: objeto con trimestre1, trimestre2, trimestre3, ordinaria, extraordinaria
  - [ ] estado: 'aprobado' | 'cursando' | 'no-cursa' | 'pendiente'
- [ ] Definir interfaz `Tarea`:
  - [ ] id: string
  - [ ] moduloId: string
  - [ ] estudianteId: string
  - [ ] titulo: string
  - [ ] descripcion: string
  - [ ] fechaCreacion: string
  - [ ] fechaVencimiento?: string
  - [ ] estado: 'pendiente' | 'en-progreso' | 'completada'
  - [ ] nota?: number
- [ ] Definir tipo `CicloFormativo` (enum o union type)
- [ ] Definir tipos auxiliares si son necesarios

### Estructura de LocalStorage

- [ ] Definir claves de LocalStorage:
  - [ ] 'usuarios'
  - [ ] 'modulos'
  - [ ] 'modulosEstudiantes'
  - [ ] 'tareas'
- [ ] Documentar estructura de cada clave
- [ ] Crear funciones helper para leer/escribir LocalStorage

### Diseño del ORM

- [ ] Definir interfaz base `DataRepository<T>`
- [ ] Definir métodos básicos:
  - [ ] getAll(): Promise<T[]>
  - [ ] getById(id: string): Promise<T | undefined>
  - [ ] create(item: Omit<T, 'id'>): Promise<T>
  - [ ] update(id: string, item: Partial<T>): Promise<T>
  - [ ] delete(id: string): Promise<void>
- [ ] Definir interfaces específicas:
  - [ ] UsuarioRepository (con getByEmail)
  - [ ] ModuloRepository
  - [ ] ModuloEstudianteRepository (con getByEstudianteId, getByModuloId)
  - [ ] TareaRepository (con getByModuloId, getByEstudianteId)
- [ ] Documentar estructura del ORM

### Datos de Ejemplo/Mock

- [ ] Crear archivo `src/data/mockData.ts` o similar
- [ ] Crear datos de ejemplo de módulos para cada ciclo:
  - [ ] Desarrollo de Aplicaciones Web
  - [ ] Automatización y Robótica Industrial
  - [ ] Sistemas Microinformáticos
  - [ ] Instalaciones Eléctricas y Automáticas
- [ ] Crear función para inicializar datos en LocalStorage
- [ ] Documentar cómo usar los datos de ejemplo

### Implementación Básica del ORM

- [ ] Crear carpeta `src/data/repositories/`
- [ ] Crear clase base o interfaz para repositorios
- [ ] Crear `LocalStorageUsuarioRepository` (estructura básica)
- [ ] Crear `LocalStorageModuloRepository` (estructura básica)
- [ ] Crear `LocalStorageModuloEstudianteRepository` (estructura básica)
- [ ] Crear `LocalStorageTareaRepository` (estructura básica)
- [ ] Implementar funciones helper para LocalStorage

### Funciones Helper

- [ ] Crear función `leerDatos(key: string): any[]`
- [ ] Crear función `guardarDatos(key: string, datos: any[]): void`
- [ ] Crear función `generarId(): string`
- [ ] Crear función `inicializarDatos()` para cargar datos de ejemplo

### Documentación

- [ ] Documentar todas las interfaces en comentarios JSDoc
- [ ] Crear documento explicando la estructura de datos
- [ ] Documentar cómo se relacionan las entidades
- [ ] Documentar el flujo de datos

### Testing de Estructuras

- [ ] Verificar que las interfaces TypeScript compilan correctamente
- [ ] Probar funciones helper de LocalStorage
- [ ] Probar inicialización de datos de ejemplo
- [ ] Verificar que los datos se guardan correctamente

### Validación

- [ ] Revisar estructuras con la pareja
- [ ] Asegurar que cubren todos los requisitos
- [ ] Verificar que son extensibles para la Fase 2 (API)

## Notas Técnicas

- Usar TypeScript con tipado ligero inicialmente
- Las interfaces pueden usar `any` en algunos campos si es necesario para empezar
- Los datos de ejemplo deben ser realistas pero simples
- El ORM debe ser fácil de extender para la Fase 2

## Estructura de Archivos Sugerida

```
src/
├── types/
│   └── index.ts          # Todas las interfaces
├── data/
│   ├── repositories/     # Implementaciones del ORM
│   ├── mockData.ts       # Datos de ejemplo
│   └── utils.ts          # Funciones helper
```

## Estimación

**Tiempo estimado**: 4-5 horas (S-M)

## Prioridad

**CRÍTICA** - Debe hacerse antes de cualquier otra historia

## Dependencias

Ninguna - Esta es la historia base

## Notas Adicionales

- Esta historia debe completarse antes de comenzar con Historia 1
- Es importante tener bien definidas las estructuras para evitar refactorizaciones posteriores
- Los datos de ejemplo facilitarán el desarrollo y testing
