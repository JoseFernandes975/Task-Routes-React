import './styles.css';
import imgHome from '../../assets/home-svgrepo-com 1.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
         <nav className='jf-container'>
          
          <div>
          <NavLink to={"/home"} className={({isActive}) => isActive ? "jf-active" : "jf-disable"} style={{marginRight:20}}>Início</NavLink>
          <NavLink to={"/products"} className={({isActive}) => isActive ? "jf-active" : "jf-disable"} style={{marginRight:20}} >Produtos</NavLink>
          <NavLink to={"/about"} className={({isActive}) => isActive ? "jf-active" : "jf-disable"}>Sobre nós</NavLink>
          </div>

           <Link to={'/home'}>
           <img src={imgHome} alt="Home" />
           </Link>
          
         </nav>
        </header>
    );
}