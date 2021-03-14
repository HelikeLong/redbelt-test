export class IncidentTranslate {
    static translateCriticalLevel(criticalLevel) {
        switch (criticalLevel) {
            case 'high':
                return 'Alta';
            case 'medium':
                return 'Média';
            case 'low':
                return 'Baixa';
        }
    }

    static translateType(type) {
        switch (type) {
            case 'alarm':
                return 'Alarme';
            case 'fire':
                return 'Incêndio';
            case 'others':
                return 'Outros';
        }
    }

    static translateStatus(status) {
        switch (status) {
            case 'true':
                return 'Ativo';
            case 'false':
                return 'Inativo';
        }
    }
}