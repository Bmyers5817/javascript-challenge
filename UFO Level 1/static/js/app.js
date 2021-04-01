// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(data);

// Loop through and add rows, cells and data
data.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");
  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);
 
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

// Select the input date get the raw HTML nodes
var inputElement = d3.select("#datetime");

// Get the value property of the input date, state, shape
var inputValue = inputElement.property("value");

// console.log input value
console.log(inputValue);

// Filter Data with datetime equal to input value
var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

// console.log filter values
console.log(filteredData);

filteredData.forEach(function(selections) {

console.log(selections);

// Append one table row `tr` for each UFO Sighting object
var row = tbody.append("tr");

// Use `Object.entries` to console.log each UFO Sighting value
Object.entries(selections).forEach(function([key, value]) {
    console.log(key, value);

// Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
});
});