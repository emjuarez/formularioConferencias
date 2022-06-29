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
>div:nth-child(2) form {
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
  text-align: center;
}
>div:nth-child(2) input{
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
>div:nth-child(2) button{
  font-family: "RNS Sanz Semibold";
  background-color: white;
  border-color: gray;
  border-radius: 7px;
  width: 100px;
  height: 40px;
  font-size: 18px;
  margin: 50px;
}
  @media only screen and (min-width: 1500px) {

      >div:nth-child(1) h1 {
          font-size: 45px;
      }
      >div:nth-child(2) h3 {
          font-size: 25px;
        }
        >div:nth-child(2) input {
          width: 600px;
          height: 50px;
          font-size: 25px;
        }
        >div:nth-child(2) textarea {
          width: 600px;
          height: 150px;
          font-size: 25px;
        }
        >div:nth-child(2) button{
        width: 170px;
        height: 60px;
        font-size: 30px;
      }
  }
  @media only screen and (min-width: 2000px) {

    >div:nth-child(1) h1 {
        font-size: 65px;
    }
    >div:nth-child(2) h3 {
        font-size: 35px;
    }
    >div:nth-child(2) input {
      width: 700px;
      height: 60px;
      font-size: 30px;
    }
    >div:nth-child(2) textarea {
      width: 700px;
      height: 250px;
      font-size: 30px;
    }

  }
  @media only screen and (max-width: 1500px){
    >div:nth-child(1) h1 {
      font-size: 55px;
    }
    >div:nth-child(2) h3 {
      font-size: 30px;
      margin-top: 40px;
    }
    >div:nth-child(2) input {
      width: 800px;
      height: 50px;
      font-size: 20px;
      border-radius: 17px 
    }
    >div:nth-child(2) textarea {
      width: 800px;
      height: 300px;
      font-size: 20px;
      border-radius: 17px 
    }
    >div:nth-child(2) button{
        width: 120px;
        height: 50px;
        font-size: 25px;
      }
  }
  @media only screen and (max-width: 885px){
    >div:nth-child(1) h1 {
      font-size: 55px;
    }
    >div:nth-child(2) h3 {
      font-size: 20px;
    }
    >div:nth-child(2) input {
      width: 500px;
      height: 40px;
      font-size: 20px;
    }
    >div:nth-child(2) textarea {
      width: 500px;
      height: 200px;
      font-size: 20px;
    }
    >div:nth-child(2) button{
        width: 120px;
        height: 50px;
        font-size: 25px;
      }
  }
  @media only screen and (max-width: 736px){
    >div:nth-child(2) h3 {
      font-size: 20px;
    }
    >div:nth-child(2) input {
      width: 500px;
      height: 40px;
      font-size: 20px;
    }
    >div:nth-child(2) textarea {
      width: 500px;
      height: 200px;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 570px){
    >div:nth-child(1) h1 {
      font-size: 45px;
    }
    >div:nth-child(2) h3 {
        font-size: 25px;
    
    }
    >div:nth-child(2) input {
      width: 450px;
      height: 40px;
      font-size: 20px;
    }
    >div:nth-child(2) textarea {
      width: 450px;
      height: 150px;
      font-size: 20px;
    }
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
                        <button type="submit">enviar</button>
                    </div>
                </form>
            </div>
        </FormSection>
        </>
    )
}

export default PerfilPage