import React, {useState, useEffect} from "react"
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"

const formSection = styled.div``


// markup
const IndexPage = () => {
  const windowSize = useWindowSize();

  return (
    <>
    <dix>
      <h1>Hola bb</h1>
    </dix>
    <formSection>
      <h1>Bienvenido a Talentlook!</h1>
      <h2>
        Talentlook es una plataforma de conferencistas, talleristas y celebridades con un
        enfoque especial e innovador. Agradecemos mucho tu interés en ser parte de este
        gran proyecto.
      </h2>
      <form
        action= ""
        method= "POST"
      >
        <h3>Ayúdanos llenando el siguiente formato.Muchas gracias!</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>Información Personal.</h3>
        <textarea name='nombre' placeholder="Nombre" />
        <h3>Nombre y apellido.</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>Fecha de nacimiento.</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>Teléfono.</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>Estás considerando el poder impartir</h3>
        <select>
          <option>-Please select-</option>
          <option>Ponencia</option>
          <option>Taller</option>
          <option>Ambas</option>
          <option>Colaboraciones con marcas</option>
        </select>
        <h3>Lugar de resdiencia.</h3>
        <input type="text" name='nombre' placeholder="Nombre"  style={{fontFamily: 'M Medium', paddingLeft: '2%'}}/>
        <h3>Platícanos un poco de tu perfil y de los temas sobre los que podrías impartir tu plática o taller.</h3>
        <textarea name='nombre' placeholder="Nombre" />
        <h3>Tienes experiencia dando ponencias? Platícanos un poco al respecto.</h3>
        <textarea name='nombre' placeholder="Nombre" />
        <h3>Compártenos algún ejemplo de las charlas que hayas dado.</h3>
        <textarea name='nombre' placeholder="Nombre" />
        <h3>Compártenos tus redes sociales.</h3>
        <textarea name='nombre' placeholder="Nombre" />
        <h3>Compártenos los precios de tus ponencias, charlas o talleres.</h3>
        <select>
          <option>-Please select-</option>
          <option>De 5,000 a 15,000</option>
          <option>De 15,000 a 30,0000</option>
          <option>De 30,000 a 70,000</option>
          <option>De 70,000 a 10,000</option>
          <option>Más de 100,000</option>
        </select>
        <h3>Duración aproximada de tu ponencia o taller.</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>De qué manera podrías dar tu ponencia o taller?</h3>
        <select>
          <option>-Please select-</option>
          <option>Virtual</option>
          <option>Presencial</option>
          <option>Ambas</option>
        </select>
        <h2>Muchas gracias por querer ser parte de este gran proyecto!
            Te contactaremos en las próximas semanas para continuar con el diálogo.
        </h2>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
        
      </form>
    </formSection>
    </>
  )
}

export default IndexPage
