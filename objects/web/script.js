const container = document.getElementById("container");

const people = [
    {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
  }
];

const addPerson = (objectArr, fName, lName, newId) => {
    
    if(typeof objectArr !== 'object'){
        console.log("Not an object");
        return false;
    }
    if(typeof fName !== 'string'){
        console.log("First name needs to be string");
        return false;
    }
    if(typeof lName !== 'string'){
        console.log("Last name needs to be string");
        return false;
    }
    if(typeof newId !== 'number'){
        console.log("ID needs to be number");
        return false;
    }

    try{
        const person = {
            firstName: fName,
            lastName : lName,
            id       : newId,
            fullName : function() {
                return this.firstName + " " + this.lastName;
            }
        }
        objectArr.push(person);

    }catch(e){
        console.log(e);
    }
    
    return true;
}

addPerson(people, "Sam", "Bradbury", 3434);
addPerson(people, "This", "Guy", 3214);
addPerson(people, "Bud", "Smith", 6678);

addPerson("people", 111, 222, "6678");
addPerson(people, 111, 222, "6678");
addPerson(people, "111", 222, "6678");
addPerson(people, "111", "222", "6678");
addPerson(people, "first", "last", 6678);


people.forEach(p => {
    console.log(p.fullName());
});