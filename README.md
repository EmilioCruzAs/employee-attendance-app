# 📌 employee-attendance-app

**Open-source employee attendance tracking front-end built with Angular 20.**

Aplicación moderna para el control de asistencia laboral, diseñada como un proyecto de portafolio profesional y como una base open-source que organizaciones pueden adaptar a sus propios flujos de trabajo.  
Incluye un sistema completo de checador y un módulo administrativo opcional.

---

## 🚀 Features

Flujos principales del sistema:

- ✔ **Entrada** (Check-in)  
- ✔ **Salida a comida**  
- ✔ **Regreso de comida**  
- ✔ **Salida laboral**  
- ✔ Mensajes de éxito y error  
- ✔ Visualización de rachas de asistencia  
- ✔ Publicidad / banners para modo kiosko  
- ✔ Arquitectura escalable basada en *feature modules*  
- ✔ Módulo administrativo para gestionar imágenes, registros y configuraciones (solo usuarios autorizados)

---

## 🛠️ Tech Stack

- **Framework:** Angular 20  
- **UI / Styling:** TailwindCSS + DaisyUI  
- **Date & time utilities:** Day.js  
- **Architecture:** Feature Modules (checker, admin, auth, shared, core)  
- **State & logic:** RxJS  

---

## 🧱 Architecture Overview

El proyecto sigue una arquitectura modular orientada a características:

### 📦 `checker` Module
Maneja toda la lógica del checador:

- Pantalla principal  
- Publicidad rotativa  
- Registro de entradas/salidas  
- Gestión de rachas  
- UX optimizada para kioskos  

### 🛠️ `admin` Module
Disponible solo para administradores:

- Gestión de banners e imágenes  
- Consulta de registros  
- Reportes  
- Control del checador  

### 🌐 `core` Module
- Servicios globales  
- Interceptores  
- Guards  
- Configuración base  

### 🔁 `shared` Module
- Componentes reutilizables  
- Pipes  
- Directivas  

---

## 📂 Project Structure

```
src/app/
├── core/       # Singleton services, guards, interceptors
├── layout/     # Main layout components
├── modules/    # Feature modules (e.g., checker, admin)
└── shared/     # Shared components, pipes, directives
```

## 🚦 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-attendance-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-attendance-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 📄 License

This project is licensed under the **MIT License**.
