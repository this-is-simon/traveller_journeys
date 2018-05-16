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
}

// Cinema.prototype.findFilmsByGenre = function(genre){
//   const foundFilms = this.films.filter((singleFilm) => {
//     return singleFilm.genre === genre;
//   })
//   return foundFilms;
// }

// Cinema.prototype.getListOfTitles = function(){
//   const listOfTitles = this.films.map((singleFilm) => {
//     return singleFilm.title;
//   });
//   return listOfTitles;
// }

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
