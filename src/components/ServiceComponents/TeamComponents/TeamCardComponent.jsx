import React, { useState, useEffect } from 'react';
import { db } from '../../../../backend/firebaseconfig';
import emailjs from 'emailjs-com'; // Importa emailjs

emailjs.init("V_Ks9rQsra9FFD6_i");

const TeamCardComponent = ({ nombre, zona, imgSrc, email }) => {
    const [telefono, setPhoneNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

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
        try {
            await emailjs.send('service_of6qa3s', 'template_7y9bteu', {
                to_email: email, // Utiliza la dirección de correo electrónico recibida como el destinatario
                message: message // Puedes agregar cualquier otro dato que desees incluir en el correo electrónico
            });
            setShowModal(false);
            alert('Correo enviado!');
        } catch (error) {
            console.error("Error sending email: ", error);
            alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="col-lg-3 col-md-6">
            <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src={imgSrc} alt="" />
                <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                        <h5 className="font-weight-bold">{nombre}</h5>
                        <span>Región {zona}</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                        <button className="btn btn-outline-dark btn-social mr-2" onClick={handleWhatsAppClick}><i className="fab fa-whatsapp"></i></button>
                        <button className="btn btn-outline-dark btn-social" onClick={() => setShowModal(true)}><i className="fas fa-envelope"></i></button>
                    </div>
                </div>
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
