import './App.css'
import { Cards } from './componentes/Tarjetas/Cards'
import imagen1 from './assets/zapatillas.jpg';
import imagen2 from './assets/descuento.jpg';
import imagen3 from './assets/parlante.jpg';
import imagen4 from './assets/pelicula.jpg';

function App() {

  const contenidoCards=[
    {id: 1, subtitulo:'¡IMPERDIBLES!', titulo:'DESCUBRÍ TODAS LAS NOVEDADES', boton:'Ver ofertas', imagen: imagen1},
    {id: 1, subtitulo:'CUPONERA', titulo:'¡DESCUENTOS ACUMULABLES!', boton:'Canjeá tu cupón', imagen: imagen2},
    {id: 1, subtitulo:'¡NO TE LAS PIERDAS!', titulo:'OFERTAS SOLO POR 24 HORAS', boton:'Ver más', imagen: imagen3},
    {id: 1, subtitulo:'MERCADO PLAY', titulo:'SERIES, PELÍCULAS Y MÁS ¡GRATIS!', boton:'Ver ahora', imagen: imagen4}
  ]

  return (
    <>
    <div className='contenedor-tarjeta'>
      {contenidoCards.map((contenido)=>(
        <Cards key={contenido.id} props={contenido}/>
      ))}

    </div>
    
    </>
  )
}

export default App

