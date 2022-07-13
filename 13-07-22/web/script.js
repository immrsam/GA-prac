const container = document.getElementById("container");
class Person{
    constructor(fName, lname, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

}

class Student extends Person{
    constructor(fName, lName, age, score){
        super(fName, lName, age);
        this.score = score;
    }
}