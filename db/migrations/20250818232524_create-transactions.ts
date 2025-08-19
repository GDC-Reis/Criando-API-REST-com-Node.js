import type { Knex } from 'knex'

// UP -> O que a migration vai fazer
// Cria campos
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// DOWN -> Deu ruim!
// Remove os campos caso deu ruim
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
 }
