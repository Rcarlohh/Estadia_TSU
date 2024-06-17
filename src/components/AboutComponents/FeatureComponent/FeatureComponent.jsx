import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const FeaturesComponent = ({ imgSrc, title, subtitle, description, listItems, buttonText }) => {
    return (
        <div className="container-fluid bg-secondary my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid w-100" src={imgSrc} alt="" />
                    </div>
                    <div className="col-lg-7 py-5 py-lg-0">
                        <h6 className="text-primary text-uppercase font-weight-bold">{title}</h6>
                        <h1 className="mb-4">{subtitle}</h1>
                        <p className="mb-4">{description}</p>                    
                        <ul className="list-inline">
                            {listItems.map((item, index) => (
                                <li key={index}><h6><i className="far fa-dot-circle text-primary mr-3"></i>{item}</h6></li>
                            ))}
                        </ul>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesComponent;
