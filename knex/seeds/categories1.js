exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories1")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories1").insert([
        {
          name: "fashion",
          description: "all dress for men and women",
          isActive: 1,
          group_id: 1,
        },
        {
          name: "beauty",
          description: "provide beauty products for women",
          isActive: 1,
          group_id: 2,
        },
        {
          name: "electronics",
          description: "mobiles and laptops",
          isActive: 0,
          group_id: 3,
        },
        {
          name: "groceries",
          description: "food data",
          isActive: 0,
          group_id: 4,
        },
      ]);
    });
};
