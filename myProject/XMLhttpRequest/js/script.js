jQuery(function(){
	alert('Hello world')
	});


var Constructor = function(){};
var object = new Constructor();
console.log(object.__proto__ === Constructor);
console.log(object.__proto__ === Constructor.prototype);
console.log(object.__proto__ === Constructor.__proto__);


var Constructor = function() {
        this.a = 1;
        this.b = 2;
    }
var object = Constructor();
console.log(object);  

var obj ={
	name: 'Jhon'
}

console.log(obj.__proto__);  