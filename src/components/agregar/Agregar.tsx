import styled from 'styled-components';
const AgregarStyled = styled.div`
background-color: var(--blue);
color: white;
font-size: 3rem;
display: inline-block;
width: auto;
border-radius: 50%;
position: absolute;
bottom: 20px;
right: 20px;
padding: 8px 14px;
box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 20%);
`;

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Agregar = ({setModal}:Props) => {
    const handleClick = () => {
        setModal(true);
    }
    return (
        <AgregarStyled onClick={handleClick}>
            <i className="fas fa-plus"></i>
        </AgregarStyled>
    )
}

export default Agregar
