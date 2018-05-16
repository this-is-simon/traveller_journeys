const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((singleJourney) => {
    return singleJourney.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function() {
  const endLocations = this.journeys.map((singleJourney) => {
    return singleJourney.endLocation;
  });
  return endLocations;
};

// Cinema.prototype.getListOfTitles = function(){
//   const listOfTitles = this.films.map((singleFilm) => {
//     return singleFilm.title;
//   });
//   return listOfTitles;
// }

Traveller.prototype.getModesOfTransport = function () {
  const transportArray = this.journeys.map((singleJourney) => {
    return singleJourney.transport;
  })
  return transportArray;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysArray = this.journeys.filter((singleJourney) => {
    return singleJourney.transport === transport;
  });
  return journeysArray;
};

// Cinema.prototype.findFilmsByGenre = function(genre){
//   const foundFilms = this.films.filter((singleFilm) => {
//     return singleFilm.genre === genre;
//   })
//   return foundFilms;
// }

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysArray = this.journeys.filter((singleJourney) => {
    return singleJourney.distance > minDistance;
  })
  return journeysArray;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
