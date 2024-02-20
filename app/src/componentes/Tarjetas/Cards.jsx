import React from 'react';
import './Cards.css';


const Cards = ({props}) => {

    //destructuring
    const{subtitulo,titulo, boton, imagen}=props


    return(
        <>

        <div className='cards-container'>

            <div className='card'>
                <div className='card-izq'>
                    <h3 className='card-subtitulo'>{subtitulo}</h3>
                    <h2 className='card-titulo'>{titulo}</h2>
                    <a href="#" className='card-btn'>{boton}</a>
                </div>

                <img src={imagen} alt="" className='card-imagen'/>
            </div>

        </div>     
        
        </>
    )
}

export { Cards }