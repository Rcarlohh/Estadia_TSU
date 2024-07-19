import React, { useState, useEffect } from 'react';
import { db } from '../../../../backend/firebaseconfig';
import emailjs from 'emailjs-com';
import './TeamCardComponent.css';

emailjs.init("V_Ks9rQsra9FFD6_i");

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

    const handleSendEmail = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('message', message);
        formData.append('to_email', email);
        if (image) {
            formData.append('image', image, image.name);
        }

        try {
            await emailjs.send('service_of6qa3s', 'template_7y9bteu', formData, { contentType: false });
            setShowModal(false);
            alert('Correo enviado!');
        } catch (error) {
            console.error("Error sending email: ", error);
            alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
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
