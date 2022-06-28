import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Multiple from "../components/perfil/multipleOption"
import "../css/typography.css"

const initialList = []



const FormSection = styled.div`

background-color: #ffb71b;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

>div:nth-child(1) h1 {
  font-family: "RNS Sanz Black";  
}
>div:nth-child(2)  form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
}
>div:nth-child(2) h3 {
  font-family: "RNS Sanz Semibold";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
>div:nth-child(2) input ,select{
  font-family: "RNS Sanz Semibold";
  width:300px;
  height: 30px;
  border-radius: 7px 
}
>div:nth-child(2) textarea {
  font-family: "RNS Sanz Semibold";
  width:300px;
  height: 70px;
  border-radius: 7px
  
}
`

const PerfilPage = () => {
    const [list, setList] = React.useState(initialList);
    function handleChange(){}
    function handleSubmit(){}

    return(
        <>
        <FormSection>
            <div>
                <h1>Registro</h1>
            </div>
            <div>
                <form>
                    <div>
                        <h3>Nombre y apellido.</h3>
                        <input type="text" name='nombre' placeholder="Nombre" />
                    </div>
                    <div>
                        <h3>Biografía</h3>
                        <textarea name='nombre' placeholder="Nombre" />
                    </div>
                    <div>
                        <h3>Highlights</h3>
                        <Multiple/>
                    </div>
                    <div>
                        <h3>Dato curioso</h3>
                        <textarea name='nombre' placeholder="Nombre" />
                    </div>
                    <div>
                        <h3>Lista de conferencias que podrías impartir.</h3>
                        <Multiple/>
                    </div>
                    <div>
                        <h3>Ligas de videos de conferencias que ya hayas impartido</h3>
                        <Multiple/>
                    </div>
                    <div>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </FormSection>
        </>
    )
}

export default PerfilPage