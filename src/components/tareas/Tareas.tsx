import styled from 'styled-components';

import Tarea from '../tarea/Tarea';

import { tipoTarea } from '../../interfaces/tareas';

const TareasStyled = styled.div`
width: 100%;
flex: 1;
overflow: hidden;
height: 100%;
display: flex;
flex-direction:column;
h2 {
    margin-bottom: 15px;
}
> div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    overflow-y: scroll;
    flex: 1;
}
`;
interface Props {
    tareas: tipoTarea[];
    setTareas: React.Dispatch<React.SetStateAction<tipoTarea[]>>;
}
const Tareas = ({tareas, setTareas}:Props) => {

    return (
        <TareasStyled>
            <h2>TAREAS</h2>
            <div>
                {
                    tareas.map(tarea => (
                        <Tarea 
                            key={tarea.id} 
                            categoria={tarea.categoria}
                            texto={tarea.texto}
                            completado={tarea.completado}
                            id={tarea.id}
                            setTareas={setTareas}
                        />
                    ))
                }
            </div>
        </TareasStyled>
    )
}
export default Tareas;