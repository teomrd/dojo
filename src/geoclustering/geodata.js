var faker = require("faker");

const generateGeodata = (n = 100) =>
  Array(n)
    .fill(null) // A newlly created Array of size n is getting initialized but with undefined values, that makes the Array non-iteratable, so that's a trick to fill it will "actual" nill values, which makes it iteratable again, so we can map over.
    .map(() => ({
      country: faker.address.country(),
      countryCode: faker.address.countryCode(),
      lng: faker.address.longitude(),
      lat: faker.address.latitude(),
    }));

const geodata = {
  data: generateGeodata(10000),
};

module.exports = geodata;
