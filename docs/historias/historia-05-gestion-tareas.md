# Historia 5: Gestión de Tareas

## Descripción

**Como** estudiante autenticado  
**Quiero** crear, editar, eliminar y ver tareas de un módulo  
**Para** organizar mi trabajo

## Criterios de Aceptación

- Debe permitir crear nuevas tareas
- Debe permitir editar tareas existentes
- Debe permitir eliminar tareas
- Debe mostrar todas las tareas de un módulo

## Tareas de Implementación

### Diseño y Planificación
- [ ] Diseñar la vista de tareas de un módulo
- [ ] Diseñar formulario de creación/edición de tarea
- [ ] Diseñar confirmación de eliminación
- [ ] Crear mockup/wireframe

### Configuración Inicial
- [ ] Crear componente `TareaList`
- [ ] Crear componente `TareaForm` (crear/editar)
- [ ] Crear componente `TareaCard` o `TareaItem`
- [ ] Crear página/ruta para detalle de módulo con tareas

### Visualización de Tareas
- [ ] Obtener tareas del módulo desde el ORM
- [ ] Renderizar lista de tareas
- [ ] Mostrar información de cada tarea:
  - [ ] Título
  - [ ] Descripción
  - [ ] Fecha de creación
  - [ ] Fecha de vencimiento (si existe)
  - [ ] Estado
  - [ ] Nota (si existe)
- [ ] Aplicar estilos con Tailwind CSS
- [ ] Usar componentes de Shadcn/ui

### Crear Tarea
- [ ] Crear botón "Nueva Tarea"
- [ ] Implementar formulario de creación:
  - [ ] Campo título (obligatorio)
  - [ ] Campo descripción
  - [ ] Campo fecha de vencimiento (opcional)
  - [ ] Botones guardar/cancelar
- [ ] Validar campos obligatorios
- [ ] Implementar función de creación en ORM
- [ ] Guardar tarea en LocalStorage
- [ ] Actualizar lista tras crear

### Editar Tarea
- [ ] Crear botón "Editar" en cada tarea
- [ ] Implementar formulario de edición (reutilizar `TareaForm`)
- [ ] Cargar datos de la tarea en el formulario
- [ ] Validar campos
- [ ] Implementar función de actualización en ORM
- [ ] Actualizar tarea en LocalStorage
- [ ] Actualizar lista tras editar

### Eliminar Tarea
- [ ] Crear botón "Eliminar" en cada tarea
- [ ] Implementar diálogo de confirmación
- [ ] Implementar función de eliminación en ORM
- [ ] Eliminar tarea de LocalStorage
- [ ] Actualizar lista tras eliminar
- [ ] Usar componente de diálogo de Shadcn/ui

### Persistencia de Datos
- [ ] Verificar que las tareas se guardan con `moduloId` y `estudianteId`
- [ ] Verificar que se obtienen solo las tareas del módulo y estudiante
- [ ] Verificar estructura de datos de tarea

### Manejo de Estados
- [ ] Manejar estado de carga al obtener tareas
- [ ] Manejar estado de error
- [ ] Mostrar mensaje si no hay tareas

### Testing y Validación
- [ ] Probar creación de tarea
- [ ] Probar edición de tarea
- [ ] Probar eliminación de tarea
- [ ] Probar validaciones del formulario
- [ ] Probar que solo se muestran tareas del módulo
- [ ] Verificar que los datos se persisten correctamente
- [ ] Revisar código con la pareja

### Documentación
- [ ] Documentar componentes creados
- [ ] Documentar funciones CRUD de tareas
- [ ] Actualizar README si es necesario
- [ ] Crear commit con mensaje descriptivo

## Notas Técnicas

- Las tareas pertenecen a un módulo y a un estudiante
- Usar el mismo formulario para crear y editar (modo edición/creación)
- Generar ID único para cada tarea
- Considerar usar un diálogo/modal para el formulario

## Estimación

**Tiempo estimado**: 7-9 horas (L)

## Prioridad

Alta - Funcionalidad core del proyecto

