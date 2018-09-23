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
      console.log(
        "cluster exists: ",
        hasClusterAlreadyCreated,
        "in position: ",
        findWhereExists,
        "and it's: ",
        existingCluster.country
      );
      acc[findWhereExists] = cluster;

      console.log("dsadsa===", acc[findWhereExists]);
      // console.log(acc);
    } else {
      acc.push(cluster);
    }
    return acc;
  }, []);
};

clusterize(geodata);

module.exports = clusterize;
