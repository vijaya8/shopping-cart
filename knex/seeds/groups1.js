exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("groups1")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("groups1").insert([
        {
          // id: 1,
          name: "fashion",
          description: "all dress for men and women",
          isActive: 1,
        },
        {
          // id: 2,
          name: "beauty",
          description: "provide beauty products for women",
          isActive: 1,
        },
        {
          // id: 3,
          name: "electronics",
          description: "mobiles and laptops",
          isActive: 0,
        },
        {
          // id: 4,
          name: "groceries",
          description: "food data",
          isActive: 0,
        },
      ]);
    });
};
