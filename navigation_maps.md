# Mapas de Navegación - Sistema de Mesa de Ayuda

## Estructura General

```mermaid
graph TD
    A[Inicio] --> B[Login]
    A --> C[Registro]
    B --> D[Dashboard]
    D --> E[Perfil]
    D --> F[Tickets]
    D --> G[Notificaciones]
    
    F --> H[Crear Ticket]
    F --> I[Ver Tickets]
    F --> J[Detalle Ticket]
    
    J --> K[Comentarios]
    J --> L[Actualizar Estado]
```

## Navegación por Rol - Usuario Normal

```mermaid
graph TD
    A[Dashboard Usuario] --> B[Mi Perfil]
    A --> C[Mis Tickets]
    A --> D[Notificaciones]
    
    C --> E[Nuevo Ticket]
    C --> F[Lista de Tickets]
    C --> G[Buscar Ticket]
    
    F --> H[Ver Detalle]
    H --> I[Añadir Comentario]
    H --> J[Ver Estado]
```

## Navegación por Rol - Soporte

```mermaid
graph TD
    A[Dashboard Soporte] --> B[Tickets Asignados]
    A --> C[Tickets Pendientes]
    A --> D[Reportes]
    
    B --> E[Ver Detalle]
    E --> F[Actualizar Estado]
    E --> G[Responder]
    E --> H[Asignar]
    
    D --> I[Estadísticas]
    D --> J[Rendimiento]
```

## Navegación por Rol - Administrador

```mermaid
graph TD
    A[Dashboard Admin] --> B[Gestión Usuarios]
    A --> C[Gestión Tickets]
    A --> D[Configuración]
    A --> E[Reportes]
    
    B --> F[Crear Usuario]
    B --> G[Editar Usuario]
    B --> H[Asignar Roles]
    
    C --> I[Todos los Tickets]
    C --> J[Tickets por Estado]
    
    E --> K[Estadísticas]
    E --> L[Métricas]
    E --> M[Exportar]
```

## Flujo de Creación de Ticket

```mermaid
sequenceDiagram
    participant U as Usuario
    participant S as Sistema
    participant ST as Soporte
    
    U->>S: Inicia Sesión
    S->>U: Muestra Dashboard
    U->>S: Crea Nuevo Ticket
    S->>ST: Notifica Nuevo Ticket
    ST->>S: Asigna Ticket
    S->>U: Notifica Asignación
```

## Flujo de Atención de Ticket

```mermaid
sequenceDiagram
    participant U as Usuario
    participant S as Sistema
    participant ST as Soporte
    
    ST->>S: Ve Lista de Tickets
    ST->>S: Selecciona Ticket
    S->>ST: Muestra Detalles
    ST->>S: Actualiza Estado
    S->>U: Notifica Cambio
    U->>S: Ve Actualización
```

## Elementos de Navegación Persistentes

```mermaid
graph TD
    A[Header] --> B[Logo]
    A --> C[Buscador]
    A --> D[Notificaciones]
    A --> E[Perfil]
    
    F[Sidebar] --> G[Menú Principal]
    F --> H[Accesos Rápidos]
    F --> I[Estado Sistema]
    
    J[Footer] --> K[Ayuda]
    J --> L[Contacto]
    J --> M[Versión]
```

Para visualizar estos diagramas:
1. Abra este archivo con un editor que soporte Mermaid (como VS Code con la extensión Mermaid)
2. O copie el contenido de cada diagrama en un visualizador online de Mermaid
3. También puede usar herramientas como Mermaid Live Editor para convertirlos a imágenes PNG/SVG 