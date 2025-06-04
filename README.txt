=== SISTEMA DE MESA DE AYUDA (HELPDESK) ===

Este sistema permite gestionar tickets de soporte técnico con diferentes roles de usuario y funcionalidades específicas.

== MÓDULOS PRINCIPALES ==

1. AUTENTICACIÓN Y USUARIOS
   - Login: Permite a los usuarios acceder al sistema con email y contraseña
   - Registro: Permite crear nuevas cuentas de usuario
   - Perfil: Permite ver y editar información personal del usuario
   - Gestión de Usuarios (Admin): Permite administrar usuarios y sus roles

2. GESTIÓN DE TICKETS
   - Consulta de Tickets: Vista principal para ver todos los tickets
   - Creación de Tickets: Formulario para crear nuevos tickets de soporte
   - Tickets Públicos: Sistema para crear tickets sin necesidad de estar registrado
   - Detalles de Ticket: Vista detallada de cada ticket con sus comentarios

3. COMENTARIOS
   - Sistema de comentarios en tickets
   - Historial de comunicación entre usuarios y soporte
   - Seguimiento de actualizaciones

4. DASHBOARD Y REPORTES
   - Estadísticas de tickets
   - Estado de tickets (Abierto, En proceso, Resuelto, Cerrado)
   - Filtros y búsquedas

== ROLES DE USUARIO ==

1. ADMINISTRADOR
   - Gestión completa de usuarios
   - Cambio de roles de usuario
   - Ver y gestionar todos los tickets
   - Acceso a todas las funcionalidades

2. SOPORTE
   - Ver todos los tickets
   - Actualizar estado de tickets
   - Agregar comentarios
   - Ver estadísticas

3. USUARIO NORMAL
   - Crear tickets
   - Ver sus propios tickets
   - Agregar comentarios a sus tickets
   - Editar su perfil

== FUNCIONALIDADES PRINCIPALES ==

1. GESTIÓN DE TICKETS
   - Creación de tickets con título y descripción
   - Asignación automática de número de ticket
   - Sistema de estados (Abierto, En proceso, Resuelto, Cerrado)
   - Historial de comentarios
   - Filtrado por estado

2. SISTEMA DE USUARIOS
   - Registro con validación de email
   - Perfiles editables
   - Gestión de roles
   - Recuperación de contraseña

3. INTERFAZ
   - Diseño responsive
   - Tema moderno con efectos visuales
   - Navegación intuitiva
   - Mensajes de feedback al usuario

== TECNOLOGÍAS UTILIZADAS ==

Frontend:
- React.js
- Axios para peticiones HTTP
- CSS moderno con efectos visuales
- Diseño responsive

Backend:
- Node.js con Express
- MySQL como base de datos
- bcrypt para encriptación
- CORS habilitado

== ESTRUCTURA DE LA BASE DE DATOS ==

1. Tabla usuarios
   - Información personal
   - Credenciales
   - Roles y permisos

2. Tabla tickets
   - Información del ticket
   - Estado y seguimiento
   - Referencias a usuarios

3. Tabla comentarios
   - Historial de comunicación
   - Referencias a tickets y usuarios

== SEGURIDAD ==

- Contraseñas encriptadas con bcrypt
- Validación de roles y permisos
- Protección de rutas
- Manejo seguro de sesiones

== MANTENIMIENTO ==

Para mantener el sistema:
1. Monitorear el servidor Node.js
2. Hacer respaldos de la base de datos
3. Actualizar dependencias periódicamente
4. Revisar logs de errores 