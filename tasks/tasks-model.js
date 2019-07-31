const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    update,
    remove,
};


function update(id, changes) {
    return db(events)
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('events')
        .where({ id })
        .del();
}