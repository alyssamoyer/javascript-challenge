// from data.js
var tableData = data;
function createTable(dataSelect){

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
//calls the create table function
createTable(tableData);

//variable for the button on the page
var button = d3.select("#filter-btn");
 
  
button.on("click", function() {
    
    //Select the user input
    var userInput = d3.select("#datetime");
    var inputValue = userInput.property("value");
  
    console.log(inputValue);
    
    //filter the dataset to match user input
    var dataSearch = tableData.filter(ufo => ufo.datetime === inputValue);
   
      console.log(dataSearch);

      //Remove the curent table rows
       var tbody = d3.select("tbody");
       var rows = tbody.selectAll("tr").remove();

       //Add the table rows containing the user entered date
       dataSearch.forEach((ufo) => {
         var row = tbody.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
    });
      
   

});

