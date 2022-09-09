let Universitys = [];

module.exports = class University {

  constructor(name, id) {
    this.name = name;
    this.id = id;
    Universitys.push({name, id});
  }

  getNameUniversity(id) {
    const UniversityFilter = Universitys.find(e => e.id === id);
    return UniversityFilter.name
  }
}
