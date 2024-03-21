// const person = new Object();
// person.name = "Mateen";
// person.age = "25";
// person.city = "Gujrat";
// console.log(person);

// person.name = "Muhammad Mateen Baig";
// console.log(person.name);


const carObj = {
    make: "Ford",
    model: "Mustan",
    year: 1960,
    color: "black",
    description: function(){
        return `${this.make} ${this.year} ${this.color}`;
    },
};
console.log(carObj.description());