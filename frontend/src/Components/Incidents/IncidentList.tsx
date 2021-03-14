import React from 'react';
import {Button, ButtonGroup, OverlayTrigger, Table, Tooltip} from "react-bootstrap";
import {IncidentTranslate} from '../../Helpers/IncidentTranslate'

const IncidentList = props => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Título</th>
                <th>Criticalidade</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
                { props.incidents.map((incident) => (
                    <tr key={incident.id}>
                        <td>{incident.id}</td>
                        <td>{incident.title}</td>
                        <td>{IncidentTranslate.translateCriticalLevel(incident.critical_level)}</td>
                        <td>{IncidentTranslate.translateType(incident.type)}</td>
                        <td>{IncidentTranslate.translateStatus(incident.active)}</td>
                        <td>
                            <ButtonGroup>
                                <OverlayTrigger key='tooltip-edit-incident' placement='top'
                                  overlay={
                                    <Tooltip id={`tooltip-edit-incident`}>
                                      Editar
                                    </Tooltip>
                                  }
                                >
                                    <Button variant="outline-info" onClick={() => props.onEdit(incident.id)}>✎</Button>
                                </OverlayTrigger>
                                <OverlayTrigger key='tooltip-delete-incident' placement='top'
                                  overlay={
                                    <Tooltip id={`tooltip-delete-incident`}>
                                      Deletar
                                    </Tooltip>
                                  }
                                >
                                    <Button variant="outline-warning" onClick={() => props.onDelete(incident.id)}>✕</Button>
                                </OverlayTrigger>
                            </ButtonGroup>
                        </td>
                    </tr>
                )) }
            </tbody>
        </Table>
    );
};

export default IncidentList;