// HeaderComponent.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { db } from '../../../../backend/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

const HeaderComponent = () => {
    const [busqueda, setBusqueda] = useState('');
    const [tipoTransporte, setTipoTransporte] = useState('Tipo de Transporte');
    const [region, setRegion] = useState('Región');
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

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
        // Aquí puedes agregar la lógica para manejar la búsqueda
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Transportistas"), {
                nombre,
                email,
                telefono
            });
            handleClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
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
                            <option value="Tipo de Transporte" selected>Tipo de Transporte</option>
                            <option value="1">Carga Pesada</option>
                            <option value="2">Transporte Ligero</option>
                            <option value="3">Logística Especializada</option>
                        </select>
                        <select className="custom-select" style={{ width: '200px' }} value={region} onChange={handleRegionChange}>
                            <option value="Región" selected>Región</option>
                            <option value="1">Norte</option>
                            <option value="2">Centro</option>
                            <option value="3">Sur</option>
                            <option value="4">Oriente</option>
                            <option value="5">Occidente</option>
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

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default HeaderComponent;
