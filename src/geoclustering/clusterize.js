const geodata = require("./geodata.js");

const clusterize = geodata => {
  return geodata.data.reduce((acc, value) => {
    const currentCountry = value.country;
    const findWhereExists = acc.findIndex(
      ({ country }) => country === currentCountry
    );

    const existingCluster = acc.find(
      ({ country }) => country === currentCountry
    );

    const hasClusterAlreadyCreated = findWhereExists > -1;
    const cluster = {
      country: currentCountry,
      count: hasClusterAlreadyCreated ? existingCluster.count + 1 : 1
    };
    if (hasClusterAlreadyCreated) {
      acc[findWhereExists] = cluster;
    } else {
      acc.push(cluster);
    }
    return acc;
  }, []);
};

clusterize(geodata);

module.exports = clusterize;
