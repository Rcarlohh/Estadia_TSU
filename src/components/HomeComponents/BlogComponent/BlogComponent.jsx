import React from 'react';
import userImg from '../../../assets/img/user.jpg'

const BlogComponent = ({ imgSrc, date, author, category, title, description, link }) => {
    return (
        <div className="col-md-6 mb-5">
            <div className="position-relative">
                <img className="img-fluid w-100" src={imgSrc} alt={title} />
                <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
                    <h4 className="font-weight-bold mb-n1">{date}</h4>
                    <small className="text-white text-uppercase">Ene</small>
                </div>
            </div>
            <div className="bg-secondary" style={{ padding: '30px' }}>
                <div className="d-flex mb-3">                     
                    <div className="d-flex align-items-center ml-1">
                        <i className="far fa-bookmark text-primary"></i>
                        <a className="text-muted ml-2" href="">{category}</a>
                    </div>
                </div>
                <h4 className="font-weight-bold mb-3">{title}</h4>
                <p>{description}</p>
                <a className="border-bottom border-primary text-uppercase text-decoration-none" href={link}>Leer Más <i className="fa fa-angle-right"></i></a>
            </div>
        </div>
    );
};

export default BlogComponent;
