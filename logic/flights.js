function Flights() {
  calculateNumberOfFlights(numPass,flightCap){
    if(numPass % flightCap ==0){
    let numFlights = numpass / flightCap;
    }
    return numFlights;
  }
}
return {calculateNumberOfFlights};
module.exports = Flights();
