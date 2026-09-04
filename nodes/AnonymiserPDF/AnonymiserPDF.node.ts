import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserPDF implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser PDF',
        name: 'anonymiserPDF',
        icon: 'file:anonymiserpdf.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser pdf operations in n8n',
        defaults: {
            name: 'Anonymiser PDF',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserPDFApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
