exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products1")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products1").insert([
        {
          name: "kurti",
          description: "in red colour rangmanch brand",
          image_url: "",
          isActive: 1,
          categoryId: 1,
        },
        {
          name: "top",
          description: "in white colour biba brand",
          image_url: "not available",
          isActive: 1,
          categoryId: 1,
        },
        {
          name: "bottom",
          description: "in black colour w brand",
          image_url: "not available",
          isActive: 0,
          categoryId: 3,
        },
        {
          name: "mi10i new mobile111",
          description: "mobile",
          image_url: "not available",
          isActive: 0,
          categoryId: 3,
        },
      ]);
    });
};
