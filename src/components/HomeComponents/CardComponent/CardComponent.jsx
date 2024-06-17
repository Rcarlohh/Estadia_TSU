import React from 'react';

const CardComponent = ({ iconClass, title, imgSrc, altText, description }) => {
    return (
        <div className="col-lg-6 col-md-6 mb-5">
            <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className={`fa fa-2x ${iconClass} text-dark pr-3`}></i>
                <h6 className="text-white font-weight-medium m-0">{title}</h6>
            </div>
            <img src={imgSrc} alt={altText} style={{maxWidth: "100%", height: "auto"}} />
            <p>{description}</p>
        </div>
    );
};

export default CardComponent;