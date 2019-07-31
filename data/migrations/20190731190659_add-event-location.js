
exports.up = function(knex) {
    return knex.schema.table('events', tbl => {
        tbl.string('location', 255);
    });
};

exports.down = function(knex) {
    return knex.schema.table('events', tbl => {
        tbl.dropColumn('location');
    });
};
