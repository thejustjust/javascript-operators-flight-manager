function Flights() {
  calculateNumberOfFlights(passengers,flightCap){
    
    if(passengers % flightCap ==0){
    let flights = passengers / flightCap;
    } else {
    flights = (passengers / flightCap) + 1;
    }
    return flights;
  }
return {calculateNumberOfFlights};
}
module.exports = Flights();
