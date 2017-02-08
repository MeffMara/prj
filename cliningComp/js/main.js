// var total = 0,
//     count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// };

// alert(total);




// $(document).ready(function() {
//     console.log('Arkadiy' < 'Tatiana'); 
// });
// for (var number = 1; number <= 100; number++) {
//     var text = '';
//     if (number % 3 == 0)
//         text += 'Fuzz';
//     if (number % 5 == 0)
//         text += "Buzz";

//     console.log(text || number);
// }

var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mauntain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += '\\';
    };
    flat(3);
    mauntain(4);
    flat(6);
    mauntain(1);
    flat(1);
    return result;
};

console.log(landscape());