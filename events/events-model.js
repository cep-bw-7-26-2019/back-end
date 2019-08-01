const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {

    return db('events') 
}

function findById(id) {
    return db('events')
    .where({ id })
    .first();
}

async function add(event) {
    const [id] = await db('events').insert(event, 'id');

    return findById(id);
}

function update(id, changes) {
    return db('events')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('events')
        .where({ id })
        .del();
}