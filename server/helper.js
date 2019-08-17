let _ = require('lodash');

module.exports = trips => {
  const modifiedTrips = trips.map(trip => {
    return { ...trip, tripDate: new Date(trip.time).toDateString() };
  });
  const groupedTrips = _.groupBy(modifiedTrips, 'tripDate');
  const result = Object.keys(groupedTrips).map(function(key) {
    return groupedTrips[key];
  });

  return result;
};
