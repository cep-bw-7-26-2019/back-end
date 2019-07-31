
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('companies').insert([
        {name: ''},
        {password: ''},
      ]);
};
