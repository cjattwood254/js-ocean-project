// Task 1: Implement a function that calculates total fish caught

// creates a function that will calculate the total number of fish caught according to the arrays below
function calculateFishCaught(totalFish){
    
    // starts the calculation out at 0
    let total = 0;
    
    // adds each number in the array to the total
    totalFish.forEach(fishQuantity =>{
        total += fishQuantity;
    });
    
    // gives us the total of all the numbers in the array
    return total;
}

// tells us the number of fish caught on a weekend/weekday
let weekendFishCaught = [50, 75, 25];
let weekdayFishCaught = [100, 60, 40, 100];

// gives us a variable that allows us to easily output the total of whatever array we put in the parameter
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);

// prints the total from the above function in the console
console.log(totalWeekendFishCaught);

// Task 2: Implement a function to filter out endangered species from a list of fish options

// creates a function that checks if the option.endangered parameter is true or false
function filterEndangeredFish(fishOptions){
    
    // returns a fish object only if the endangered option is set to false
    return fishOptions.filter(option => !option.endangered)
}

// creates an array filled with different fish that have name and endangered parameters
let fishOptions = [

    // gives each object a way to have a unique name and endangered boolean
    {name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
];

// Task 3: Define a class for Research Institute

// creates a class to concisely create Research Institute objects(?) by just inputing name, location, specialty, and size info when creating a new object
class ResearchInstitute{
    constructor(name, location, specialty, size){
       
    // uses the specific parameters in the constructor to give each new object you create a unique name, location, specialty, and size
       this.name = name;
       this.location = location;
       this.specialty = specialty;
       this.size = size;
    }
}
    
// Task 4: Extend the ResearchInstitute class for Marine ResearchInstitute

// creates a class that's related to and pulls info from ResearchInstitute to create a more specialized object
class MarineResearchInstitute extends ResearchInstitute{
    constructor(name, location, specialty, size, waterLocation, climate){
        
        // pulls this info from the ResearchInstitute and uses it for the new MarineResearchInstitute object
        super(name, location, specialty, size);
        this.waterLocation = waterLocation;
        this.climate = climate;
    }
}

// Task 5: Implement a class with default parameters for Oceanic Dive Gear

class OceanicDiveGear{

    // creates an OceanicDiveGirl object that has the default parameters "Deap Sea" and "Scuba". If the class is called with empty parameters, it will call the default parameters
    constructor(depth = "Deap Sea", type = "Scuba"){
        this.depth = depth;
        this.type = type;
    }
}
// this creates an object with the default parameters
let diveGear = new OceanicDiveGear();
