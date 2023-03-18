import User from "./User.js";

class Admin extends User {
    constructor(firstName, lastName, role='admin', active='true') {
        super(firstName, lastName, role, active)
    }

    createCourse(courseName) {
        return `course ${courseName} successfully created!`
    }

    showFullName() {
        return 'Not possible.'
    }
}

export default Admin