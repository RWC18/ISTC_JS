// function Person (name, surname, age, nation) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	this.nation = nation;
// 	this.announce = function () {
// 		console.log("Person Info \n"+this.name+" | "+this.surname+" | "+this.age+" | "+this.nation)
// 	}
// }



// Petros.announce()

function Person (name, surname, nationality) {
	this.name = name;
	this.surname = surname;
	this.nationality = nationality;
	this.announce = function () {
		console.log("Person Info \n"+this.name+" | "+this.surname+" | "+this.nationality)
	}
}

var Russian = function (name, surname, eyeColor) {
	Person.call(this, name, surname, "Russian");
	this.eyeColor = eyeColor;
}

var GreenEyeColorRus = function (name, surname) {
	Russian.call(this, name, surname, "Green");
}
var BlackEyeColorRus = function (name, surname) {
	Russian.call(this, name, surname, "Black");
}

var Armenian = function (name, surname) {
	Person.call(this, name, surname, "Armenian");
}

var Germany = function (name, surname) {
	Person.call(this, name, surname, "Germany");
}

var Korean = function (name, surname) {
	Person.call(this, name, surname, "Korean");
}


// var Lev = new Russian("Lev","Yashin");
// var Garnik = new Armenian("Garnik","Gasparyan");
// var Jack = new Germany("Jack","Wolf");
// var Son = new Korean("Son","Min Hun");


// Lev.announce()
// Garnik.announce()
// Jack.announce()
// Son.announce()


var Kristina = new GreenEyeColorRus("Kristina", "Ivanenko")
var Maria = new BlackEyeColorRus("Maria", "Shevchenko")
Kristina.announce()
Maria.announce()