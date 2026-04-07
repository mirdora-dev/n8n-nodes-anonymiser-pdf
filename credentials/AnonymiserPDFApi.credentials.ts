import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnonymiserPDFApi implements ICredentialType {
    name = 'anonymiserPDFApi';
    displayName = 'Anonymiser PDF API';
    documentationUrl = 'https://github.com/mirdora-dev/anonymiser-core-standalone';
    properties: INodeProperties[] = [
        {
            displayName: 'Environment Path',
            name: 'envPath',
            type: 'string',
            default: '',
            description: 'Optional path to custom environment configurations',
        },
    ];
}
