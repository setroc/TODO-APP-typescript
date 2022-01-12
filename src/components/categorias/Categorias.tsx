import styled from 'styled-components';

import Categoria from '../categoria/Categoria';

import { tipoCategoria } from '../../interfaces/categorias';

const CategoriasStyled = styled.div`
margin: 20px 0;
overflow: hidden;
h2 {
    margin-bottom: 15px;
}
> div {
    display: flex;
    overflow: scroll;
    gap: 15px;
    padding: 15px 0;
    padding-left: 10px;
}
`;
interface Props {
    categorias: tipoCategoria[];
    setCategorias: React.Dispatch<React.SetStateAction<tipoCategoria[]>>;
}
const Categorias = ({categorias, setCategorias}:Props) => {
    return (
        <CategoriasStyled>
            <h2>CATEGORIAS</h2>
            <div>
                {
                    categorias.map(categoria => (
                        <Categoria 
                            key={categoria.id} 
                            nombre={categoria.nombre}
                            color={categoria.color} 
                        />
                    ))
                }
            </div>
        </CategoriasStyled>
    )
}
export default Categorias;