import { Hono } from "hono";
import { cors } from "hono/cors";
import * as model from "./model";

const api = new Hono()
	.get("/book/*", cors())
	.get("/", (c) => c.json({ message: "Hello SIR" }))
	.get("/book", async (c) => {
		const book = await model.getBook();
		return c.json({ book: book, ok: true });
	});

export default api;
