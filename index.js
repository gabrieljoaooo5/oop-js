import User from "./User.js";
import Admin from "./Admin.js"
import Teacher from "./Teacher.js";

const user = new User("Joao", "Andrade")
user.active = false
console.log(user.showFullName())
console.log(user.active)
