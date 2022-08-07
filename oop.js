// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

// class Unicorn {
//   constructor(name, say) {
//     this.name = name;
//     this.say = say;
//     this.color = "Silver";
//
//   }
// changeSay(getSay) {
//   this.say = `*~* ${this.say} *~*`;
// }
// }
//
//
// var unicorn1 = new Unicorn("Bob", "Hi");
//
// unicorn1.changeSay();
// console.log(unicorn1);



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name, pet = "Bat") {
    this.name = name;
    this.pet = pet; //need to figure out how to default bat when dynamic property
    this.thirsty = true;
  }
  drink() {
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("Bob");

vampire1.drink();
console.log(vampire1);


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

  class Dragon {
    constructor(name, rider, color, meals = 0, isHungry = true) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.meals = meals;
      this.isHungry = isHungry;

    }
    eat() {
      this.meals = this.meals +1;
      if (this.meals >= 4) {
        this.isHungry = false;
      }

    }

  }

  var dragon1 = new Dragon ("Toothless", "Court", "Black");
  dragon1.eat();
  dragon1.eat();

  console.log(dragon1);

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, disposition, age = 0, isAdult = false, isOld = false, hasRing = false) {
    this.name = name;
    this.disposition = disposition;
    this.age = age;
    this.isAdult = isAdult;
    this.isOld = isOld;
    this.hasRing = hasRing;
  }
changeAdult() {
  if (this.age >= 33) {
  this.isAdult = true;
}
}
changeHasRing() {
if (this.name = "Frodo") {
  this.hasRing = true;
}
}
changeIsOld() {
  if (this.age >=101) {
    this.isOld = true;
  }
}
celebrateBirthday() {
  this.age = this.age +1;
}


};

var hobbit1 = new Hobbit ("Frodo", "happy", 55);
hobbit1.changeAdult();
hobbit1.changeHasRing();
hobbit1.changeIsOld();
hobbit1.celebrateBirthday();
console.log(hobbit1);

//Another solution to the hobbit challenge:
/*
class Hobbit {
  constructor(name, disposition, age = 0, isAdult = false, isOld = false, hasRing = false) {
    this.name = name;
    this.disposition = disposition;
    this.age = age;
    this.isAdult = isAdult;
    this.isOld = isOld;
    this.hasRing = hasRing;
  }
changeAdult() {
  if (this.age >= 33) {
  this.isAdult = true;
}
}
changeHasRing() {
if (this.name = "Frodo") {
  this.hasRing = true;
}
}
changeIsOld() {
  if (this.age >=101) {
    this.isOld = true;
  }
}
celebrateBirthday() {
  this.age = this.age +1;
  this.changeAdult();
  this.changeIsOld();

}


};

var hobbit1 = new Hobbit ("Frodo", "happy", 55);
hobbit1.changeHasRing();
hobbit1.celebrateBirthday();
console.log(hobbit1); */
