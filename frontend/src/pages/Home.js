import React from "react";
import '../../src/syles/components/pages/Home.css'
import avion from'../img/home/img01.jpg'

const HomePage = (props) =>{
    return(
        <main className = "holder">
        <div className="homeimg">
            <img src={avion} alt="avion" />
        </div>
        <div className ="columnas">
        <div className = "bienvenidos left">
        <h2>Welcome</h2>
        <p>Bienvenidos a la pagina de transportesX, Somos una empresa que se dedica a la 
            circulacion de noticias, proveemos servicios de transportes a empresas de carga y manufactura para poder 
            transportar sus productos de manera eficaz, tambien asesoramos a grandes empresas sobre sus transportes, sea mejoras,
            nuevas rutas o implementaciones de nuevos medios de transporte.
        </p>
        <p>Llevamos mas de 20 años de trayectoria, Para mas informacion accede a nuestro sitio de contacto o novedades, si queres saber mas de nosotros, consulta en la seccion de nosotros.
        </p>
        </div>
        <div className = "testimonios right">
            <h2>Testimonios</h2>
            <div className ="testimonio">
                <span className = "cita">Simplemente excelente</span>
                <span className ="autor">GV-AIRPLANES aeroilneasGV.com</span>
            </div>
        </div>
        </div>
            </main>
    );
}

export default HomePage;

