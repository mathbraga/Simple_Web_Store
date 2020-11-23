import Knex from 'knex';

export async function up(knex = Knex) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.integer('role_id')
            .notNullable()
            .references('id')
            .inTable('roles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('full_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    })
}

export async function down(knex = Knex){
    return knex.schema.dropTable('users');
}