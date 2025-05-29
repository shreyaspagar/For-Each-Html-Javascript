// let array = [1 , 2 , 3 , 4 , 5 , 6];

// array.forEach((el) => {  // arrow function
//     console.log(el);
// });




// array.forEach(function (el) {
//     console.log(el);
// });

// // let print  = function (el) {
// //     console.log(el);
// // };

// // array.forEach(print);


let array = [
    {
    name:"shreyas",
    marks:89,
},

{
    name : "Aman",
    marks : 85,
},

{
   name : "Pooja",
   marks : 96, 
},
];


array.forEach((student) => {
    console.log(student.marks);
});


