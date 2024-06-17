import React from 'react';

const TeamCardComponent = ({nombre, zona, imgSrc, twitterUrl, facebookUrl, linkedinUrl, instagramUrl}) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src={imgSrc} alt="" />
                <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                        <h5 className="font-weight-bold">{nombre}</h5>
                        <span>{zona}</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                        <a className="btn btn-outline-dark btn-social mr-2" href={twitterUrl}><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-dark btn-social mr-2" href={facebookUrl}><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-dark btn-social mr-2" href={linkedinUrl}><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-dark btn-social" href={instagramUrl}><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCardComponent;
