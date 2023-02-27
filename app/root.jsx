//IMPORTAR COMPONENTE PARA MOSTRAR  EN EL HEAD, LOS ESTILOS Y LAS RUTAS
import { useState, useEffect } from 'react';
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from '@remix-run/react';

//IMPORTAR HOJA DE ESTILOS
import styles from '~/styles/index.css';

//IMPORTAR COMPONENTES
import Header from '~/components/header';
import Footer from '~/components/footer';

//AGREGAR INFORMACION META(HTML)
export function meta() {
  return {
    charset: 'utf-8',
    title: 'GuitarLA - Remix',
    viewport: 'width=device-width,initial-scale=1',
  };
}

//CREAR FUNCION LINKS PARA USAR ESTILOS
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },

    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },

    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },

    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
  ];
}

//CREAR FUNCION APP PARA RENDERIZAR
export default function App() {
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) ?? []
      : null;
  const [carrito, setCarrito] = useState(carritoLS);
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //Identificar Duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //Reescribir Cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      //Añadir al carrito
      setCarrito(carritoActualizado);
    } else {
      //REGISTRO NUEVO
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        //Reescribir Cantidad
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    //Añadir al carrito
    setCarrito(carritoActualizado);
  };

  //Eliminar Carrito
  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}
//CREAR FUNCION DOCUMENT PARA MOSTRAR CODIGO HTML
function Document({ children }) {
  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//MANEJO DE ERRORES
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className='error'>
        {error.status} {error.statusText}
        <Link className='error enlace' to='/'>
          Volver Al Inicio
        </Link>
      </p>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className='error'>
        {error.status} {error.statusText}
        <Link className='error enlace' to='/'>
          Volver Al Inicio
        </Link>
      </p>
    </Document>
  );
}
