import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { tipoTarea } from '../../interfaces/tareas';
import NuevaTarea from '../nuevaTarea/NuevaTarea';

const ModalStyled = styled.div`
background-color: var(--background);
position: fixed;
top: 0px;
left: 0px;
right: 0px;
bottom: 0px;
color: white;
z-index:2;
width: 100%;

display: grid;
place-items: center;

> div {
    position: fixed;
    border: 1px solid var(--subtitle);
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 50%;
    color: black;
}
`;

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setTareas: React.Dispatch<React.SetStateAction<tipoTarea[]>>;
}
const Modal = ({setModal, setTareas}:Props) => {
    const handleClick = () => {
        setModal(false);
    }
    return ReactDOM.createPortal(
        <ModalStyled>
            <div onClick={handleClick}>
                <i className="fas fa-times"></i>
            </div>
            <NuevaTarea setTareas={setTareas} setModal={setModal} />
        </ModalStyled>,
        document.getElementById('modal')! 
    );
}

export default Modal;