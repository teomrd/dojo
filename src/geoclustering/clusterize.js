const geodata = require("./geodata.js");

const clusterize = geodata =>
  Object.values(
    geodata.data.reduce(
      (acc, { country }) => ({
        ...acc,
        [country]: {
          country,
          count: acc[country] ? acc[country].count + 1 : 1
        }
      }),
      {}
    )
  );

clusterize(geodata);

module.exports = clusterize;
