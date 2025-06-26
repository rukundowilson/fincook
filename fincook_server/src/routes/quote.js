import { Router } from "express";
import requestQuote from "../controllers/quote.js"

const router =  Router();

router.post("/new", requestQuote)

export default router;