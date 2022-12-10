// // total number of month//
console.log("Financial Analysis")
console.log("----------------------------")

//The total number of months included in the dataset
var totalMonths = finances.length;
console.log("Total Months: " + totalMonths);


// // the net total amount of profit/loss over the period//
var profits = []

for (i=0; i<finances.length; i++){
    profits.push(finances[i] [1]);
}

var totalsum = 0;

for (var value of profits) {
    totalsum += value;
}
console.log("Total: $" + totalsum);

//The average of the changes in Profit/Losses over the entire period./

var averageChange =  totalsum / totalMonths ;

averageChange = Number(averageChange.toFixed(2));

console.log("Average Change: $" + averageChange);

// The greatest increase in profits (date and amount) over the entire period
console.log('Greatest Increase in Profits: '+'in progress')

//The greatest decrease in losses (date and amount) over the entire period.
console.log('Greatest Decrease in Profits: '+'in progress')