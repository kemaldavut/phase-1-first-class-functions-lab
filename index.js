// Code your solution in this file!
function returnFirstTwoDrivers() {
     const drivers = ['Antonia', 'Nuru'];
     console.log(drivers[0])
     console.log(drivers[1])
     return drivers;
    }

//returnLastTwoDrivers()

function returnLastTwoDrivers() {
    const driversLast = ['Antonia', 'Nuru','Amari','Mo'];
    return driversLast.slice(driversLast.length -2)
   }

//selectingDrivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier()
function createFareMultiplier (sayi) {
    function tablo (rakam){
    return rakam * sayi
    }
    return tablo
}
//fareDoubler()
function fareDoubler (sayi) {
    return 2 * sayi
    }
   
// fareTripler
function fareTripler (sayi) {
    return 3 * sayi
}
    
//selectDifferentDrivers(arrayOfDrivers, function)
function selectDifferentDrivers(arrayOfDrivers, xFunction) {
    return xFunction (arrayOfDrivers)
}