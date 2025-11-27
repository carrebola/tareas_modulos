# Historia 7: Gestión de Notas de Módulos

## Descripción

**Como** estudiante autenticado  
**Quiero** gestionar las notas de mis módulos para diferentes evaluaciones  
**Para** hacer seguimiento de mi progreso académico

## Criterios de Aceptación

- Debe permitir añadir/modificar la nota para cada evaluación (trimestre 1, 2, 3, ordinaria, extraordinaria)
- Debe permitir cambiar el estado del módulo (aprobado, cursando, no cursa, etc.)
- Las notas y estados deben guardarse correctamente
- Debe mostrar todas las notas del módulo

## Tareas de Implementación

### Diseño y Planificación
- [ ] Diseñar interfaz para gestionar notas por evaluación
- [ ] Diseñar selector de estado del módulo
- [ ] Definir estructura de datos para notas (trimestre1, trimestre2, trimestre3, ordinaria, extraordinaria)
- [ ] Definir estados posibles (aprobado, cursando, no-cursa, pendiente)
- [ ] Crear mockup/wireframe

### Configuración Inicial
- [ ] Crear componente `GestionNotasModulo`
- [ ] Crear componente `NotaEvaluacion` (input para cada evaluación)
- [ ] Crear componente `EstadoModuloSelector`
- [ ] Integrar en vista de detalle de módulo

### Estructura de Datos
- [ ] Actualizar interfaz `ModuloEstudiante` con estructura de notas
- [ ] Definir tipos para evaluaciones
- [ ] Definir tipos para estados de módulo

### Implementación de Gestión de Notas
- [ ] Crear inputs para cada evaluación:
  - [ ] Trimestre 1
  - [ ] Trimestre 2
  - [ ] Trimestre 3
  - [ ] Ordinaria
  - [ ] Extraordinaria
- [ ] Validar que las notas sean números (0-10 o 0-100 según sistema)
- [ ] Permitir dejar notas vacías
- [ ] Mostrar notas existentes al cargar
- [ ] Aplicar estilos con Tailwind CSS
- [ ] Usar componentes de Shadcn/ui (Input)

### Implementación de Cambio de Estado
- [ ] Crear selector de estado del módulo
- [ ] Estados disponibles: aprobado, cursando, no-cursa, pendiente
- [ ] Mostrar estado actual
- [ ] Permitir cambiar estado
- [ ] Aplicar estilos diferenciados según estado
- [ ] Usar componentes de Shadcn/ui (Select)

### Lógica de Guardado
- [ ] Implementar función para actualizar notas en ORM
- [ ] Implementar función para actualizar estado en ORM
- [ ] Guardar cambios en LocalStorage
- [ ] Actualizar UI tras guardar
- [ ] Mostrar confirmación de guardado (opcional)

### Visualización de Notas
- [ ] Mostrar todas las notas del módulo
- [ ] Mostrar estado actual del módulo
- [ ] Aplicar colores/indicadores según estado
- [ ] Mostrar resumen de notas (promedio, si aplica)

### Validaciones
- [ ] Validar rango de notas (0-10 o 0-100)
- [ ] Validar formato numérico
- [ ] Mostrar mensajes de error si aplica

### Persistencia de Datos
- [ ] Verificar que las notas se guardan correctamente
- [ ] Verificar que el estado se guarda correctamente
- [ ] Verificar que los datos persisten al recargar

### Testing y Validación
- [ ] Probar añadir nota para cada evaluación
- [ ] Probar modificar nota existente
- [ ] Probar cambiar estado del módulo
- [ ] Probar validaciones de notas
- [ ] Verificar que los datos se guardan correctamente
- [ ] Verificar que se muestran todas las notas
- [ ] Revisar código con la pareja

### Documentación
- [ ] Documentar estructura de notas
- [ ] Documentar estados de módulo
- [ ] Documentar componentes creados
- [ ] Actualizar README si es necesario
- [ ] Crear commit con mensaje descriptivo

## Notas Técnicas

- Las notas son opcionales (pueden estar vacías)
- El estado del módulo es obligatorio
- Estructura de notas: objeto con propiedades trimestre1, trimestre2, trimestre3, ordinaria, extraordinaria
- Considerar validación de rango de notas según sistema de evaluación

## Estimación

**Tiempo estimado**: 5-6 horas (M)

## Prioridad

Alta - Funcionalidad importante del proyecto

