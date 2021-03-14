const headers = new Headers();
headers.append('Content-Type', 'application/json');
const baseUrl = 'http://localhost/api/incidents/';

export class IncidentService {
    async saveIncident (incident, id) {
        let res;
        if (id) {
            res = await fetch(baseUrl, {method: 'POST', headers, body: JSON.stringify(incident)});
        } else {
            res = await fetch(baseUrl, {method: 'POST', headers, body: JSON.stringify(incident)});
        }
        return await res.json();
    }

    async getIncidents (id?) {
        id = typeof id === "undefined" ? '' : id;
        const res = await fetch(baseUrl + id, {method: 'GET', headers})
        return res.json();
    }

    async deleteIncident (id) {
        await fetch(baseUrl + id, {method: 'DELETE', headers})
    }
}