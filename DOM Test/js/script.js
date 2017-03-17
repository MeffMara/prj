var element = document.querySelectorAll('.menu-list a');

console.log(element[2].innerHTML);

element[2].innerHTML = 'this is new text';

element[2].setAttribute('href','http://yandex.com');