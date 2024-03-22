// var futureStudentNames = [];


// var futureStudentNames = new Array();

// var stringsArray = ["apple", "banana", "orange", "grape"];

// var numbersArray = [1, 2, 3, 4, 5];
// var booleanArray = [true, false, true, true];


// var mixedArray = ["apple", 10, true, "banana", false, 20];


// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// function displayQualifications() {
//     for (var i = 0; i < qualifications.length; i++) {
//         document.write(qualifications[i] + "<br>");
//     }
// }

// displayQualifications();



// var studentNames = ["Alice", "Bob", "Charlie"];
// var scores = [400, 350, 450];

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / 500) * 100;
//     console.log(studentNames[i] + "'s score: " + scores[i] + ", Percentage: " + percentage.toFixed(2) + "%");
// }


// var colors = ["red", "green", "blue"];

// var userColorBegin = prompt("Enter a color to add to the beginning:");
// colors.unshift(userColorBegin);
// document.write("<br>After adding color to the beginning: " + colors);

// var userColorEnd = prompt("Enter a color to add to the end:");
// colors.push(userColorEnd);
// document.write("<br>After adding color to the end: " + colors);

// colors.unshift("yellow", "orange");
// document.write("<br>After adding two more colors to the beginning: " + colors);

// colors.shift();
// document.write("<br>After deleting the first color: " + colors);

// colors.pop();
// document.write("<br>After deleting the last color: " + colors);

// var index = prompt("Enter the index where you want to add a color:");
// var userColor = prompt("Enter a color to add at the index:");
// colors.splice(index, 0, userColor);
// document.write("<br>After adding color at the specified index: " + colors);

// var deleteIndex = prompt("Enter the index from where you want to delete color(s):");
// var deleteCount = prompt("Enter the number of colors you want to delete:");
// colors.splice(deleteIndex, deleteCount);
// document.write("<br>After deleting color(s) at the specified index: " + colors);


// var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
// var selectedCities = cities.slice(0, 3);

// console.log(selectedCities);


// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);


// var fifoQueue = [];

// fifoQueue.push("Value1");
// fifoQueue.push("Value2");
// fifoQueue.push("Value3");

// console.log(fifoQueue.shift());
// console.log(fifoQueue.shift());
// console.log(fifoQueue.shift());


// var lifoStack = [];

// lifoStack.push("Value1");
// lifoStack.push("Value2");
// lifoStack.push("Value3");

// console.log(lifoStack.pop());
// console.log(lifoStack.pop());
// console.log(lifoStack.pop());


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");


