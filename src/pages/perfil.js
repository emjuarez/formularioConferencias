import React, {useState, useEffect} from "react"
import Multiple from "../components/perfil/multipleOption"

const initialList = []

const PerfilPage = () => {
    const [list, setList] = React.useState(initialList);
    function handleChange(){}
    function handleSubmit(){}

    return(
        <>
            <h1>Registro</h1>
            <form>
                <h3>Nombre y apellido.</h3>
                <input type="text" name='nombre' placeholder="Nombre" />
                <h3>Biografía</h3>
                <textarea name='nombre' placeholder="Nombre" />
                <h3>Highlights</h3>
                <Multiple/>
                <h3>Dato curioso</h3>
                <textarea name='nombre' placeholder="Nombre" />
                <h3>Lista de conferencias que podrías impartir.</h3>
                <Multiple/>
                <h3>Ligas de videos de conferencias que ya hayas impartido</h3>
                <Multiple/>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default PerfilPage