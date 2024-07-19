import React from 'react';
//Importar Componetes
 
import HeaderComponent from '../components/Layouts/HeaderComponent';
import AboutComponent from '../components/Layouts/AboutComponent/AboutComponent';
import FeaturesComponent from '../components/AboutComponents/FeatureComponent/FeatureComponent';
import TeamComponent from '../components/AboutComponents/TeamComponent/TeamComponent';

//Importar Imagenes

import imgAbout from '../assets/img/about.jpg';
import imgFeature from '../assets/img/feature.jpg'
import imgDriver from '../assets/img/imgTruckDriver.png';
import imgTeam1 from '../assets/img/team-1.jpg'
import imgTeam2 from '../assets/img/team-2.jpg'
import imgTeam3 from '../assets/img/team-3.jpg'
import imgTeam4 from '../assets/img/team-4.jpg'


const AboutScreen = () => {
  const listItems = ["Los Mejores en la Industria", "Servicios de Emergencia", "Soporte al Cliente 24/7"];
  return (
    <div >
        <HeaderComponent
        title="Quienes Somos"
        subtitle1="Pasión por el transporte"
        subtitle2="Excelencia en el servicio"
      />
        <AboutComponent
        imageSrc = {imgAbout}
        title="Proveedor de Servicios Logísticos Confiables y Rápidos"
        subtitle="Sobre Nosotros"
        description="[Nombre de la Asociación] se destaca por más de 25 años de experiencia en el sector logístico. Nuestra misión es ofrecer soluciones de transporte innovadoras y eficientes, comprometiéndonos con la excelencia y la sostenibilidad. La visión de nuestra asociación es ser líderes en logística, ampliando nuestras fronteras y estableciendo estándares de alta calidad en el servicio. Valoramos la seguridad, la confiabilidad y la atención personalizada a cada uno de nuestros clientes."
        videoSrc="https://www.youtube.com/watch?v=WUXWWTl8fjI" 
        />
    <div className="container-fluid bg-secondary my-5">
        <div className="container">
        <FeaturesComponent 
            imgSrc={imgFeature}
            title="Por Qué Elegirnos"
            subtitle="Servicios de Transporte Rápidos, Seguros y de Confianza"
            description="En nuestra asociación, nos dedicamos a ofrecer servicios de transporte de la más alta calidad. Con una flota moderna y conductores experimentados, garantizamos entregas seguras y puntuales. Nuestro compromiso es con la seguridad y la satisfacción del cliente, asegurando que cada envío llegue a su destino en las mejores condiciones. Nos esforzamos por mantener la excelencia en cada kilómetro recorrido, brindando soluciones de logística confiables para todos nuestros clientes."
            listItems={listItems}
            buttonText="Aprender Más"
        />
        <FeaturesComponent 
            imgSrc={imgDriver}
            title="¿POR QUÉ TRABAJAR CON HOMBRES CAMIÓN?"
            subtitle="Flexibilidad, Eficiencia y Compromiso Personalizado"
            description="Trabajar con hombres camión ofrece una experiencia única y personalizada en el transporte de mercancías. Su flexibilidad y capacidad de adaptarse a necesidades específicas proporcionan una solución eficiente para todo tipo de envíos. Su compromiso con el servicio personalizado asegura que cada entrega se maneje con el mayor cuidado y profesionalismo, garantizando la satisfacción del cliente en cada paso del proceso."   
            
            listItems={listItems}
            buttonText="Descubre Más"
        />
        </div>
    </div>
    <h2 className="text-center text-primary">Delegados Actuales</h2>
        <div className="container-fluid pt-5">
        
            <div className="container">
                <div className="row">
                
                <TeamComponent
                    name="Carlos Rivera"
                    role="Delegado de la Zona Norte (Tijuana, Baja California)"
                    imgSrc={imgTeam1}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                <TeamComponent
                    name="Jorge Martínez"
                    role="Delegado de la Zona Sur (Mérida, Yucatán)"
                    imgSrc={imgTeam2}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                <TeamComponent
                    name="Sofía López"
                    role="Delegada de la Zona Occidental (Guadalajara)"
                    imgSrc={imgTeam3}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                <TeamComponent
                    name="Luis Hernández"
                    role="Delegado de la Zona Oriental (Veracruz)"
                    imgSrc={imgTeam4}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                </div>
            </div>
        </div>

    </div>
  );
};

export default AboutScreen;
