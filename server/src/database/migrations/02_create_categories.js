import Knex from 'knex';

export async function up(knex = Knex) {
    return knex.schema.createTable('categories', table =>{
        table.increments('id').primary();
        table.string('category').notNullable();
    })
}

export async function down(knex = Knex){
    return knex.schema.dropTable('users');
}