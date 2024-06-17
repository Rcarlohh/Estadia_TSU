import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos necesarios

const TestimonialComponent = ({ testimonials }) => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center pb-3">
                    <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                    <h1 className="mb-4">Our Clients Say</h1>
                </div>
                <Carousel 
                    showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showStatus={false}
                    showIndicators={true}
                    useKeyboardArrows={true}
                    centerMode={true} 
                    centerSlidePercentage={60}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-slide position-relative bg-secondary p-4" style={{minHeight: '250px', margin: '0 10px'}}>
                            <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{top: "10px", right: "10px"}}></i>
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src={testimonial.imgSrc} style={{width: "60px", height: "60px"}} alt={testimonial.altText} />
                                <div className="ml-2">
                                    <h6 className="font-weight-semi-bold m-1">{testimonial.name}</h6>
                                    <small>- {testimonial.profession}</small>
                                </div>
                            </div>
                            <p className="m-0">{testimonial.description}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialComponent;
