import React, { useState } from "react";
import styled from "styled-components";
import { tipoTarea } from "../../interfaces/tareas";

const NuevaTareaStyled = styled.form`
width: 80%;
> button {
    background-color: var(--blue);
    color: white;
    font-size: 2rem;
    display: inline-block;
    width: auto;
    border-radius: 20px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 14px 40px;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 20%);
    border: none;
}
> input {
    width: 100%;
    border: none;
    font-size: 3rem;
    background-color: var(--background);
    &:focus {
        outline: none;
    }
}
`;

interface Props {
    setTareas: React.Dispatch<React.SetStateAction<tipoTarea[]>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const NuevaTarea = ({setTareas, setModal}:Props) => {
    const [texto, setTexto] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setTexto(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (texto.trim().length>0) {

            const nueva:tipoTarea = {
                id: Number(new Date()),
                texto,
                categoria: 'Escuela',
                completado: false
            }
            setTareas(ant => [...ant, nueva]);
            setModal(false);
        }
    }
    return (
        <NuevaTareaStyled>
            <input 
                type="text" 
                name="tarea" 
                id="tarea" 
                placeholder="Crear nueva tarea"
                value={texto}
                onChange={handleInputChange}

                required
            />
            <button onClick={handleSubmit}>Nueva Tarea</button>
        </NuevaTareaStyled>
    )
}

export default NuevaTarea;