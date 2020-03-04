
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make:"Toyota", model:"rav4", vin:"ZAM57RTA5E1092942", mileage:45000, transmission_type:"Automatic", title_status:"Clean" },
        {make:"Kia", model:"Sedona", vin:"JTHBK262182061167", mileage:10000, transmission_type:"Automatic", title_status:"Clean" }
      
      ]);
    });
};
