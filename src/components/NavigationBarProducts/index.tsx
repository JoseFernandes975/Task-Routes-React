import './styles.css';
import { NavLink } from "react-router-dom";

export default function NavigationBar(){
return(

    <div className="jf-bar-nav-container-products">
    <NavLink to={"computers"} className={({isActive}) => isActive ? "jf-active" : "jf-bar-normal"} style={{marginRight: 20}}>Computadores</NavLink>
    <NavLink to={"eletronics"} className={({isActive}) => isActive ? "jf-active" : "jf-bar-normal"} style={{marginRight: 20}} >Eletrônicos</NavLink>
    <NavLink to={"books"} className={({isActive}) => isActive ? "jf-active" : "jf-bar-normal"}>Livros</NavLink>
    </div>
 );
}