# Products App

Aplicación web para la gestión de productos con frontend en React y backend en Spring Boot.

## 🚀 Tecnologías

### Frontend
- React
- TypeScript
- Material-UI
- React Router

### Backend
- Spring Boot
- Firebase (Base de datos)
- Java

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- Java JDK 17
- Maven
- Cuenta de Firebase

## 🔧 Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/Madafanes0/productos.git
cd productos
```

2. Configurar el Backend
```bash
cd back
mvn install
```

3. Configurar el Frontend
```bash
cd front/products-app
npm install
```

4. Configurar Firebase
- Crear un proyecto en Firebase
- Obtener el archivo de credenciales `firebase-service-account.json`
- Colocar el archivo en `back/src/main/resources/`

## 🚀 Ejecución

### Backend
```bash
cd back
mvn spring-boot:run
```

### Frontend
```bash
cd front/products-app
npm start
```

## 📝 Características

- Gestión de productos (CRUD)
- Interfaz moderna y responsiva
- Autenticación con Firebase
- Almacenamiento en tiempo real

## 👥 Autor

- Diego Madafanes