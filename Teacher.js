import User from "./User.js";

class Teacher extends User {
    constructor(firstName, lastName, role='teacher', active='true') {
        super(firstName, lastName, role, active)
    }

    approveStudent(studentName) {
        return `student ${studentName} successfully approved!`
    }
}

console.log(new Teacher("Joao", "Andrade").approveStudent("Pedro"))