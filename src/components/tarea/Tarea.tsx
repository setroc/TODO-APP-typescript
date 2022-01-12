import styled from 'styled-components';

import { tipoTarea } from '../../interfaces/tareas';

const TareaStyled = styled.div`
background-color: var(--background-card);
border-radius: 10px;
display: flex;
align-items: center;
padding: 15px;
gap: 10px;
> div {
    border: 2px solid blue;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
> div.realizado {
    border: 2px solid var(--subtitle);
    background-color: var(--subtitle);
}
> p.realizado {
    text-decoration:line-through;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--subtitle);
    color: var(--subtitle);
}
`;
interface Props {
    id: number;
    categoria: string;
    texto: string;
    completado: boolean;
    setTareas: React.Dispatch<React.SetStateAction<tipoTarea[]>>;
}
const Tarea = ({texto, categoria, completado, id, setTareas}:Props) => {
    const handleClick = (e:any) => {
        setTareas((ant)=>(ant.map(tarea=>{
            if (tarea.id === id) {
                tarea.completado = !tarea.completado;
            }
            return tarea;
        })))
    }
    return (
        <TareaStyled onClick={handleClick}>
            <div className={completado ? 'realizado' : ''}></div>
            <p className={completado ? 'realizado' : ''}>{texto}</p>
        </TareaStyled>
    )
}
export default Tarea;