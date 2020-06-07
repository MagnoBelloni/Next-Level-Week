import Knex from 'knex';

export async function up(knex: Knex) {
    //Adiciona
    return knex.schema.createTable('items', (table) => {
        table.integer('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    //Usado para voltar atrás
    knex.schema.dropTable('items');
}
