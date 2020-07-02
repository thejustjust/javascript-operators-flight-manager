function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let passengersNumber = 0;
        let passengers;
        for(passengers of passengersArray) {
            passengersNumber += passengers;
            }
        if (passengersNumber > flightCapacity) {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
            }
        return passengersNumber;
        }
  function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, 
        businessSeatsPerFlight, economySeatsPerFlight) {
        
        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, 
        regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

        var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

        var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

        var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
        regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
        }

  
return {checkFlightCapacity, distributeAllSeatsToAllPassengers};

}

module.exports = Passengers();
