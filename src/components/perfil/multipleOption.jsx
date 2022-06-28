import React, {useState} from "react"
import Cross from "../../images/Delete-Button-PNG-File-Download-Free.webp"
import styled from "styled-components"

const AnswerSection = styled.div`

>div:nth-child(2) p {
  font-family: "RNS Sanz Bold";
  
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
							<div>
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
