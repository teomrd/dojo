const clusterize = require("./clusterize");

describe("clusterize the locations", () => {
  const someLocations = {
    data: [
      {
        country: "Hong Kong",
        countryCode: "MQ",
        lng: "-143.41221",
        lat: "-81.42"
      },
      {
        country: "New Caledonia",
        countryCode: "FM",
        lng: "-43.5306",
        lat: "-9.4572"
      },
      {
        country: "Greece",
        countryCode: "FM",
        lng: "-43.5306",
        lat: "-9.4572"
      },
      {
        country: "Holy See (Vatican City State)",
        countryCode: "MQ",
        lng: "-140.8370",
        lat: "-81.7477"
      },
      {
        country: "Hong Kong",
        countryCode: "AL",
        lng: "116.3585",
        lat: "16.8089"
      }
    ]
  };
  it("should return the right number of clusters", () => {
    expect(clusterize(someLocations)).toHaveLength(4);
  });
  it("should return a cluster for the locations within the same country", () => {
    expect(clusterize(someLocations)).toEqual([
      {
        country: "Hong Kong",
        count: 2
      },
      {
        country: "New Caledonia",
        count: 1
      },
      {
        country: "Greece",
        count: 1
      },
      {
        country: "Holy See (Vatican City State)",
        count: 1
      }
    ]);
  });
});
