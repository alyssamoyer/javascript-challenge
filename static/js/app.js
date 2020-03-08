// from data.js
var tableData = data;
function updateTable(dataSelect){

//select the table body from index
var tbody = d3.select("tbody");


//loop through the data and add a row to the table for each
dataSelect.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};
//creates table with all UFO data
updateTable(tableData);

//variable for the button on the page
var button = d3.select("#filter-btn");

  //var userInput = d3.select("#form-control");

  //var inputValue = userInput.property("value");

 // console.log(inputValue);
//  var table = d3.select('tbody');
//  var rows = table.selectAll("tr");
//  //console.log(rows);
//  var td = rows.selectAll("td");
//  //console.log(td);
// Array.from(td).forEach((ind) => {
//   console.log(ind);
// });
  
button.on("click", function() {
    
    // Select the input element and get the raw HTML node
    var userInput = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = userInput.property("value");
  
    console.log(inputValue);
    
  
    var dataSearch = tableData.filter(ufo => ufo.datetime === inputValue);
    if (inputValue == null){
      console.log("Please enter a date");
      console.log(dataSearch);
    }
    else if (dataSearch == null) {
      console.log("No entries for this date. Please make sure your date is valid")
    } 
    else {
      console.log(dataSearch);
       var tbody = d3.select("tbody");
       var rows = tbody.selectAll("tr").remove();

       dataSearch.forEach((ufo) => {
         var row = tbody.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
    });
    }
    
   

});

