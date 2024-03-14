// Task 1: Implement a function that calculates total fish caught
function calculateFishCaught(totalFish){
    let total = 0;
    totalFish.forEach(fishQuantity =>{
        total += fishQuantity;
    });
    return total;
}
let weekendFishCaught = [50, 75, 25];
let weekdayFishCaught = [100, 60, 40, 100];
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);
console.log(totalWeekendFishCaught);

// Task 2: Implement a function to filter out endangered species from a list of fish options
function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered)
}

let fishOptions = [
    {name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
];

// Task 3: Define a class for Research Institute

class ResearchInstitute{
    constructor(name, location, specialty, size){
       this.name = name;
       this.location = location;
       this.specialty = specialty;
       this.size = size;
    }
}
    
// Task 4: Extend the ResearchInstitute class for Marine ResearchInstitute

class MarineResearchInstitute extends ResearchInstitute{
    constructor(name, location, specialty, size, waterLocation, climate){
        super(name, location, specialty, size);
        this.waterLocation = waterLocation;
        this.climate = climate;
    }
}

// Task 5: Implement a class with default parameters for Oceanic Dive Gear

class OceanicDiveGear{
    constructor(depth = "DeapSea", type = "Scuba"){
        this.depth = depth;
        this.type = type;
    }
}
// this creates an object with the default parameters
let diveGear = new OceanicDiveGear();
