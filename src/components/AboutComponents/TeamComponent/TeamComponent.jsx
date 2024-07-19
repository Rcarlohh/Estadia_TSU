import React from 'react';

const TeamComponent = ({ name, role, imgSrc, socialLinks }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="team-card">
                <img className="card-img-top" src={imgSrc} alt={name} />
                <div className="team-text">
                    <h5>{name}</h5>
                    <span>{role}</span>
                </div>
                <div className="team-social">
                    {socialLinks.map((link, index) => (
                        <a key={index} className="btn-social" href={link.url}>
                            <i className={`fab fa-${link.platform}`}></i>
                        </a>
                    ))}
                </div>
                <div className="team-line"></div>
            </div>
        </div>
    );
};

export default TeamComponent;
