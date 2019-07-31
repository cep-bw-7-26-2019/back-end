const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

nodule.exports = {
    find,
    findById,
    add,
    update,
    remove,
    // findHubMessages,
    // findMessageById,
    // addMessage, 
};

function find(query) {
    const offset = limit * (page - 1);
    const { page = 1, limit = 2, sortby = 'id', sortdir = 'asc' } = query;

let rows = db('events')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}

function findById(id) {
    return db('events')
    .where({ id })
    .first();
}

function update(id, changes) {
    return db(events)
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('hubs')
        .where({ id })
        .del();
}