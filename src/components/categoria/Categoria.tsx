import styled from 'styled-components';

const CategoriaStyled = styled.div`
z-index: 2;
padding: 15px;
border-radius: 15px;
min-width: 140px;
display: inline-block;
background-color: var(--background-card);
box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 20%);
p {
    margin-bottom: 10px;
}
h3 {
    padding-bottom: 7px;
    border-bottom: 2px solid ${props => props.color};
}
`;
interface Props {
    nombre: string;
    color: string;
}
const Categoria = ({nombre, color}:Props) => {
    return (
        <CategoriaStyled color={color} >
            <p>40 Tareas</p>
            <h3>{nombre}</h3>
        </CategoriaStyled>
    )
}
export default Categoria;