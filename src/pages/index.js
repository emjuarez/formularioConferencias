import React, {useState, useEffect} from "react"
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"
import "../css/typography.css"

const FormSection = styled.div`
background-color: #ffb71b;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

>div:nth-child(1) h1 {
  font-family: "RNS Sanz Black";
  text-align: center;
  
}
>div:nth-child(2) h2 {
  font-family: "RNS Sanz Bold";
  width:700px;
  text-align: center;
}
>div:nth-child(3) h3 {
  font-family: "RNS Sanz Semibold";
  
}
>div:nth-child(3) input ,select{
  font-family: "RNS Sanz Semibold";
  width:300px;
  height: 30px;
  border-radius: 7px
  
}
>div:nth-child(3) textarea {
  font-family: "RNS Sanz Semibold";
  width:300px;
  height: 70px;
  border-radius: 7px
  
}
>div:nth-child(3) h2{
  font-family: "RNS Sanz Bold";
  width:650px;
  text-align: center;
  margin-bottom:
  
}
>div:nth-child(3) form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
 
  
}
>div:nth-child(3) h2 {
  font-family: "RNS Sanz Bold";
  
}
@media only screen and (min-width: 1500px) {
      >div:nth-child(1) {
        width: 800px;
        font-size: 25px;
      }
      >div:nth-child(2) h2 {
        font-size: 30px;
        width:850px;  
      }
      >div:nth-child(3) h3 {
        font-size: 25px;
      }
      >div:nth-child(3) input ,select{
        width: 600px;
        height: 50px;
        font-size:25px;
      }
      >div:nth-child(3) textarea {
        width:600px;
        height: 200px;
        font-size:25px;        
      }
      >div:nth-child(3) h2{
        font-size: 30px;
        width:780px;
      }
    }
    @media only screen and (min-width: 2000px) {
      >div:nth-child(1) {
        font-size: 35px;
      }
      >div:nth-child(2) h2 {
        font-size: 40px;
        width:1150px;  
      }
      >div:nth-child(3) h3 {
        font-size: 35px;
      }
      >div:nth-child(3) input ,select{
        width: 800px;
        height: 70px;
        font-size:30px;
      }
      >div:nth-child(3) textarea {
        width: 800px;
        height: 300px;
        font-size: 30px;        
      }
      >div:nth-child(3) h2{
        font-size: 40px;
        width:1020px;
      }
    }
`


// markup
const IndexPage = () => {
  const windowSize = useWindowSize();

  return (
    <>
    <FormSection>
    <div>
      <h1>Bienvenido a Talentlook!</h1>
    </div>
    <div>
      <h2>
        Talentlook es una plataforma de conferencistas, talleristas y celebridades con un
        enfoque especial e innovador. Agradecemos mucho tu interés en ser parte de este
        gran proyecto.
      </h2>
    </div>
    <div>
      <form
        action= ""
        method= "POST"
      >
        <h3>Ayúdanos llenando el siguiente formato.Muchas gracias!</h3>
        <h3>Nombre</h3>
        <input type="text" name='nombre' placeholder="Nombre" />
        <h3>Información Personal.</h3>
        <textarea name='infpersonal' placeholder="Informacion personal" />
        <h3>Nombre y apellido.</h3>
        <input type="text" name='nombreYApellido' placeholder="Nombre y apellido" />
        <h3>Fecha de nacimiento.</h3>
        <input type="text" name='fechaDeNacimiento' placeholder="Fecha de nacimiento" />
        <h3>Teléfono.</h3>
        <input type="text" name='telefono' placeholder="Teléfono" />
        <h3>Estás considerando el poder impartir</h3>
        <select>
          <option>-Please select-</option>
          <option>Ponencia</option>
          <option>Taller</option>
          <option>Ambas</option>
          <option>Colaboraciones con marcas</option>
        </select>
        <h3>Lugar de resdiencia.</h3>
        <input type="text" name='residencia' placeholder="Lugar de residencia"  style={{fontFamily: 'M Medium', paddingLeft: '2%'}}/>
        <h3>Platícanos un poco de tu perfil y de los temas sobre los que podrías impartir tu plática o taller.</h3>
        <textarea name='perfil' placeholder="" />
        <h3>Tienes experiencia dando ponencias? Platícanos un poco al respecto.</h3>
        <textarea name='experiencia' placeholder="" />
        <h3>Compártenos algún ejemplo de las charlas que hayas dado.</h3>
        <textarea name='charlas' placeholder="" />
        <h3>Compártenos tus redes sociales.</h3>
        <textarea name='redes' placeholder="Redes sociales" />
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
        <input type="text" name='duracion' placeholder="Duración" />
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
      </div>
    </FormSection>
    </>
  )
}

export default IndexPage
