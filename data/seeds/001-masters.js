
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('vendors').insert([
        {name: 'lambda'},
        {name: 'apple'},
        {name: 'microsoft'}
      ]);
};
