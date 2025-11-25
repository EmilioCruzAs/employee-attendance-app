# 📌 employee-attendance-app  
**Open-source employee attendance tracking front-end built with Angular.**

Aplicación de control de asistencia laboral diseñada como un proyecto de portafolio profesional y como una base open-source que empresas pueden adaptar a sus propios flujos de trabajo.  
Incluye flujos de **entrada**, **salida**, **comida**, **regreso de comida** y **salida laboral**, siguiendo un enfoque modular y escalable basado en *feature modules*.

---

## 🚀 Características principales

- ✔ **Check-in / Check-out**  
- ✔ **Registro de comida (salida y regreso)**  
- ✔ **Manejo de rachas y visualización de estados**  
- ✔ **Pantallas de publicidad e indicadores resaltando acción actual**  
- ✔ **Historial de movimientos**  
- ✔ **Módulo administrativo completo (opcional)**  
- ✔ **Arquitectura limpia y basada en módulos**  
- ✔ **Interfaces reutilizables y servicios desacoplados**  
- ✔ **Preparado para integrarse con cualquier API REST**

---

## 🧱 Arquitectura del Proyecto (Feature Modules)

Este proyecto utiliza una arquitectura basada en **módulos por funcionalidad**, facilitando la escalabilidad y la organización del código.

### 📦 `checker` Module
Representa toda la lógica del **checador**.  
Incluye:

- Pantalla principal del checador
- Publicidad rotativa
- Registro de entrada, salida y comida
- Mensajes de éxito / error
- Vista de rachas (cuántos días lleva sin faltar)
- Vista de último registro
- Flujo UX optimizado para uso en kiosko

Este módulo está pensado para que pueda ejecutarse como un módulo independiente o integrarse en sistemas reales de asistencia.

---

### 🛠️ `admin` Module
Módulo exclusivo para **administradores**, encargado de:

- Configurar qué imágenes o publicidad se muestran en el checador  
- Ver y administrar registros de asistencia  
- Generar reportes  
- Activar, desactivar o reiniciar el checador  
- Administración básica de usuarios y permisos  

Este módulo no es accesible para los empleados; requiere autenticación.

---

### 🧩 Otros módulos (según implementación)

- `auth` – autenticación (si aplica)  
- `shared` – componentes comunes  
- `core` – servicios globales e interceptores  

Esta separación modular facilita que empresas adapten fácilmente solo los módulos necesarios.

---

## 🔧 Tecnologías utilizadas

- **Angular 17+**
- **TypeScript**
- **RxJS**
- **PrimeNG / Angular Material**
- **SCSS**
- **Feature Modules Architecture**
- **Clean Architecture Frontend**

---

## 📦 Instalación

```bash
git clone https://github.com/<tu-usuario>/employee-attendance-app.git
cd employee-attendance-app
npm install
ng serve -o
