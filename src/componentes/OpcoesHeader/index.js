import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    display: flex;
    font-size: 16px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <Opcoes>
          {
            textoOpcoes.map( (texto) => (
              <Opcao><p>{texto}</p></Opcao>
            )
          )}
        </Opcoes>
    )
}

export default OpcoesHeader;