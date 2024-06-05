import perfil from '../../imagens/perfil.svg';
import sacolas from '../../imagens/sacola.svg';
import './estilo.css';

const icones = [perfil, sacolas];

function IconesHeader() {
    return (
        <ul className='icones'>
          {
            icones.map( (icone) => (
              <li className='icone'>
                  <img src={icone} alt='icones do app'></img>
              </li>
            ))
          }
        </ul>
    )
}

export default IconesHeader;