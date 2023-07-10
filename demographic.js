

function calculatePopulationSumOfTheObject(myValue) {
  let populationSum = 0;

  for (let i = 0; i < myValue.length; i++) {
    for (let j = 0; j < myValue[i].length; j++) {
      const objectValue = myValue[i][j];
      .filter
      if (objectValue.temp <= 10) {
        if(objectValue === null){
            continue;
        }
        populationSum += objectValue.population;
      }
    }
  }


   return populationSum;
 }

const myArrayValue = [    
    [
    { name: 'Sydney', population: 50000, temp: 3.0, currency: 'NG' },
    { name: 'London', population: 100000, temp: 8.5, currency: 'NG' },
    { name: 'New York', population: 20000, temp: 15.0, currency: 'NG' },
    { name: 'Tokyo', population: 50000, temp: 6.2, currency: 'NG' },
    ],

    [    
    { name: 'Sydney', population: 40000, temp: 3.0, currency: 'NG' },
    { name: 'London', population: 20000, temp: 8.5, currency: 'NG' },
    { name: 'mars', population: 1250000, temp: 3.0, currency: 'NG' },
    { name: ' sigapor', population: 9000000, temp: 8.5, currency: 'NG' },
    ],

 
    [
    { name: 'mars', population: 1250000, temp: 3.0, currency: 'NG' },
    { name: ' sigapor', population: 9000000, temp: 8.5, currency: 'NG' },
    { name: 'mars', population: 1250000, temp: 3.0, currency: 'NG' },
    { name: ' sigapor', population: 9000000, temp: 8.5, currency: 'NG' },
    ],
]
   
  


var totalPopulation  = calculatePopulationSumOfTheObject(myArrayValue)
console.table(myArrayValue)
console.log(` the total population of the temperature is ${totalPopulation}`)