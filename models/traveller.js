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
  const grandTotal = this.journeys.reduce((total, distance) => {
    return total += distance.distance;
  }, 0);
  return grandTotal;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModesOfTransport = this.getModesOfTransport();
  const uniqueTransportArray = allModesOfTransport.filter((singleMode, index) => {
    return allModesOfTransport.indexOf(singleMode)== index;
   });
  return uniqueTransportArray;
};

// const getEvens = function(numbersArray) {
//   const evensArray = [];
//   numbersArray.forEach((number) => {
//     if (number % 2 === 0){
//       evensArray.push(number);
//     }
//   });
//   return evensArray;
// }
//
// console.log(getEvens(numbersArray));


module.exports = Traveller;
