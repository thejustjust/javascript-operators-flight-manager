function Flights() {
  calculateNumberOfFlights(numPass,flightCap){
    if(numPass % flightCap ==0){
    let flights = numpass / flightCap;
    } else {
    flights = (numpass / flightCap) + 1;
    }
    return flights;
  }
return {calculateNumberOfFlights};
}
module.exports = Flights();
