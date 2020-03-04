
exports.up = function(knex) {
  //the change we want to make to our schema
  return knex.schema.createTable("cars", table => {
    table.increments("id").primary()

      
    table.text("make").notNull()
      
      table.text("model").notNull()
      
      table.text("vin", 17).unique() .notNull()

      table.float("mileage").notNull()

      table.text("transmission_type")

      table.text("title_status")

  })

};

exports.down = function(knex) {
  //this is for undoin that change
  return knex.schema.dropTableIfExists("cars")
};
