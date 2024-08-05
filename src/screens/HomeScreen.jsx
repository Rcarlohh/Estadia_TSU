import React from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent.jsx';
import ServiceComponent from '../components/HomeComponents/ServiceComponents/ServicesComponent.jsx';
import AboutComponent from '../components/Layouts/AboutComponent/AboutComponent.jsx';
import CardComponent from '../components/HomeComponents/CardComponent/CardComponent.jsx';
import TestimonialComponent from '../components/HomeComponents/CarrouselCompent/TestimonialComponent.jsx';
import BlogCardComponent from '../components/HomeComponents/BlogComponent/BlogCardComponent.jsx';
import JoinComponent from '../components/HomeComponents/JoinComponent/JoinComponent.jsx';
import ScrollButtonComponent from '../components/Layouts/ScrollButton/ScrollButtonComponent.jsx';
import { events } from './BlogScreen/EventsData/EventsData.js';
import { useNavigate } from 'react-router-dom';


import imgTypeTransport from '../assets/img/ServiceTrucks.png';
import imgRoute from '../assets/img/ServiceMapMexixco.png';
import imgAbout from '../assets/img/about.jpg';
import imgCredit from '../assets/img/ImgCredit.png';
import imgReport from '../assets/img/ImgReport.png';
import imgTestimonial1 from '../assets/img/testimonial-1.jpg';
import imgTestimonial2 from '../assets/img/testimonial-2.jpg';

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

    const getDailyEvents = () => {
        return events.slice(0, 2); // Toma solo los dos primeros eventos
    };

    const dailyEvents = getDailyEvents();

    const navigate = useNavigate();
    
    const handleReadMore = () => {
        navigate(`/Blog`);
    };

    return (
        <div>
            <HeaderComponent
                title="Bienvenidos a Asociación"
                subtitle1="Pasión por el transporte"
                subtitle2="Excelencia en el servicio"
            />
           <AboutComponent
                imageSrc={imgAbout}
                title="La Asociación de Transportistas A.T."
                subtitle="Sobre Nosotros"
                description="Es una asociación que representa los intereses de los trabajadores del transporte en México. Esta organización desempeña un papel crucial en el ámbito del transporte al abogar por los derechos y el bienestar de los transportistas, así como al tratar de influir en la política y la regulación relacionadas con la industria del transporte en el país."
                videoSrc='https://www.youtube.com/watch?v=WUXWWTl8fjI' // Asegúrate de que esta URL sea válida
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
                            imgSrc={imgCredit}
                            altText="Buró de Crédito de Clientes"
                            description="En [Nombre de la Asociación], nos comprometemos a establecer relaciones de confianza y seguridad con nuestros clientes. Por ello, realizamos una verificación cuidadosa del crédito de nuestros clientes para garantizar transacciones financieras seguras y transparentes. Nuestro proceso incluye la evaluación de informes crediticios y puntajes financieros, asegurando así la solidez y fiabilidad de nuestras operaciones comerciales."
                        />
                        <CardComponent
                            iconClass="fa-user-check"
                            title="Reportar Incumplimiento de Pagos"
                            imgSrc={imgReport}
                            altText="Reportar Incumplimiento de Pagos"
                            description="La asociación ofrece un servicio eficiente para reportar y gestionar incumplimientos de pagos por parte de clientes. Nuestro equipo de profesionales se encarga de investigar y tomar las acciones necesarias para asegurar que los pagos se realicen de acuerdo con los términos acordados. Trabajamos incansablemente para proteger los intereses financieros de nuestros miembros y garantizar que se mantengan relaciones comerciales justas y equitativas."
                        />
                    </div>
                </div>
            </div>
            <TestimonialComponent testimonials={testimonials} />
            <div className="container-fluid pt-4">
                <div className="container">
                    <div className="text-center pb-3">
                        <h6 className="text-primary text-uppercase font-weight-bold">Últimos Eventos</h6>
                        <h1 className="mb-4">Eventos Recientes y Noticias</h1>
                    </div>
                    <div className="row pb-3">
                        {dailyEvents.map(event => (
                            <BlogCardComponent
                                key={event.id}
                                imgSrc={event.imgSrc}
                                date={event.date}
                                category={event.category}
                                title={event.title}
                                description={event.description}
                                link={() => handleReadMore(event.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <JoinComponent />
            <ScrollButtonComponent />
        </div>
    );
};

export default HomeScreen;
