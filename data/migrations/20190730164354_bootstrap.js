exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('company', 255);
      tbl.string('role', 255);
      tbl
        .string('email', 128)
        .notNullable()
        .unique();
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password', 4000).notNullable();
    })
    .createTable('events', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 4000);
      tbl.date('date');
      tbl.string('time');
      tbl.string('location', 4000);
      tbl.decimal('budget', null);
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
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
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.boolean('done');
    })
    .createTable('purchases', tbl => {
      tbl.increments();
      tbl.string('item', 255).notNullable();
      tbl
        .integer('event_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('vendor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('vendors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.decimal('quantity');
      tbl.decimal('cost', null);
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('purchases')
    .dropTableIfExists('tasks')
    .dropTableIfExists('vendors')
    .dropTableIfExists('events')
    .dropTableIfExists('users');
};