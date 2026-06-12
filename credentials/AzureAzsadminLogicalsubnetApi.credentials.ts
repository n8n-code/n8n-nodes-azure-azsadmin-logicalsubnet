import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminLogicalsubnetApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminLogicalsubnetApi';

        displayName = 'Azure Azsadmin Logicalsubnet API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminLogicalsubnet/azure-azsadmin-logicalsubnet.png', dark: 'file:../nodes/AzureAzsadminLogicalsubnet/azure-azsadmin-logicalsubnet.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Logicalsubnet API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
