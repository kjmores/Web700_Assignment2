var fs = require('fs');

class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

var dataCollection = null;

// Reading the students.json & courses.json for function to initialize the data
function initialize() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
      if (err) {
        reject('Unable to read students.json');
        return;
      }

      fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
        if (err) {
          reject('Unable to read courses.json');
          return;
        }

        var students = JSON.parse(studentDataFromFile);
        var courses = JSON.parse(courseDataFromFile);

        dataCollection = new Data(students, courses);
        resolve();
      });
    });
  });
}

// Function to retrieve all the students
function getAllStudents() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students && dataCollection.students.length > 0) {
      resolve(dataCollection.students);
    } else {
      reject('No results returned');
    }
  });
}

// Function to retrieve all the TAs
function getTAs() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students && dataCollection.students.length > 0) {
      var tas = dataCollection.students.filter(student => student.TA);
      resolve(tas);
    } else {
      reject('No results returned');
    }
  });
}

// Function to retrieve all the courses
function getCourses() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.courses && dataCollection.courses.length > 0) {
      resolve(dataCollection.courses);
    } else {
      reject('No results returned');
    }
  });
}

// List of module functions for exporting 
module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
