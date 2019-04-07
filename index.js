// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let name = driver.split(" ")
    const first = name[0]
    const last = name[1]
    return {firstName:  first, lastName: last}
  })//end of map
}//end of nameToAttributes

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })//end of filter
}//end of attributesToPhrase
