# Historia 1: Visualización de Módulos (Usuario No Registrado)

## Descripción

**Como** usuario no registrado  
**Quiero** seleccionar un ciclo formativo y ver sus módulos  
**Para** conocer qué módulos incluye cada ciclo

## Criterios de Aceptación

- Debe existir un selector de ciclos formativos
- Al seleccionar un ciclo, se muestran sus módulos en formato de tarjetas
- Las tarjetas muestran información relevante del módulo

## Tareas de Implementación

### Diseño y Planificación

- [ ] Definir la estructura de datos para ciclos formativos
- [ ] Diseñar el componente selector de ciclos
- [ ] Diseñar el componente de tarjeta de módulo
- [ ] Crear mockup/wireframe de la interfaz

### Configuración Inicial

- [ ] Crear componente `CicloSelector`
- [ ] Crear componente `ModuloCard`
- [ ] Crear componente `ModuloList`
- [ ] Configurar rutas para la página principal

### Implementación del Selector

- [ ] Implementar selector con los 4 ciclos formativos:
  - [ ] Desarrollo de Aplicaciones Web (Grado Superior)
  - [ ] Automatización y Robótica Industrial (Grado Superior)
  - [ ] Sistemas Microinformáticos (Grado Medio)
  - [ ] Instalaciones Eléctricas y Automáticas (Grado Medio)
- [ ] Añadir estado para el ciclo seleccionado
- [ ] Implementar cambio de ciclo seleccionado

### Implementación de Visualización de Módulos

- [ ] Obtener módulos del ciclo seleccionado desde el ORM
- [ ] Renderizar módulos en formato de tarjetas
- [ ] Mostrar información del módulo en cada tarjeta:
  - [ ] Nombre del módulo
  - [ ] Curso (1º o 2º)
  - [ ] Información adicional relevante
- [ ] Aplicar estilos con Tailwind CSS
- [ ] Usar componentes de Shadcn/ui si aplica

### Persistencia de Datos

- [ ] Crear datos iniciales de módulos para cada ciclo (en LocalStorage)
- [ ] Implementar función en ORM para obtener módulos por ciclo
- [ ] Verificar que los datos se cargan correctamente

### Testing y Validación

- [ ] Probar que el selector funciona correctamente
- [ ] Probar que se muestran los módulos al seleccionar un ciclo
- [ ] Verificar que las tarjetas muestran la información correcta
- [ ] Verificar responsive design
- [ ] Revisar código con la pareja

### Documentación

- [ ] Documentar componentes creados
- [ ] Actualizar README si es necesario
- [ ] Crear commit con mensaje descriptivo

## Notas Técnicas

- Usar LocalStorage para almacenar los módulos inicialmente
- Los módulos deben estar predefinidos para cada ciclo formativo
- Considerar usar Shadcn/ui Card component para las tarjetas

## Estimación

**Tiempo estimado**: 3-4 horas (S)

## Prioridad

Alta - Funcionalidad básica del proyecto
