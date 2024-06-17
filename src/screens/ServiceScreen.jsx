import React from 'react';
// Importarcioes de Componentes

import HeaderComponent from '../components/ServiceComponents/HeaderComponent/HeaderComponent';
import TeamCardComponent from '../components/ServiceComponents/TeamComponents/TeamCardComponent';

//Importaciones de Imagenes

import imgTeam1 from '../assets/img/imgAlejandroGomez.png'
import imgTeam2 from '../assets/img/imgBajioFreight.png'
import imgTeam3 from '../assets/img/imgSierraMadre.png'
import imgTeam4 from '../assets/img/imgCarmenTorres.png'
import imgTeam5 from '../assets/img/imgJoseLuis.png'
import imgTeam6 from '../assets/img/imgLauraHernandez.png'
import imgTeam7 from '../assets/img/imgLogisticaAzteca.png'
import imgTeam8 from '../assets/img/imgMexicoCentral.png'
import imgTeam9 from '../assets/img/imgMiguelAngel.png'
import imgTeam10 from '../assets/img/imgNorteñoLogistics.png'
import imgTeam11 from '../assets/img/imgPacificoCargo.png'
import imgTeam12 from '../assets/img/imgPatriciaJuarez.png'
import imgTeam13 from '../assets/img/imgRobertoSanchez.png'
import imgTeam14 from '../assets/img/imgRutasSur.png'
import imgTeam15 from '../assets/img/imgTranspeninsular.png'
import imgTeam16 from '../assets/img/imgTranportesVeracruz.png'
import imgTeam17 from '../assets/img/imgTranportesMayas.png'

const ServiceScreen = () => {
  return (
    <div>
      <HeaderComponent/>
      <div className="container-fluid pt-5">
            <div className="container">
                <div className="row">
                    <TeamCardComponent 
                        nombre="Alejandro Gómez" 
                        zona="Zona Sureste (Tuxtla Gutiérrez, Chiapas)" 
                        imgSrc= {imgTeam1}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Bajío Freight Co." 
                        zona="Zona Bajío (León, Guanajuato)" 
                        imgSrc= {imgTeam2}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Carga Sierra Madre, S.R.L." 
                        zona="Zona Norte (Chihuahua, Chihuahua)" 
                        imgSrc= {imgTeam3}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Carmen Torres" 
                        zona="Zona Occidental (Guadalajara, Jalisco)" 
                        imgSrc= {imgTeam4}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="José Luis Ramírez" 
                        zona="Zona Norte (Monterrey, Nuevo León)" 
                        imgSrc= {imgTeam5}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Laura Hernández<" 
                        zona="Zona Centro (Puebla, Puebla)" 
                        imgSrc= {imgTeam6}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Logística Azteca S.A. de C.V." 
                        zona="Zona Centro (Ciudad de México, D.F.)" 
                        imgSrc= {imgTeam7}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="México Central Logistics" 
                        zona="Zona Central (Puebla, Puebla)" 
                        imgSrc= {imgTeam8}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Miguel Ángel Vega" 
                        zona="Zona Sur (Oaxaca, Oaxaca)" 
                        imgSrc= {imgTeam9}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Norteño Logistics Co." 
                        zona="Zona Noreste (Monterrey, Nuevo León)" 
                        imgSrc= {imgTeam10}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Pacifico Cargo Solutions" 
                        zona="Zona Occidental (Mazatlán, Sinaloa)" 
                        imgSrc= {imgTeam11}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Patricia Juárez" 
                        zona="Zona Noreste (Saltillo, Coahuila)" 
                        imgSrc= {imgTeam12}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Roberto Sánchez" 
                        zona="Zona Peninsular (Mérida, Yucatán)" 
                        imgSrc= {imgTeam13}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Rutas del Sur Transportes" 
                        zona="Zona Sur (Oaxaca, Oaxaca)" 
                        imgSrc= {imgTeam14}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Transpeninsular Mérida, S.L." 
                        zona="Zona Peninsular (Mérida, Yucatán)" 
                        imgSrc= {imgTeam15}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="TransVeracruz, S.A. de C.V" 
                        zona="Zona Oriental (Veracruz, Veracruz)" 
                        imgSrc= {imgTeam16}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />
                    <TeamCardComponent 
                        nombre="Transportes Mayas Express, S.A." 
                        zona="Zona Sureste (Cancún, Quintana Roo)" 
                        imgSrc= {imgTeam17}
                        twitterUrl="#"
                        facebookUrl="#"
                        linkedinUrl="#"
                        instagramUrl="#"
                    />     
                </div>
            </div>
        </div>
    </div>
  );
}

export default ServiceScreen;
