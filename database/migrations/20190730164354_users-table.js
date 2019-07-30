
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.integer('company_id')
    tbl.integer('role_id', 128)
    tbl.varchar('email', 128)
    tbl.varchar('password', 4000)
        .unique()
        .notNullable()
  })

  .createTable('companies', tbl => {
    tbl.increments();
    tbl.varchar('name', 255)
        .unique()
        .notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
