import React, {useState} from "react"
import Cross from "../../images/Delete-Button-PNG-File-Download-Free.webp"
import styled from "styled-components"

const AnswerSection = styled.div`

.listAnwers{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 600px;
}

>div:nth-child(1)  {
  font-family: "RNS Sanz Bold";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
>div:nth-child(2) p {
  font-family: "RNS Sanz Bold";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
>div:nth-child(3) p {
  font-family: "RNS Sanz Semibold";  
  margin-right: 60px;
}
>div:nth-child(3) img {
  width:30px;
  margin
  
}
@media only screen and (min-width: 1500px) {

>div:nth-child(2) p {
    font-size: 25px;
  }
  >div:nth-child(3) p {
    font-size: 30px;
  }
  >div:nth-child(3) img {
    width: 45px;
  }

}
@media only screen and (min-width: 2000px) {

>div:nth-child(2) p {
    font-size: 30px;
  }
  >div:nth-child(3) p {
    font-size: 35px;
  }
  >div:nth-child(3) img {
    width: 55px;
  }

}

`

const MultipleComponent = (props) => {

  const [respuesta, setRespuesta] = useState("")
  const [list, setList] = useState([])
  
  const handleChange = (event) => {
    
    setRespuesta(`${event.target.value}`)

  }

  const addAnswer = () => {

    console.log('respuesta', respuesta)
    
    
    setList([
      ...list,
      respuesta
    ])
    console.log(list)
  }


  const deleteAnswer = (elt) => {

    setList(list.filter(item => item !== elt))
  }
  

  return (
    <>
    <AnswerSection>
        <div>
          <input onChange={ evt => { handleChange(evt) }}/>
        </div>
        <div>
          <p onClick={() => addAnswer()} style={{cursor: "pointer"}}>Añadir</p>
        </div>
        <div>
        {	list.map((elt, index) => {
						return (
							<div className="listAnwers">
								<p>{elt}</p>
                
                <img onClick={() => deleteAnswer(elt)} src={Cross} alt="delete"/>
                
							</div>
					  )
			  })
      }
      </div>
      </AnswerSection>
    </>
  )
}

export default MultipleComponent
