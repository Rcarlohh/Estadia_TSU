import React from 'react';

const TeamComponent = ({ name, role, imgSrc, socialLinks }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src={imgSrc} alt={name} />
                <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                        <h5 className="font-weight-bold">{name}</h5>
                        <span>{role}</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                        {socialLinks.map((link, index) => (
                            <a key={index} className="btn btn-outline-dark btn-social mr-2" href={link.url}>
                                <i className={`fab fa-${link.platform}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
