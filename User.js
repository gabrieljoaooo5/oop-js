export default class User {
    #firstName
    #lastName
    #role
    #active
    constructor(firstName, lastName, role, active=true) {
        this.#firstName = firstName,
        this.#lastName = lastName,
        this.#role = role || 'student'
        this.#active = active
    }

    get firstName() {
        return this.#firstName
    }

    get lastName() {
        return this.#lastName
    }

    get role() {
        return this.#role
    }

    get active() {
        return this.#active
    }

    set active(newValue) {
        this.#active = newValue
    }

    showFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}