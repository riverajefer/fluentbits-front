# 🚀 FluentBits

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Private-red.svg)](LICENSE)

> Plataforma web de aprendizaje de vocabulario basada en IA y repetición espaciada para mejorar la retención de palabras y oraciones de forma efectiva.

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [Roadmap](#-roadmap)
- [Contribución](#-contribución)

---

## 🎯 Acerca del Proyecto

**FluentBits** es una aplicación web moderna diseñada para ayudar a estudiantes de idiomas a aprender y retener vocabulario de manera más efectiva. Utilizando algoritmos de **repetición espaciada** e **inteligencia artificial**, la plataforma optimiza el proceso de aprendizaje para maximizar la retención a largo plazo.

### ¿Por qué FluentBits?

- **🧠 Aprendizaje Científico**: Basado en técnicas probadas de repetición espaciada
- **🤖 IA Integrada**: Generación inteligente de contenido educativo
- **📊 Seguimiento Personalizado**: Monitorea tu progreso y adapta las repeticiones
- **🎨 Interfaz Intuitiva**: Diseño moderno y responsive
- **🌙 Tema Claro/Oscuro**: Adapta la interfaz a tus preferencias

---

## ✨ Características

### Gestión de Usuarios
- ✅ Autenticación con JWT (Login/Register)
- ✅ Perfil de usuario personalizado
- ✅ Sistema de sesiones seguro

### Aprendizaje de Vocabulario
- ✅ Agregar palabras y oraciones personalizadas
- ✅ Generación de contenido con IA
- ✅ Sistema de repetición espaciada inteligente
- ✅ Tabla filtrable de vocabulario ("Mis Palabras")
- ✅ Vista detallada de progreso por palabra

### Experiencia de Usuario
- ✅ Dashboard personalizado
- ✅ Diseño responsive (móvil y escritorio)
- ✅ Soporte para tema claro/oscuro
- ✅ Transiciones y animaciones suaves
- ✅ Navegación protegida por autenticación

---

## 🛠️ Tecnologías

### Core Stack
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| [React](https://react.dev/) | 19.1.0 | Framework de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | Tipado estático |
| [Vite](https://vite.dev/) | 6.3.5 | Build tool y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.0 | Framework de estilos |

### Librerías Principales
- **Routing**: React Router DOM 7.6.2
- **Formularios**: React Hook Form 7.58.1 + Yup 1.6.1
- **HTTP Client**: Axios 1.10.0
- **State Management**: TanStack React Query 5.80.10
- **Iconos**: Lucide React 0.518.0
- **Animaciones**: React Transition Group 4.4.5

### Herramientas de Desarrollo
- ESLint 9.25.0
- TypeScript ESLint 8.30.1
- PostCSS + Autoprefixer
- gh-pages (despliegue)

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0

---

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/riverajefer/fluentbits-front.git
   cd fluentbits-front
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**

   Navega a [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Configuración

### Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | URL base del backend API | `https://api.example.com` |

### Storage Keys (localStorage)

La aplicación utiliza las siguientes claves en `localStorage`:

- `auth_token`: Token JWT de autenticación
- `refresh_token`: Token de renovación
- `user_data`: Datos del usuario autenticado

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con hot reload

# Producción
npm run build        # Compila el proyecto para producción
npm run preview      # Vista previa del build de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint para verificar el código

# Despliegue
npm run deploy       # Despliega a GitHub Pages
```

---

## 📁 Estructura del Proyecto

```
fluentbits-front/
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, etc.)
│   ├── components/
│   │   ├── common/          # Componentes comunes (Loading, ErrorMessage)
│   │   └── ui/              # Componentes UI base (Button, Card, Input)
│   ├── context/
│   │   └── AuthContext.tsx  # Contexto de autenticación
│   ├── hooks/
│   │   ├── useAuth.ts       # Hook de autenticación
│   │   └── useApi.ts        # Hook para llamadas API
│   ├── layouts/
│   │   └── PrivateLayout.tsx # Layout para rutas protegidas
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Landing.tsx      # Página de inicio
│   │   ├── Login.tsx        # Inicio de sesión
│   │   ├── Register.tsx     # Registro
│   │   ├── Dashboard.tsx    # Panel principal
│   │   ├── AddWord.tsx      # Agregar vocabulario
│   │   ├── MyWords.tsx      # Lista de palabras
│   │   ├── MyWordsDetail.tsx # Detalle de palabra
│   │   ├── Profile.tsx      # Perfil de usuario
│   │   └── NotFound.tsx     # Página 404
│   ├── services/            # Servicios API
│   │   ├── api.ts           # Configuración de Axios
│   │   ├── auth.ts          # Servicios de autenticación
│   │   ├── words.ts         # Servicios de palabras
│   │   └── myWords.ts       # Servicios de vocabulario
│   ├── styles/              # Estilos personalizados
│   ├── types/               # Definiciones de tipos TypeScript
│   ├── utils/               # Utilidades
│   │   ├── constants.ts     # Constantes de la aplicación
│   │   ├── auth.ts          # Utilidades de tokens
│   │   └── validation.ts    # Validaciones
│   ├── App.tsx              # Componente raíz
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos públicos
├── index.html               # HTML principal
├── vite.config.ts           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

---

## 🌐 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages.

1. **Build del proyecto**
   ```bash
   npm run build
   ```

2. **Despliega a GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Accede a la aplicación**

   La aplicación estará disponible en: `https://riverajefer.github.io/fluentbits-front`

### Configuración para SPA

El script `postbuild` copia automáticamente `index.html` a `404.html` para soportar el enrutamiento SPA en GitHub Pages.

---

## 🗺️ Roadmap

- [ ] Implementar modo offline con Service Workers
- [ ] Agregar soporte para múltiples idiomas (i18n)
- [ ] Integrar texto a voz (TTS) para pronunciación
- [ ] Añadir estadísticas avanzadas de progreso
- [ ] Implementar sistema de logros y gamificación
- [ ] Soporte para importar/exportar datos
- [ ] Modo de práctica con flashcards
- [ ] Integración con APIs de diccionarios externos

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Estilo

- Sigue las reglas de ESLint configuradas
- Usa TypeScript para todo el código nuevo
- Escribe componentes funcionales con hooks
- Documenta funciones complejas con JSDoc
- Mantén los componentes pequeños y reutilizables

---

## 📄 Licencia

Este proyecto es privado y está protegido por derechos de autor.

---

## 👨‍💻 Autor

**riverajefer**

- GitHub: [@riverajefer](https://github.com/riverajefer)
- Proyecto: [fluentbits-front](https://github.com/riverajefer/fluentbits-front)

---

## 🙏 Agradecimientos

- [React Team](https://react.dev/) - Por el increíble framework
- [Vite Team](https://vite.dev/) - Por la herramienta de build ultrarrápida
- [Tailwind Labs](https://tailwindcss.com/) - Por el framework de CSS utility-first
- Comunidad open source - Por todas las librerías utilizadas..

---

<div align="center">
  Hecho con ❤️ para estudiantes de idiomas
</div>
