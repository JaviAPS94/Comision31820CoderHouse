import { Router } from "../../deps.ts";
import {
    getQuotes,
    getQuote,
    addQuote,
    updateQuote,
    deleteQuote
} from "../controllers/quotes.ts";

export const router = new Router()
    .get("/api/quotes", getQuotes)
    .get("/api/quotes/:id", getQuote)
    .post("/api/quotes", addQuote)
    .put("/api/quotes/:id", updateQuote)
    .delete("/api/quotes/:id", deleteQuote)