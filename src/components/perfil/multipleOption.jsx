import React, {useState} from "react"
import {nanoid} from "nanoid"

const MultipleComponent = () => {

  const[newAnswer, setNewAnswer] = useState({
    content:"",
  })
  const[list, setList] = useState([])
  const [error, setError] = useState("")

  const handleChange = (event) => {
    
    setNewAnswer({
			...newAnswer, // spread operator ES6+ - Object Assign
			id: nanoid(),
		 	[event.target.name]: event.target.value
		})

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
  

  return (
    <>
      <form onSubmit={(evt) => {handleSubmit(evt)}}>
        <input onChange={ evt => { handleChange(evt) }}/>
        <div>
          <button type="submit">Añadir</button>
        </div>
      </form>
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
