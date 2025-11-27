# Historia 0b: Configuración del Entorno Básico

## Descripción

**Como** desarrollador  
**Quiero** configurar el entorno básico de la aplicación (router, layout, componentes base)  
**Para** tener la estructura fundamental antes de desarrollar funcionalidades

## Criterios de Aceptación

- Debe estar configurado el enrutador (React Router)
- Debe existir un layout básico con header y navegación
- Debe haber componentes base reutilizables
- Debe estar configurado el contexto de autenticación (estructura básica)

## Tareas de Implementación

### Instalación de Dependencias
- [ ] Instalar React Router DOM:
  ```bash
  npm install react-router-dom
  ```
- [ ] Instalar tipos de React Router (si es necesario):
  ```bash
  npm install -D @types/react-router-dom
  ```
- [ ] Verificar que Tailwind CSS está instalado
- [ ] Verificar que Shadcn/ui está configurado

### Configuración del Router
- [ ] Crear archivo `src/App.tsx` o `src/router.tsx`
- [ ] Configurar rutas básicas:
  - [ ] `/` - Página principal (público)
  - [ ] `/login` - Login (público)
  - [ ] `/register` - Registro (público)
  - [ ] `/estudiante/*` - Rutas protegidas de estudiante
  - [ ] `/admin/*` - Rutas protegidas de administrador
- [ ] Crear componente `Router` o configurar en `App.tsx`
- [ ] Configurar navegación básica

### Estructura de Layout
- [ ] Crear componente `Layout` base
- [ ] Crear componente `Header`
- [ ] Crear componente `Footer` (opcional)
- [ ] Crear componente `Main` o `Container` para contenido
- [ ] Aplicar estilos básicos con Tailwind CSS

### Componente Header
- [ ] Crear estructura básica del header:
  - [ ] Logo o título de la aplicación
  - [ ] Menú de navegación
  - [ ] Área de usuario (login/logout)
- [ ] Implementar menú de navegación:
  - [ ] Enlace a página principal
  - [ ] Enlace a login (si no está autenticado)
  - [ ] Enlace a registro (si no está autenticado)
  - [ ] Menú de estudiante (si está autenticado como estudiante)
  - [ ] Menú de administrador (si está autenticado como admin)
- [ ] Aplicar estilos con Tailwind CSS
- [ ] Hacer responsive el header

### Componente de Navegación
- [ ] Crear componente `Navigation` o `Nav`
- [ ] Implementar enlaces de navegación
- [ ] Añadir indicador de página activa
- [ ] Aplicar estilos

### Contexto de Autenticación (Estructura Básica)
- [ ] Crear archivo `src/contexts/AuthContext.tsx`
- [ ] Crear contexto de autenticación:
  - [ ] Estado de usuario (null o Usuario)
  - [ ] Función de login (estructura básica)
  - [ ] Función de logout (estructura básica)
- [ ] Crear componente `AuthProvider`
- [ ] Crear hook `useAuth` para usar el contexto
- [ ] Envolver la app con `AuthProvider`

### Componente ProtectedRoute
- [ ] Crear componente `ProtectedRoute`
- [ ] Implementar verificación de autenticación
- [ ] Redirigir a login si no está autenticado
- [ ] Verificar rol si es necesario (estudiante/admin)
- [ ] Aplicar a rutas protegidas

### Páginas Básicas
- [ ] Crear carpeta `src/pages/` o `src/views/`
- [ ] Crear página `HomePage` (placeholder básico)
- [ ] Crear página `LoginPage` (estructura básica, sin funcionalidad)
- [ ] Crear página `RegisterPage` (estructura básica, sin funcionalidad)
- [ ] Crear página `EstudianteDashboard` (placeholder)
- [ ] Crear página `AdminDashboard` (placeholder)

### Componentes Base Reutilizables
- [ ] Crear componente `Container` o `PageContainer`:
  - [ ] Wrapper con estilos consistentes
  - [ ] Máximo ancho, padding, etc.
- [ ] Crear componente `Button` (si no se usa Shadcn/ui)
- [ ] Crear componente `Card` básico (si no se usa Shadcn/ui)
- [ ] Crear componente `Loading` o `Spinner`
- [ ] Crear componente `ErrorMessage` para errores

### Configuración de Rutas
- [ ] Configurar rutas públicas:
  - [ ] `/` → HomePage
  - [ ] `/login` → LoginPage
  - [ ] `/register` → RegisterPage
- [ ] Configurar rutas protegidas de estudiante:
  - [ ] `/estudiante` → EstudianteDashboard
  - [ ] `/estudiante/modulos` → (se implementará después)
- [ ] Configurar rutas protegidas de administrador:
  - [ ] `/admin` → AdminDashboard
  - [ ] `/admin/modulos` → (se implementará después)

### Estilos Globales
- [ ] Configurar estilos base en `src/index.css`
- [ ] Añadir variables CSS si es necesario
- [ ] Configurar fuentes
- [ ] Configurar colores base
- [ ] Asegurar que Tailwind está correctamente configurado

### Navegación Programática
- [ ] Implementar función de navegación usando `useNavigate`
- [ ] Crear helper para navegación si es necesario
- [ ] Implementar redirecciones después de login/logout

### Testing y Validación
- [ ] Probar que el router funciona correctamente
- [ ] Probar navegación entre páginas
- [ ] Probar que las rutas protegidas redirigen correctamente
- [ ] Verificar que el header se muestra en todas las páginas
- [ ] Verificar responsive design
- [ ] Revisar código con la pareja

### Documentación
- [ ] Documentar estructura de rutas
- [ ] Documentar componentes base creados
- [ ] Documentar el contexto de autenticación
- [ ] Actualizar README si es necesario
- [ ] Crear commit con mensaje descriptivo

## Notas Técnicas

- Usar React Router v6 (última versión)
- El contexto de autenticación puede ser básico inicialmente, se completará en Historia 3
- Los componentes base pueden ser simples, se mejorarán con el tiempo
- Considerar usar Shadcn/ui para componentes base si está configurado

## Estructura de Archivos Sugerida

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx (opcional)
│   ├── common/
│   │   ├── Container.tsx
│   │   ├── Loading.tsx
│   │   └── ErrorMessage.tsx
│   └── auth/
│       └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── EstudianteDashboard.tsx
│   └── AdminDashboard.tsx
└── App.tsx (configuración de rutas)
```

## Estimación

**Tiempo estimado**: 5-6 horas (M)

## Prioridad

**CRÍTICA** - Debe hacerse antes de las historias de funcionalidades

## Dependencias

- Historia 0: Planificación de Estructuras de Datos (para tipos básicos)

## Notas Adicionales

- Esta historia debe completarse después de la Historia 0
- Es la base para todas las demás historias
- Los componentes pueden ser básicos, se mejorarán con el tiempo
- El contexto de autenticación se completará en Historia 3

