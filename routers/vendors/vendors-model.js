const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
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

let rows = db('vendors')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}

function findById(id) {
    return db('vendors')
    .where({ id })
    .first();
}

async function add(vendor) {
    const [id] = await db('vendors').insert(vendor);

    return findById(id);
}

function update(id, changes) {
    return db(vendors)
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('vendors')
        .where({ id })
        .del();
}
