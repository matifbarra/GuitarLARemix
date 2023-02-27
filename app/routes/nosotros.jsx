import imagen1 from '../../public/img/nosotros.jpg';
import imagen2 from '../../public/img/blog_2.jpg';
import styles from '../styles/nosotros.css';

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },

    {
      rel: 'preload',
      href: imagen1,
      as: 'image',
    },

    {
      rel: 'preload',
      href: imagen2,
      as: 'image',
    },
  ];
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen1} alt='imagen sobre nosotros' />
      </div>

      <div>
        <p>
          ¡Bienvenido a GuitarLA! Somos una tienda en línea de guitarras y
          accesorios para guitarristas de todos los niveles y estilos. En
          GuitarLA, nos apasiona la música y la guitarra, y nos esforzamos por
          brindarle a nuestros clientes los mejores productos y servicios
          posibles.
        </p>
        <p>
          Fundada en 2023, GuitarLA ha crecido rápidamente para convertirse en
          una de las principales tiendas de guitarras en línea de la región.
          Ofrecemos una amplia selección de guitarras eléctricas, acústicas y
          clásicas de marcas de renombre como Fender, Gibson, Martin, Taylor y
          muchas otras. También contamos con una amplia variedad de accesorios
          para guitarras, como cuerdas, amplificadores, pedales de efectos,
          afinadores, estuches y mucho más.
        </p>
        <img src={imagen2} alt='imagen sobre nosotros' />
        <p>
          En GuitarLA, nuestro objetivo es brindar a nuestros clientes una
          experiencia de compra excepcional. Nuestro sitio web es fácil de
          navegar y está diseñado para ayudar a los clientes a encontrar
          exactamente lo que están buscando. Además, ofrecemos envío gratuito en
          pedidos superiores a U$200 y una garantía de devolución de dinero de
          30 días en todos nuestros productos.
        </p>
        <p>
          En GuitarLA, también creemos en la importancia de la educación
          musical. Por eso, ofrecemos una variedad de recursos y herramientas
          educativas en nuestro sitio web para ayudar a los guitarristas a
          mejorar sus habilidades y conocimientos. Nuestro equipo de expertos en
          guitarra también está disponible para responder preguntas y brindar
          asesoramiento a los clientes que lo necesiten.
        </p>
        <p>
          En resumen, en GuitarLA nos apasiona la guitarra y estamos
          comprometidos con brindar a nuestros clientes los mejores productos y
          servicios posibles. Si tiene alguna pregunta o necesita ayuda para
          encontrar el producto perfecto para usted, no dude en ponerse en
          contacto con nuestro equipo de atención al cliente. ¡Gracias por
          elegir GuitarLA!
        </p>
      </div>
    </main>
  );
}

export default Nosotros;
