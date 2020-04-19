/**
 * Class representing a Employee
 * @class
 */
class Employee {
    /**
     * Create a Employee.
     * @param {string} name - Name of the Employee
     * @param {number} id - ID of the Employee
     * @param {string} title - Title of the Employee
     */
    // @param {string} email?

    constructor(name, id, email, title) {
      if (!name || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
      }
      if (typeof id !== "number" || isNaN(id) || id < 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number");
      }
      if (!email || !email.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string");
      }
      // if (!title || !title.trim().length) {
      //   throw new Error("Expected parameter 'title' to be a non-empty string");
      // }
      this.name = name;
      this.id = id;
      this.email = email;
      // this.title = title;
    }
    //Methods
    getName(){

    }
    getId(){
      
    }
    getEmail(){

    }
    getRole(){

    }
  }
  
  module.exports = Employee;