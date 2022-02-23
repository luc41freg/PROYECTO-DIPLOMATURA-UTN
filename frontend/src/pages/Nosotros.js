import React from "react";
import '../../src/syles/components/pages/Nosotros.css'
import nosotros1 from '../img/nosotros/nosotros1.jpg'
import nosotros2 from '../img/nosotros/nosotros2.jpg'
import nosotros3 from '../img/nosotros/nosotros3.jpg'
import nosotros4 from '../img/nosotros/nosotros4.jpg'
import nosotros5 from '../img/nosotros/nosotros5.jpg'

const NosotrosPage = (props) =>{
    return(
        <section className = "holder">
        <div className = "historia">
            <h2>Historia</h2>
            <p>20 años de trayectoria asesorando a grandes empresas dentro del rubro de transportes, confian en nosotros GV, MVB Y GDF</p>

        </div>
        <div className = "staff">
            <h2>Staff</h2>
            <div className = "personas">
                <div className = "persona">
                    <img src={nosotros1} alt="juan gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Juan es el gerente general de nuestra empresa, 
                        es graduado de la carrera de Administracion de Empresas, 
                        es el encargado de supervisar las demas gerencias</p>
                </div>
                <div className = "persona">
                    <img src={nosotros2} alt="juan gomez" />
                    <h5>Lorena Gonzalez</h5>
                    <h6>Gerente Administrativa</h6>
                    <p>Lorena es la gerenta administrativa de nuestra empresa, 
                        es graduada de la carrera de Administracion de Empresas, 
                        es la encargada de supervisar el area administrativa</p>
                </div>
                <div className = "persona">
                    <img src={nosotros3} alt="juan gomez" />
                    <h5>Raul Perez</h5>
                    <h6>Gerente comercial</h6>
                    <p>Raul es el gerente comercial de nuestra empresa, 
                        es graduado de la carrera de Licenciatura en marketing, 
                        es el encargado de supervisar el area comercial y actualizar los precios</p>
                </div>
                <div className = "persona">
                    <img src={nosotros4} alt="juan gomez" />
                    <h5>Romina Castro</h5>
                    <h6>Gerente ejecutiva</h6>
                    <p>Romina es la gerenta ejecutiva de nuestra empresa, 
                        es graduada de la carrera de Abogacia, 
                        es la encargada de supervisar el area ejecutiva y informar actualizaciones legales</p>
                </div>
                <div className = "persona">
                    <img src={nosotros5} alt="juan gomez" />
                    <h5>Esteban Llodo</h5>
                    <h6>Community Manager</h6>
                    <p>Esteban es el Community Manager de nuestra empresa, 
                        es graduado de la carrera de Comunicaciones, 
                        es el encargado administrar nuestras publicaciones y responder a nuestros clientes</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default NosotrosPage;