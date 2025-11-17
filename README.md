# Proyecto de Catálogo de Vehículos
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

Aplicación web para visualizar y filtrar vehículos, desarrollada con React, Vite y Material UI


Este proyecto es una aplicación web desarrollada con **React + Vite** y **Material UI**, que permite visualizar un listado de vehículos, filtrar información y acceder al detalle de cada uno. El objetivo principal es simular un pequeño sistema de catálogo, similar al de un concesionario.

---

## 🚀 Tecnologías utilizadas

- **React 18**  
- **Vite**  
- **Material UI (MUI)** para la interfaz  
- **React Router** para navegación  
- **TypeScript**  
- **JSON local** simulando una API/Backend
- **Netlify** para el despliegue

---
## ✈️ Despliegue
El proyecto se encuentra disponible para acceder a través del siguiente enlace: https://webautomovil.netlify.app/

## 📦 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/MaximilianoColombo/WebAutomovil.git
cd WebAutomovil
```

### 2. Instalar las dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```
### 4. Ingresar de forma local
La aplicación se encuentra disponible en: http://localhost:5173

## 📘 Decisiones técnicas tomadas
### ✔ 1. Vite como bundler
Se eligió Vite por su velocidad al levantar el servidor de desarrollo y por su build rápido. Es ideal para pruebas técnicas y proyectos modernos donde la experiencia de desarrollo y tiempos de feedback son importantes.

### ✔ 2. Material UI para el diseño
Material UI provee componentes accesibles y personalizables (Table, Card, Dialog, ComboBox, Stack, etc.). Permitió implementar rápidamente la interfaz sin escribir CSS a mano y mantener consistencia visual.

### ✔ 3. React Router para la navegación
Se utilizó BrowserRouter, useNavigate y useLocation para:

- Navegar a la página de detalle del vehículo.
- Pasar el objeto del vehículo mediante location.state cuando corresponde (evita prop drilling).
- Volver a la página principal a través del historial
- Mantener URLs limpias y permitir recargas/navegación con historial.

### ✔ 4. Componentes reutilizables

La aplicación está organizada en componentes reutilizables para facilitar mantenimiento y escalado:

- Tabla: muestra los datos a partir de una lista de objetos de un cierto tipo
- BarraDeBusqueda: maneja toda la lógica del filtrado de datos a partir de una lista de objetos
- ComboBox y Slider: actualizan los filtros de búsqueda dinámicamente a medida que el usuario interactúa. Contenidos dentro de *BarraDeBusqueda*
- BotonAtras: componente reutilizable que vuelve hacia atrás a través de *useNavigate()*
- Imagen: miniatura que abre un *Dialog* con la imagen ampliada

### ✔ 5. Buenas prácticas y separación de responsabilidades

Se trató de implementar buenas prácticas para separar responsabilidades, encapsular la lógica y evitar repetir código. Facilitando así la legibilidad, mantenimiento y escalabilidad del código.

Estos archivos son los ejemplos más notorios:
#### #️⃣Interfaces.ts
Contiene las estructuras y tipos de datos que deberán tener los objetos y funciones
#### #️⃣utils.ts
Contiene funciones auxiliares que manipulan arrays, strings, etc
#### #️⃣diccionario.ts
Contiene diccionarios que sirven para manejar de forma más modular cómo se mostrarán los datos en pantalla

### ✔ 6. Simulación de datos tipo backend

Los datos de vehículos están en un archivo JSON local que simula una API REST. Esto facilita el desarrollo offline y permite reemplazar fácilmente por un backend real (endpoints) sin modificar la UI.

---

## 📁 Estructura del proyecto
```plaintext
src/
 ├─ components/
 │   ├─ BotonAtras.tsx
 │   ├─ Imagen.tsx
 │   └─ Tabla.tsx
 │   ├─ Slider.tsx
 │   ├─ ComboBox.tsx
 │   └─ BarraBusqueda.tsx
 ├─ paginas/
 │   ├─ Principal.tsx
 │   └─ VehiculoDetalle.tsx
 ├─ datos/
 │   └─ vehiculos.json
 |   └─ diccionario.ts
 ├─ utils/
 │   └─ utils.ts
 ├─ interfaces/
 │   └─ interfaces.ts
 ├─ App.tsx
 └─ main.tsx
 ```
 ## 🔮 Próximas mejoras sugeridas
- Integración con backend real (Por ej: Django, ASP.NET).
- Soporte para múltiples imágenes por vehículo estilo galería.
- Validación y sanitización de datos de entrada.
- Buscador con fuzzy search en vez de coincidencia exacta.
- Diseño más responsivo para pantallas pequeñas.
- Switch de modo claro/oscuro.
- Paginación de la tabla principal.



