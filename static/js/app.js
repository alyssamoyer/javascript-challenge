// from data.js
var tableData = data;

//select the table body from index
var tbody = d3.select("tbody");


//loop through the data and add a row to the table for each
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  var button = d3.select("#filter-btn");

  //var userInput = d3.select("#form-control");

  //var inputValue = userInput.property("value");

 // console.log(inputValue);


  
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var userInput = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = userInput.property("value");
  
    console.log(inputValue);
    //console.log(people);
  
    var dataSearch = tableData.filter(ufo => ufo.datetime === inputValue);
  
    console.log(dataSearch);
});