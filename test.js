var numbers = [1, 2, 3, 10, 9, 23, 45, 6];

//TODO find function
var che = numbers.find(function(val) {
    return val > 5;
})

//TODO find index function
var result = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 11;
})


//TODO finlter function
var filter = numbers.filter((currentValue, index, arr) => {
    // console.log(`arr -- `+index);
    return currentValue > 5;
});

var slice = numbers.slice(6, 9);

//var splice = numbers.splice(1,3,4,4,4,4);

var map = numbers.map(num => {
    return num * 2;
})



console.log(`values for find ` + che);
console.log(`values find index : ` + result);
console.log(`values of filter : ` + filter);
console.log(`sliced arrary ~~ ` + slice);
//console.log(`splice  arrary ~~ `+splice);
console.log(`Mapped  arrary ~~ ` + map);

console.log(`main array  : ` + numbers);