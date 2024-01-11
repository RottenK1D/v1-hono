import { sql } from "drizzle-orm";
import {
	integer,
	sqliteTable,
	text,
	uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const book = sqliteTable("book", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	author: text("author").notNull(),
	publicationDate: text("publicationDate").notNull(),
});
