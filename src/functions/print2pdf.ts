import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function print2pdf(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('print2pdf', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: print2pdf
});
