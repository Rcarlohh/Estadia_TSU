import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { db } from '../../backend/firebaseconfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import TeamCardComponent from '../components/ServiceComponents/TeamComponents/TeamCardComponent';
import imgTeam1 from '../assets/img/imgAlejandroGomez.png';
import imgTeam2 from '../assets/img/imgBajioFreight.png';
import imgTeam3 from '../assets/img/imgSierraMadre.png';
import imgTeam4 from '../assets/img/imgCarmenTorres.png';

const ServiceScreen = () => {
    const [busqueda, setBusqueda] = useState('');
    const [tipoTransporte, setTipoTransporte] = useState('Tipo de Transporte');
    const [region, setRegion] = useState('Región');
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [transportistas, setTransportistas] = useState([]);
    const [filteredTransportistas, setFilteredTransportistas] = useState([]);

    useEffect(() => {
        const fetchTransportistas = async () => {
            const querySnapshot = await getDocs(collection(db, "Transportistas"));
            const transportistasList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTransportistas(transportistasList);
            setFilteredTransportistas(transportistasList);
        };

        fetchTransportistas();
    }, []);

    const handleSearchChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleTipoTransporteChange = (event) => {
        setTipoTransporte(event.target.value);
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleSearchClick = () => {
        const filtered = transportistas.filter(transportista => {
            return (
                (busqueda ? transportista.nombre.toLowerCase().includes(busqueda.toLowerCase()) : true) &&
                (tipoTransporte !== 'Tipo de Transporte' ? transportista.tipoTransporte === tipoTransporte : true) &&
                (region !== 'Región' ? transportista.region === region : true)
            );
        });
        setFilteredTransportistas(filtered);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Transportistas"), {
                nombre,
                email,
                telefono,
                tipoTransporte,
                region
            });
            handleClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-primary mb-4">POR UN TRANSPORTE DIGNO Y JUSTO</h1>
                    <h1 className="text-white display-3 mb-5">Asociación</h1>
                    <div className="mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control border-light" style={{ padding: '30px' }}
                                placeholder="BUSCADOR RÁPIDO DE TIPOS DE TRANSPORTE" value={busqueda} onChange={handleSearchChange} />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-3" onClick={handleSearchClick}>Buscar</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <select className="custom-select mr-2" style={{ width: '200px' }} value={tipoTransporte} onChange={handleTipoTransporteChange}>
                                <option value="Tipo de Transporte">Tipo de Transporte</option>
                                <option value="Carga Pesada">Carga Pesada</option>
                                <option value="Transporte Ligero">Transporte Ligero</option>
                                <option value="Logística Especializada">Logística Especializada</option>
                            </select>
                            <select className="custom-select" style={{ width: '200px' }} value={region} onChange={handleRegionChange}>
                                <option value="Región">Región</option>
                                <option value="Norte">Norte</option>
                                <option value="Centro">Centro</option>
                                <option value="Sur">Sur</option>
                                <option value="Oriente">Oriente</option>
                                <option value="Occidente">Occidente</option>
                            </select>
                        </div>
                        <Button variant="primary" onClick={handleShow}>
                            Agregar Transportista
                        </Button>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Transportista</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa el email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa el teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formTipoTransporte">
                                <Form.Label>Tipo de Transporte</Form.Label>
                                <Form.Control as="select" value={tipoTransporte} onChange={(e) => setTipoTransporte(e.target.value)}>
                                    <option value="Tipo de Transporte">Tipo de Transporte</option>
                                    <option value="Carga Pesada">Carga Pesada</option>
                                    <option value="Transporte Ligero">Transporte Ligero</option>
                                    <option value="Logística Especializada">Logística Especializada</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formRegion">
                                <Form.Label>Región</Form.Label>
                                <Form.Control as="select" value={region} onChange={(e) => setRegion(e.target.value)}>
                                    <option value="Región">Región</option>
                                    <option value="Norte">Norte</option>
                                    <option value="Centro">Centro</option>
                                    <option value="Sur">Sur</option>
                                    <option value="Oriente">Oriente</option>
                                    <option value="Occidente">Occidente</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="row">
                        {filteredTransportistas.map((transportista) => (
                            <TeamCardComponent 
                                key={transportista.id}
                                nombre={transportista.nombre}
                                zona={transportista.region}
                                imgSrc={
                                    transportista.nombre === "Alejandro Gómez" ? imgTeam1 :
                                    transportista.nombre === "Bajío Freight Co." ? imgTeam2 :
                                    transportista.nombre === "Carga Sierra Madre, S.R.L." ? imgTeam3 :
                                    transportista.nombre === "Carmen Torres" ? imgTeam4 : ""
                                }
                                facebookUrl={transportista.facebookUrl}
                                telefono={transportista.telefono}
                                email={transportista.email}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceScreen;
