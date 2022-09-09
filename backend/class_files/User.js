let University = require("./University");
let Users = [];


module.exports = class User {

  constructor(name,id) {
    this.name = name;
    this.id = id;
    const university = new University();
    const universityName = university.getNameUniversity("1");
    Users.push({name, universityName});
  }

  getPersons() {
    return Users;
  }

  // setNewUniversity(name, city) {
  //   this.name = name;
  //   this.city = city;
  // }
}