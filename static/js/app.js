// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function table(data) {

    tbody.text(" ")

    data.forEach((UFO) => {

        var row = tbody.append("tr");

        Object.entries(UFO).forEach(([key, value]) => {

        var cell = row.append("td");

        cell.text(value);
        });
    });
}
table(tableData);

var datetime_value = d3.select("#datetime")
var filter_table = tableData

function click(){

    d3.event.preventDefault() 
    
    console.log(datetime_value.property("value"));

    var new_table = tableData.filter(UFO => UFO.datetime===datetime_value.property("value"))


    table(new_table);
}

datetime_value.on("change", click)



