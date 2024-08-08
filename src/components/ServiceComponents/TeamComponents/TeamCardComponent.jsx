import React, { useState, useEffect } from 'react';
import { db } from '../../../../backend/firebaseconfig';
import './TeamCardComponent.css';

const TeamCardComponent = ({ nombre, zona, imgSrc, email }) => {
    const [telefono, setPhoneNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            try {
                const doc = await db.collection('Transportistas').doc(nombre).get();
                if (doc.exists) {
                    setPhoneNumber(doc.data().telefono);
                }
            } catch (error) {
                console.error("Error fetching phone number: ", error);
            }
        };

        fetchPhoneNumber();
    }, [nombre]);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        alert(`El número del transportista es: ${telefono}`);
    };

    const handleSendEmail = async () => {
        try {
          const response = await fetch('http://localhost:1701/send-email-contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            console.log('Email sent successfully:', data.message);
          } else {
            console.error('Error sending email:', data.error);
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };
      

    return (
        <div className="col-lg-4 col-md-6">
            <div className="team-card">
                {imgSrc ? (
                    <img className="team-img" src={imgSrc} alt="" />
                ) : (
                    <div className="team-no-img">Sin Imagen</div>
                )}
                <div className="team-text">
                    <h5>{nombre}</h5>
                    <span>Región {zona}</span>
                </div>
                <div className="team-social">
                    <button className="text-white btn btn-social" onClick={handleWhatsAppClick}>
                        <i className="fab fa-whatsapp"></i>
                    </button>
                    <button className="text-white btn btn-social" onClick={() => setShowModal(true)}>
                        <i className="fas fa-envelope"></i>
                    </button>
                </div>
                <div className="team-line"></div>
            </div>

            {showModal && (
                <div className="modal show d-block" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Enviar correo a {nombre}</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSendEmail}>
                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje:</label>
                                        <textarea id="message" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Adjuntar imagen:</label>
                                        <input type="file" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamCardComponent;
