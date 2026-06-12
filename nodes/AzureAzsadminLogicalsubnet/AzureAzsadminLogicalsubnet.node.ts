import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminLogicalsubnet implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Logicalsubnet',
                name: 'N8nDevAzureAzsadminLogicalsubnet',
                icon: { light: 'file:./azure-azsadmin-logicalsubnet.png', dark: 'file:./azure-azsadmin-logicalsubnet.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Logical subnet operation endpoints and objects.',
                defaults: { name: 'Azure Azsadmin Logicalsubnet' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminLogicalsubnetApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
