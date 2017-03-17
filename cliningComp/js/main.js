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

// var landscape = function() {
//     var result = "";
//     var flat = function(size) {
//         for (var count = 0; count < size; count++)
//             result += "_";
//     };
//     var mauntain = function(size) {
//         result += "/";
//         for (var count = 0; count < size; count++)
//             result += "'";
//         result += '\\';
//     };
//     flat(3);
//     mauntain(4);
//     flat(6);
//     mauntain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());


// function countBs(a) {
//     if

// }
// console.log(a);

// var listOfNumbers = [2, 3, 4, 56, 7, 9, 1, 10, 0.4, -4.56];
// console.log(listOfNumbers[4] - listOfNumbers[2]);
// console.log(listOfNumbers[2], listOfNumbers[4]);

// var h1 = document.getElementsByClassName('header');
// console.log(h1);
// elementList = document.querySelectorAll('body');
// console.log(elementList);


// var slideIndex = 1;
// showSlides(slideIndex);

// var slidePlus = function(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlides(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName('mySlides');
//     var dots = document.getElementsByClassName('dot');

//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace('active', '');
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     dots[slideIndex - 1].className += 'active';



// };


var slider = {
    slides: ['./img/boys-soccer-school.jpg', './img/Soccer_School.jpg', './img/Young-soccer.jpg'],
    frame: 0,
    set: function(image) {
        document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
    },
    init: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if (this.frame < 0) this.frame = this.slides.length - 1;
        this.set(this.slides[this.frame]);
    },
    right: function() {
        this.frame++;
        if (this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};

window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    }, 5000);

};