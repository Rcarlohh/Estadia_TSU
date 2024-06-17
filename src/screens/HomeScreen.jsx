import React from 'react';
//Importacion de Componentes

import HeaderComponent from '../components/Layouts/HeaderComponent.jsx';
import ServiceComponent from '../components/HomeComponents/ServiceComponents/ServicesComponent.jsx';
import AboutComponent from '../components/Layouts/AboutComponent/AboutComponent.jsx'
import CardComponent from '../components/HomeComponents/CardComponent/CardComponent.jsx';
import TestimonialComponent from '../components/HomeComponents/CarrouselCompent/TestimonialComponent.jsx';
import BlogComponent from '../components/HomeComponents/BlogComponent/BlogComponent.jsx';
import JoinComponent from '../components/HomeComponents/JoinComponent/JoinComponent.jsx';
import ScrollButtonComponent from '../components/Layouts/ScrollButton/ScrollButtonComponent.jsx';

//Importacion de Imagenes

import imgTypeTransport from '../assets/img/ServiceTrucks.png';
import imgRoute from '../assets/img/ServiceMapMexixco.png';
import imgAbout from '../assets/img/about.jpg';
import imgCredit from '../assets/img/ImgCredit.png';
import imgReport from '../assets/img/ImgReport.png';
import imgTestimonial1 from '../assets/img/testimonial-1.jpg';
import imgTestimonial2 from '../assets/img/testimonial-2.jpg';
import imgBlog1 from '../assets/img/blog.jpg'
import imgBlog2 from '../assets/img/blog2.png'



const HomeScreen = () => {
    const serviciosData = [
        { 
            title: "Tipos de Transporte", 
            imgSrc: imgTypeTransport, 
            description: "En [Nombre de la Asociación], ofrecemos una variedad de opciones de transporte para satisfacer todas las necesidades logísticas:",
            listItems: [
                { title: "Carga General", description: "Transporte versátil para una amplia gama de mercancías." },
                { title: "Refrigerado", description: "Soluciones especializadas para productos perecederos." },
            ]
        },
        { 
            title: "Rutas", 
            imgSrc: imgRoute, 
            description: "En Asociación, cubrimos una amplia gama de rutas a lo largo de México. Nuestras rutas principales incluyen:",
            listItems: [
                { title: "Ruta del Pacífico", description: "Conectando el noroeste con el centro del país, ideal para envíos hacia y desde la costa del Pacífico." },
                { title: "Ruta del Golfo", description: "Abarcando desde el noreste hasta el sureste, perfecta para operaciones a lo largo del Golfo de México." },
                { title: "Ruta Centro", description: "Crucial para el transporte interno, conectando las principales ciudades y centros industriales del país." },
                { title: "Rutas Transversales", description: "Enlaces eficientes entre las rutas del Pacífico y del Golfo a través de diversas regiones." },
            ]
        },
    ];

    const testimonials = [
        {
            imgSrc: imgTestimonial1,
            altText: "Client 1",
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
        },
        {
            imgSrc: imgTestimonial2,
            altText: "Client 1",
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
        },
        {
            imgSrc: imgTestimonial2,
            altText: "Client 1",
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
        },
    ];

    return (
        <div>
            <HeaderComponent
                title="Bienvenidos a Asociación"
                subtitle1="Pasión por el transporte"
                subtitle2="Excelencia en el servicio"
            />
            <AboutComponent
                imageSrc = {imgAbout}
                title="La Asociación de Transportistas A.T."
                subtitle="Sobre Nosotros"
                description="Es una asociación que representa los intereses de los trabajadores del transporte en México. Esta organización desempeña un papel crucial en el ámbito del transporte al abogar por los derechos y el bienestar de los transportistas, así como al tratar de influir en la política y la regulación relacionadas con la industria del transporte en el país."
                videoSrc='https://www.youtube.com/watch?v=WUXWWTl8fjI'
            />
            <div className="container-fluid pt-4">
                <div className="container">
                    <div className="text-center pb-3">
                        <h6 className="text-primary text-uppercase font-weight-bold">Nuestros Servicios</h6>
                        <h1 className="mb-4">Los Mejores Servicios Logísticos</h1>
                    </div>
                    <div className="row pb-3">
                        {serviciosData.map((service, index) => (
                            <ServiceComponent key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4">
                <div className="container">
                    <div className="row pb-3">
                        <CardComponent
                            iconClass="fa-user-check"
                            title="Buró de Crédito de Clientes"
                            imgSrc= {imgCredit}
                            altText="Buró de Crédito de Clientes"
                            description="En [Nombre de la Asociación], nos comprometemos a establecer relaciones de confianza y seguridad con nuestros clientes. Por ello, realizamos una verificación cuidadosa del crédito de nuestros clientes para garantizar transacciones financieras seguras y transparentes. Nuestro proceso incluye la evaluación de informes crediticios y puntajes financieros, asegurando así la solidez y fiabilidad de nuestras operaciones comerciales."
                        />
                        <CardComponent
                            iconClass="fa-user-check"
                            title="Reportar Incumplimiento de Pagos"
                            imgSrc= {imgReport}
                            altText="Reportar Incumplimiento de Pagos"
                            description="En [Nombre de la Asociación], entendemos la importancia de mantener relaciones comerciales confiables y transparentes. Si se encuentra con un caso de incumplimiento de pagos, siga estos pasos para reportarlo:
                            Nuestro objetivo es asegurar que todas las transacciones se realicen de manera justa y eficiente. Para más información o asistencia, no dude en contactarnos."
                        />
                    </div>
                </div>
                 <TestimonialComponent testimonials={testimonials} />
                </div><br/>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <h6 className="text-primary text-uppercase font-weight-bold">Nuestro Blog</h6>
                        <h1 className="mb-4">Últimas Entradas</h1>
                    </div>
                    <div className="row">
                        <BlogComponent 
                            imgSrc={imgBlog1} 
                            date="01" 
                            category="Zona Noroeste" 
                            title="Título de la entrada del blog 1" 
                            description="Descripción del artículo 1." 
                            link="link-del-artículo-1" 
                        />
                        <BlogComponent 
                            imgSrc={imgBlog2} 
                            date="02" 
                            category="Zona Sur" 
                            title="Título de la entrada del blog 2" 
                            description="Descripción del artículo 2." 
                            link="link-del-artículo-2" 
                        />
                    </div>
                 </div>
            </div>
            <JoinComponent/>
            <ScrollButtonComponent/>
        </div>
    );
}

export default HomeScreen;
