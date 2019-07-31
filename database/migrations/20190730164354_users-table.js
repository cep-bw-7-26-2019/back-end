exports.up = function(knex) {
    return knex.schema
        .createTable("users", tbl => {
        tbl.increments();
        tbl.integer("company_id");
        tbl.integer("role_id", 128);
        tbl.varchar("email", 128);
        tbl.varchar("password", 4000)
            .unique()
            .notNullable();
        })

    .createTable("companies", tbl => {
        tbl.increments();
        tbl.varchar("name", 255)
            .unique()
            .notNullable();
        })

    .createTable("roles", tbl => {
        tbl.increments();
        tbl.varchar("name", 255)
            .unique()
            .notNullable();
        })

    .createTable("events", tbl => {
        tbl.increments();
        tbl.varchar("name", 255);
        tbl.varchar("description", 4000);
        tbl.date("date");
        tbl.time("time");
        tbl.decimal("budget");
        tbl.integer("user_id")
            .unique()
            .notNullable();
        })

    .createTable("vendors", tbl => {
        tbl.increments();
        tbl.varchar("name", 255)
            .unique()
            .notNullable();
        })

    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.varchar("description", 4000);
        tbl.integer("event_id");
        tbl.boolean("done")
            .unique()
            .notNullable();
        })

    .createTable("purchases", tbl => {
        tbl.increments();
        tbl.varchar('product', 255)
        tbl.integer('event_id')
        tbl.varchar('vendor_id')
        tbl.decimal('quantity')
        tbl.decimal('cost')
            .unique()
            .notNullable()

        
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("companies")
        .dropTableIfExists("roles")
        .dropTableIfExists("events")
        .dropTableIfExists("vendors")
        .dropTableIfExists("tasks")
    };
