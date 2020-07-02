function Flights() {
  calculateNumberOfFlights(passengers,flightCap){
    let flights;
    
    if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
         throw new Error("The number of passengers must be a positive integer value")
    }

    if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
      throw new Error("The capacity of the flight must be a positive integer value")
    }
    
    if(passengers % flightCap ==0){
    flights = passengers / flightCap;
    } else {
    flights = (passengers / flightCap) + 1;
    }
    return flights;
  }
return {calculateNumberOfFlights};
}
module.exports = Flights();
