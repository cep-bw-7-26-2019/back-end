const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  addTask,
};

function find() {
  return db('events');
}

async function findById(id) {
  const event = await db('events')
    .where({ id })
    .first();

  if (event) {
    return db('tasks')
      .where({ event_id: id })
      .then(tasks => {
        event.tasks = tasks.map(t => ({ ...t, done: mapBoolean(t.done) }));
        return event;
      });
  } else {
    return null;
  }
}

async function add(event) {
  try {
    const [id] = await db('events').insert(event, 'id');

    return findById(id);
  } catch (error) {
    console.log('error', error);
  }
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

function addTask(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(() => {
      return findById(task.event_id);
    });
}

function mapBoolean(val) {
  return val === 1 ? true : false;
}
