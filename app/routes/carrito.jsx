import styles from '~/styles/carrito.css';
import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils';

export function meta() {
  return {
    title: 'GuitarLA - Carrito',
    description: 'Venta de Guitarras, Musica, Blog, carrito de compras, tienda',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export default function Carrito() {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);
  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className='contenedor'>
          <h1 className='heading'>Carrito de Compras</h1>

          <div className='contenido'>
            <div className='carrito'>
              <h2>Articulos</h2>

              {carrito?.length === 0
                ? 'Carrito Vacío'
                : carrito?.map((producto) => (
                    <div key={producto.id} className='producto'>
                      <div>
                        <img
                          src={producto.imagen}
                          alt={`Imagen del producto ${producto.nombre}`}
                        />
                      </div>

                      <div>
                        <p className='nombre'>{producto.nombre}</p>

                        <p className='cantidad'>Cantidad:</p>
                        <select
                          value={producto.cantidad}
                          className='select'
                          onChange={(e) =>
                            actualizarCantidad({
                              cantidad: +e.target.value,
                              id: producto.id,
                            })
                          }
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>

                        <p className='precio'>
                          $<span>{producto.precio}</span>
                        </p>
                        <p className='subtotal'>
                          Subtotal: $
                          <span>{producto.precio * producto.cantidad}</span>
                        </p>
                      </div>
                      <button
                        type='button'
                        className='btn_eliminar'
                        onClick={() => eliminarGuitarra(producto.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>

            <aside className='resumen'>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
              <div className='paypalBTN'>
                <form
                  action='https://www.paypal.com/cgi-bin/webscr'
                  method='post'
                  target='_top'
                >
                  <input type='hidden' name='cmd' value='_s-xclick' />
                  <input
                    type='hidden'
                    name='hosted_button_id'
                    value='8NXZRNY5PZ7Q4'
                  />
                  <input
                    type='image'
                    src='https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif'
                    border='0'
                    name='submit'
                    alt='PayPal - The safer, easier way to pay online!'
                  />
                  <img
                    alt=''
                    border='0'
                    src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
                    width='1'
                    height='1'
                  />
                </form>
              </div>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}
