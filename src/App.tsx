import { useState } from 'react';
import styled from 'styled-components';

import Agregar from './components/agregar/Agregar';
import Categorias from './components/categorias/Categorias';
import Modal from './components/modal/Modal';
import Tareas from './components/tareas/Tareas';

import { tipoCategoria } from './interfaces/categorias';
import { tipoTarea } from './interfaces/tareas';

const AppStyled = styled.div`
max-width: 425px;
height: 100%;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
overflow: hidden;
height: 100%;

`;

const initialCategorias: tipoCategoria[] = [
    {
        id: 1,
        nombre: 'Escuela',
        color: 'blue'
    },
    {
        id: 2,
        nombre: 'Trabajo',
        color: 'red'
    },
];

const initialTareas: tipoTarea[] = [];
function App() {

    const [categorias, setCategorias] = useState<tipoCategoria[]>(initialCategorias);
    const [tareas, setTareas] = useState<tipoTarea[]>(initialTareas);

    const [modal, setModal] = useState<boolean>(false);
    return (
        <AppStyled>
            <h1>Hola, Isaac.</h1>
            <Categorias categorias={categorias} setCategorias={setCategorias} />
            <Tareas tareas={tareas} setTareas={setTareas} />
            <Agregar setModal={setModal} />
            {
                modal && <Modal setModal={setModal} setTareas={setTareas}/>
            }
        </AppStyled>
    );
}

export default App;
