"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
// UP -> O que a migration vai fazer
// Cria campos
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
}
// DOWN -> Deu ruim!
// Remove os campos caso deu ruim
async function down(knex) {
    await knex.schema.dropTable('transactions');
}
//# sourceMappingURL=20250818232524_create-transactions.js.map