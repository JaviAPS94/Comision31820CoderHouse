import { Context, helpers } from "../../deps.ts";
import type { Quote } from "../types/quote.ts";
import { MongoClient } from "../../deps.ts";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient();

try {
    await client.connect(URI);
    console.log("Base de datos conectada");
} catch (error) {
    console.log(error);
}

const db = client.database("quotesApp");
const quotes = db.collection<Quote>("quotes");

export const getQuotes = async ({ response }: { response: any }) => {
    try {
        const allQuotes = await quotes.find({}, { projection: { _id: 0 } }).toArray();
        if (allQuotes) {
            response.status = 200;
            response.body = {
                success: true,
                data: allQuotes
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: 'Internal server Error'
            }
        }
    } catch (error) {
        response.status = 500;
        response.body = {
            success: false,
            msg: error.message
        }
    }
}

export const getQuote = async ({ params, response }: { params: { id: string }, response: any }) => {
    try {
        const quote = await quotes.findOne({ quoteID: params.id }, { projection: { _id: 0 } });
        if (quote) {
            response.status = 200;
            response.body = {
                success: true,
                data: quote
            };
        } else {
            response.status = 404;
            response.body = {
                success: false,
                msg: 'Quote not found'
            }
        }
    } catch (error) {
        response.status = 500;
        response.body = {
            success: false,
            msg: error.message
        }
    }
}

export const addQuote = async (
        { request, response }: { request: any, response: any }
    ) => {
    try {
        if(!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                msg: "No data"
            }; 
        } else {
            const body = await request.body();
            const quote = await body.value;
            quote.quoteID = globalThis.crypto.randomUUID();
            await quotes.insertOne(quote);
            response.status = 201;
            response.body = {
                success: true,
                msg: quote
            }; 
        }
    } catch (error) {
        response.status = 500;
        response.body = {
            success: false,
            msg: error.message
        }
    }
}

export const updateQuote = async (
        { params, request, response }: { params: { id: string }, 
        request: any, response: any }
    ) => {
    try {
        const body = await request.body();
        const inputQuote = await body.value;
        await quotes.updateOne(
            { quoteID: params.id },
            { $set: {quote: inputQuote.quote, author: inputQuote.author} }
        );
        response.status = 200;
        response.body = {
            success: true
        }
    } catch (error) {
        response.status = 500;
        response.body = {
            success: false,
            msg: error.message
        }
    }
}

export const deleteQuote = async (
    { params, response }: { params: { id: string }, 
    response: any }
) => {
try {
    await quotes.deleteOne(
        { quoteID: params.id }
    );
    response.status = 200;
    response.body = {
        success: true
    }
} catch (error) {
    response.status = 500;
    response.body = {
        success: false,
        msg: error.message
    }
}
}
