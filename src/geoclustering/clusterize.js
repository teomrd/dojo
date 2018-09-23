const geodata = require("./geodata.js");

const clusterize = geodata =>
  geodata.data.reduce((acc, { country: currentCountry }) => {
    const findWhereExists = acc.findIndex(
      ({ country }) => country === currentCountry
    );
    const hasClusterAlreadyCreated = findWhereExists > -1;
    const cluster = {
      country: currentCountry,
      count: hasClusterAlreadyCreated ? acc[findWhereExists].count + 1 : 1
    };
    if (hasClusterAlreadyCreated) {
      acc[findWhereExists] = cluster;
    } else {
      acc.push(cluster);
    }
    return acc;
  }, []);

clusterize(geodata);

module.exports = clusterize;
