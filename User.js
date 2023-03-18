export default class User {
    constructor(firstName, lastName, role, active=true) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.role = role || 'student'
        this.active = active
    }
    showFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}