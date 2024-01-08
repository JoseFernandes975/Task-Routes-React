import './styles.css';
import { Outlet } from "react-router-dom";
import NavigationBarProducts from '../../../components/NavigationBarProducts';


export default function Products() {
    return(
       <main>
        <section id="jf-section-products" className="jf-container">

         <NavigationBarProducts />

          <Outlet />

        </section>
       </main>

    );
}