# 🌟 Proyecto Carrito E-commerce con Next.js

Este proyecto es una aplicación de e-commerce creada con [Next.js](https://nextjs.org), optimizada con **Tailwind CSS** y **Framer Motion** para una experiencia moderna e interactiva. Aquí puedes navegar por productos, gestionar un carrito en tiempo real y cambiar entre temas claro y oscuro. 

El demo completo está disponible aquí: [Vercel Proyecto](crossup-challenge-git-main-benjini123s-projects.vercel.app)

---

## 🚀 Configuración del Entorno de Desarrollo

1. Clona el repositorio e instala las dependencias:

    ```bash
    git clone <https://github.com/benjahenley/crossup-challenge>
    cd <crossup-challenge>
    npm install
    ```

2. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

3. Accede a la app en [http://localhost:3000](http://localhost:3000).

---

## 🔑 Funcionalidades Clave

- **🎡 Carrusel de Productos**: Desplázate horizontalmente por productos con animaciones suaves y controles intuitivos.
- **🛒 Popup del Carrito**: Visualiza tu carrito en tiempo real, ajusta cantidades y elimina productos al instante.
- **🌗 Modo Oscuro**: Alterna entre temas claro y oscuro para una experiencia personalizada.

---

## 💡 Decisiones de Desarrollo

### ⚙️ Estructura del Estado
Se utilizó **Redux** para gestionar el estado del carrito, optimizando la actualización en tiempo real de precios y cantidades. 

### 🎨 Diseño y Animaciones
**Tailwind CSS** se empleó para crear un diseño responsive, mientras que **Framer Motion** permitió animaciones fluidas dentro de los componentes.

### 🎨 Eliminar controles de carrousel del popup en desktop
Elimine en desktop el carrousel ya que no habia mas de 3 sugerencias por producto. Si el proyecto escalara y hubiesen mas opciones se mantendria el carrousel pero me adapte al proyecto.

### 🎨 Prioricé el modo oscuro antes que las traducciones.
Tuve una pequeña complicación integrando idiomas ya que next 15 introdujo cambios a la manera en que se toman los page parameters. al ver que me iba a complicar prioricé el desarrollo de otros componentes. Con mas tiempo lo hubiese hecho. Quería utilizar next 15 de todas formas.

### 🎨 Deje atrás una animación para el checkbox para el producto agregado al carrito.
Tuve una pequeña complicación haciendo una animación tipo slot que requería complejizar el estado de Redux de más, por ende elegí simplificar y continuar con otras cosas.

---

## 🎥 Ejemplos y Demostraciones

Aquí puedes ver videos y capturas de pantalla que muestran el flujo de navegación y las interacciones en la aplicación.

inicio/home con Carrousel de productos de tipo **Shooter**

![Screenshot 2024-10-29 at 1 53 06 PM](https://github.com/user-attachments/assets/899703ae-fdb7-45fd-a602-9434a9b918f4)

CART en modo oscuro:

![Screenshot 2024-10-29 at 1 53 39 PM](https://github.com/user-attachments/assets/27102b0f-89a7-4c16-a69b-b67cbd633702)

CART en modo light:

![Screenshot 2024-10-29 at 1 54 15 PM](https://github.com/user-attachments/assets/3ee1bdb2-6cee-4d39-9a95-b38ad6aee53d)

Agregá al carrito todos los productos que quieras:

![Screenshot 2024-10-29 at 1 56 18 PM](https://github.com/user-attachments/assets/0cd151f4-e01d-4555-b2ce-103ce8591944)

---

¡Explora el proyecto, personaliza las funcionalidades y contribuye con mejoras! 🎉
