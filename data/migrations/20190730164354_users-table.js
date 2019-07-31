exports.up = function(knex) {
  return knex.schema
    .createTable('companies', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })

    .createTable('roles', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })

    .createTable('users', tbl => {
      tbl.increments();
      tbl
        .integer('company_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('companies');
      tbl
        .integer('role_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles');
      tbl.string('email', 128);
      tbl.string('password', 4000).notNullable();
    })

    .createTable('events', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 4000);
      tbl.date('date');
      tbl.time('time');
      tbl.decimal('budget');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
    })

    .createTable('vendors', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 4000);
      tbl
        .integer('event_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('events');
      tbl.boolean('done');
    })

    .createTable('purchases', tbl => {
      tbl.increments();
      tbl.string('item', 255);
      tbl
        .integer('event_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('events');
      tbl
        .integer('vendor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('vendors');
      tbl.decimal('quantity');
      tbl.decimal('cost');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('purchases')
    .dropTableIfExists('tasks')
    .dropTableIfExists('vendors')
    .dropTableIfExists('events')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
    .dropTableIfExists('companies');
};
