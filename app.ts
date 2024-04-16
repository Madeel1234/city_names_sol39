#! /usr/bin/env node

// Task # 39
//City names: write a function called city_country() that takes in the name of city and its country. The function should return
// A string formatted like this
// "Lahore Pakistan"
// Call your function with atleast three city country pairs, and print the values thats returned


function cityCountry(City: String, Country: String): String {return `${City}, ${Country}`}
let C1  = cityCountry('Lahore', 'Pakistan')
let C2  = cityCountry('Tokyo', 'Japan')
let C3  = cityCountry('Paris', 'France')

console.log(C1)
console.log(C2)
console.log(C3)