const user = {
    firstName: "Joao",
    lastName: "Andrade",
    birth_date: "02/10/1998",
    role: "admin",
    active: true,
    showFullName: function() {
        console.log(this.firstName, this.lastName)
    },
}
/*
user.showFullName() // Joao Andrade

const showFullName = user.showFullName
showFullName() // undefined undefined - lost context
showFullName.bind(user)() // Joao Andrade
showFullName.call(user) // Joao Andrade
showFullName.apply(user) // Joao Andrade
*/


function UserPrototype() {
    this.firstName = "Joao",
    this.showFirstName = function() {
        return this.firstName
    }
}
UserPrototype.prototype.lastName = "Andrade"
let user1 = new UserPrototype()
console.log(user1.showFirstName(), user1.lastName) // Joao Andrade, prototype inheritance