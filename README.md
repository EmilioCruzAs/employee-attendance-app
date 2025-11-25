# 📌 employee-attendance-app  
**Open-source employee attendance tracking front-end built with Angular 20.**

Aplicación de control de asistencia laboral diseñada como un proyecto de portafolio profesional y como una base open-source que empresas pueden adaptar a sus propios flujos de trabajo.  
Incluye flujos de **entrada**, **salida**, **comida**, **regreso de comida** y **salida laboral**, siguiendo una arquitectura modular por *features*.

---

## 🚀 Características principales

- ✔ Flujo completo del checador (entrada, salida, comida, regreso)  
- ✔ Visualización de rachas (días cumplidos)  
- ✔ Publicidad rotativa para modo kiosko  
- ✔ Mensajes de éxito y error con diseño profesional  
- ✔ Módulo administrativo para gestionar:  
  - Publicidad  
  - Empleados  
  - Chequeos  
  - Reportes  
- ✔ Arquitectura escalable basada en módulos  
- ✔ Estilos modernos con **TailwindCSS** + **DaisyUI**  
- ✔ Conectable a cualquier API REST  

---

# 🧱 Arquitectura del Proyecto (Feature Modules)

Este proyecto sigue **feature-based architecture**, permitiendo escalar sin perder organización.

### 📦 `checker` Module  
Contiene toda la lógica del checador:

- Pantalla principal  
- Publicidad / banners  
- Registro de entrada y salida  
- Registro de comida  
- Mensajes de éxito  
- Vista de rachas  
- Vista de último movimiento  
- UX diseñada para kioskos

### 🛠️ `admin` Module  
Módulo para administradores:

- Gestión de publicidad  
- Control de registros  
- Reportes  
- Configuraciones generales del checador  
- Administración de empleados (si se habilita)

### 🧩 Otros módulos

- `auth` – autenticación / permisos  
- `shared` – componentes y pipes comunes  
- `core` – servicios globales e interceptores  

---

# 🔧 Tecnologías utilizadas

- **Angular 20**
- **TypeScript**
- **RxJS**
- **TailwindCSS**
- **DaisyUI**
- **Feature Modules Architecture**
- **Clean Architecture Frontend**

---

# 📦 Instalación del proyecto

```bash
git clone https://github.com/<tu-usuario>/employee-attendance-app.git
cd employee-attendance-app
npm install
ng serve -o

