import React, {useEffect, useState} from 'react';
import {Card, Navbar} from "react-bootstrap";
import IncidentList from "./IncidentList";
import StoreIncident from "./StoreIncident";
import {IncidentService} from "../../Services/IncidentService";

const IncidentIndex = props => {
    const [incidents, setIncidents] = useState([]);
    const [editId, setEditId] = useState(0);
    const incidentService = new IncidentService();

    useEffect(() => {
        (async () => {
            incidentService.getIncidents().then((_incidents) => {
                setIncidents(_incidents.data);
            })
        })();
    }, [])

    const handleSave = async (incident, id) => {
        const _incident = await incidentService.saveIncident(incident, id);
        setIncidents([...incidents, _incident.data]);
    }

    const handleEdit = (id) => {
        setEditId(id);
    }

    const handleDelete = (id) => {
        if (window.confirm('Você tem certeza de que deseja deletar esse registro?')) {
            incidentService.deleteIncident(id).then(() => {
                setIncidents(incidents.filter((incidents) => incidents.id !== id));
            });
        }
    }

    return (
        <Card>
            <Card.Body>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Incidentes</Navbar.Brand>
                </Navbar>

                <StoreIncident onSave={handleSave} editId={editId} />
                <IncidentList incidents={incidents} onDelete={handleDelete} onEdit={handleEdit} />
            </Card.Body>
        </Card>
    );
};

export default IncidentIndex;
