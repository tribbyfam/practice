

// indexOf() first instence of elemet found
var arr = ['apple','orange','pear'];

console.log("found:", arr.indexOf("orange") != -1);

// Filter() creates new array with elements that pass criteria
var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
var newArr = arr.filter(function(item){
    return item.name === "orange";
});

// forEach() simila to for loop
arr.forEach(function(item,index){
	console.log(item);
});

// map() returns new array with results of calling a function
var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(){
        
    return oldArr.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        return item;
    });
    
}

console.log(getNewArr());


// reduce() applies to accumulator and each value has to decrease
var arr = ["apple","orange","apple","orange","pear","orange"];

function getWordCnt(){
    return arr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}


