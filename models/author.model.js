const {pgTable , uuid , text ,varchar}  = require("drizzle-orm/pg-core")

const authorTable = pgTable('author',{
    id: uuid().primaryKey().defaultRandom().notNull(),
    firstName : varchar({length:55}).notNull(),
    lastName : varchar({length :55}).notNull(),
    email : varchar({length:255}).notNull().unique(),
})

module.exports = authorTable