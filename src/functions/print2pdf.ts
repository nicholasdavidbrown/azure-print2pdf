import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as puppeteer from 'puppeteer';

export async function print2pdf(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    /**
     * Run puppeteer
     */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        context.log("Page created.")
        await page.setViewport({
            width: 1920,
            height: 1080
        });

        // Go to www.google.com 
        await page.goto('https://www.google.com');

        // Take a fullpage screenshot
        const buffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm'
            }
        });

        // Return the screenshot
        return {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Length": buffer.length.toString()
            },
            body: buffer
        }
    }
    catch (e) {
        return {
            status: 500,
            body: `Failed to execute web automation task. Error message: ${e.message}`
        }
    }
    finally {
        // Close the page
        await page.close();
        context.log("Page closed.")
    }
};

app.http('print2pdf', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: print2pdf
});
