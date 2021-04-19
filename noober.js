// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Parse the data given in the random ride Object, and present it in human-readable format
  // Example: Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.
  // Create a well-named variable for each data point in the Object

  let firstName = ride.passengerDetails.first
  let lastName = ride.passengerDetails.last
  let phoneNumber = ride.passengerDetails.phoneNumber
  let puAddress = ride.pickupLocation.address
  let puCity = ride.pickupLocation.city
  let puState = ride.pickupLocation.state
  let puZip = ride.pickupLocation.zip
  let doAddress = ride.dropoffLocation.address
  let doCity = ride.dropoffLocation.city
  let doState = ride.dropoffLocation.state
  let doZip= ride.dropoffLocation.zip
  let passengerNumber = ride.numberOfPassengers
  let purple = ride.purpleRequested

  // Use conditional logic 
  let serviceLevel
  // if the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple" as the level of service, e.g. Noober Purple Passenger: Freeman Waters...
  if (purple) {
    serviceLevel = `Purple`
  // if the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
  // A request for Noober Purple supercedes the Noober XL logic
  } else if (!purple && passengerNumber >3) {
    serviceLevel = `XL`
  } else {
    serviceLevel = `X`
  }

  console.log(`Noober ${serviceLevel} Passenger ${firstName} ${lastName} - ${phoneNumber}. Pickup at ${puAddress}, ${puCity}, ${puState}, ${puZip}. Drop off at ${doAddress}, ${doCity}, ${doState}, ${doZip}`)

  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
