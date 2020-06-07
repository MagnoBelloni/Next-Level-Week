import Knex from 'knex';

export async function up(knex: Knex) {
    //Adiciona
    return knex.schema.createTable('point_items', (table) => {
        table.integer('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(knex: Knex) {
    //Usado para voltar atrás
    knex.schema.dropTable('point_items');
}
