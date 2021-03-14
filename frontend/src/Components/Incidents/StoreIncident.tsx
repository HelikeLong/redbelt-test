import React, {useEffect, useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import {IncidentService} from "../../Services/IncidentService";

const StoreIncident = props => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [critical_level, setCriticalLevel] = useState('');
    const [type, setType] = useState('');
    const [active, setActive] = useState('true');
    const incidentService = new IncidentService();

    useEffect(() => {
        if (props.editId) {
            (async () => {
                incidentService.getIncidents(props.editId).then((_incidents) => {
                    setTitle(_incidents.data.title);
                    setDescription(_incidents.data.description);
                    setCriticalLevel(_incidents.data.critical_level);
                    setType(_incidents.data.type);
                    setActive(_incidents.data.active);
                });
            })();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !critical_level || !type) {
            alert('Todos os campos são obrigatórios');
            return false;
        }

        let data = {title, description, critical_level, type, active};
        props.onSave(data, id);

        setId('');
        setTitle('');
        setDescription('');
        setCriticalLevel('');
        setType('');
        setActive('true');
    };

    return (
        <Form onSubmit={handleSubmit} className={'m-2'}>
            <Form.Row>
                <Form.Control type="hidden" placeholder="Título" />
                <Form.Group as={Col} md="12" controlId="title">
                    <Form.Label>Título *</Form.Label>
                    <Form.Control type="text" placeholder="Título"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="description">
                    <Form.Label>Descrição *</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="critical_level">
                    <Form.Label>Criticalidade *</Form.Label>
                    <Form.Control as="select"
                    value={critical_level} onChange={(e) => setCriticalLevel(e.target.value)} >
                        <option value="">Selecione...</option>
                        <option value="high">Alta</option>
                        <option value="medium">Média</option>
                        <option value="low">Baixa</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="type">
                    <Form.Label>Tipo *</Form.Label>
                    <Form.Control as="select"
                    value={type} onChange={(e) => setType(e.target.value)} >
                        <option value="">Selecione...</option>
                        <option value="alarm">Alarme</option>
                        <option value="fire">Incêndio</option>
                        <option value="others">Outros</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="active">
                    <Form.Check type="checkbox" label="Ativo" checked={active === 'true'} value={active}
                                onChange={(e) => setActive(e.currentTarget.checked.toString())} />
                </Form.Group>

                <Button variant="outline-success" type="submit" block>
                    Salvar
                </Button>
            </Form.Row>
        </Form>
    );
};

export default StoreIncident;