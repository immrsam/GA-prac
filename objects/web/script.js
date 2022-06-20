const container = document.getElementById("container");

const people = [];

const addPerson = (objectArr, fName, lName, userId, isAdmin = false) => {

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
    if(typeof userId !== 'number'){
        console.log("ID needs to be number");
        return false;
    }
    if(typeof isAdmin !== 'boolean'){
        console.log("Admin check needs to be true or false");
        return false;
    }

    console.log(`Attempting to add ${fName} ${lName} ${userId}`);

    if(!isIdAvailable(objectArr, userId)){
        console.log(`${userId} already exists`);
        return false;
    };

    try{
        const person = {
            firstName: fName,
            lastName : lName,
            id       : userId,
            admin    : isAdmin,
            listDetails : function() {
                return this.id + " " + this.firstName + " " + this.lastName + " Admin: " + this.admin;
            }
        }
        objectArr.push(person);

    }catch(e){
        console.log(e);
    }

    return true;
}

const isIdAvailable = (objectArr, userId) => {
    let userSearch = objectArr.find(item => item.id === userId);
    if(userSearch != null){
        return false;
    } else{
        return true;
    }
}

addPerson(people, "Sam", "Bradbury", 3434, true);
addPerson(people, "This", "Guy", 3214);
addPerson(people, "Bud", "Smith", 6678);

addPerson(people, "Nobby", "Blinky", 6678);

people.forEach(p => {
    console.log(p.listDetails());
});