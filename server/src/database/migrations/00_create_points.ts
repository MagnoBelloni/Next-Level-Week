import Knex from 'knex';

export async function up(knex: Knex){
    //Adiciona
    return knex.schema.createTable('points', (table) =>{
        table.integer('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longuitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex){
    //Usado para voltar atrás
    knex.schema.dropTable('points');
}