import React, {useState} from "react"
import {nanoid} from "nanoid"

const MultipleComponent = (props) => {

  const[newAnswer, setNewAnswer] = useState({
    content:"",
  })
  const [respuesta, setRespuesta] = useState("")
  const[list, setList] = useState([])
  const [error, setError] = useState("")

  const handleChange = (event) => {

    console.log('avgeerrr', event.target.value)
    
    setRespuesta(`${event.target.value}`)

  }

  const handleSubmit = (event) => {

    event.preventDefault() // DETENER LA RECARGA DE PÁGINA

		if(!newAnswer) {

			setError("Existe un campo vacío. Por favor, verifica nuevamente.")

			return

		}

		setList([
			...list,
			newAnswer
		])

		setNewAnswer({
      content:"",
    })

		setError("")

  }

  const addAnswer = () => {

    console.log('respuesta', respuesta)

    setList([
      ...list,
      respuesta
    ])
  }
  

  return (
    <>
        <input onChange={ evt => { handleChange(evt) }}/>
        <div>
          <p onClick={() => addAnswer()} style={{cursor: "pointer"}}>Añadir</p>
        </div>
        {	list.map((elt, index) => {
						return (
							<div className="mb-4 bg-blue-600 text-white" key={index}>
								<p>{elt}</p>
							</div>
					  )
			  })
      }
    </>
  )
}

export default MultipleComponent
