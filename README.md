# print2pdf

This repository contains the source code to deploy a Microsoft Azure Function App with the purpose of converting a styled webpage into to an optimised PDF document.

The function application utilises Puppeteer to run a Chromium browser instance which has the in-built Print tool. Following the PDF creation, there is a layer of compression applied to ensure the produced PDFs are as web optimised as possible. 

## Getting Started

### Local Development

To run this code locally, you will need to have the following:

- Node - [View Documentation](https://nodejs.org/en/)
- Azure Functions Core Tools - [View Documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-typescript#v2)
- VSCode IDE (recommended) - [View Documentation](https://code.visualstudio.com/docs)
- Azure Functions extension for VSCode (recommended) - [View Documentation](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

### Deployment

To deploy this code, you will need to have the following:

- A Microsoft Azure subscription
- Created a Microsoft Azure Function App with the following settings:

```
Function App name: ANY
Deploy code or container image?: Code
Runtime stack: Node.js
Version: 18+
Region: ANY
Operating System: Linux
Plan type: Consumption (recommended)
```

- Linked the repository to the Function App using the Azure Functions extension for VSCode.



