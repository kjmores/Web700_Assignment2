/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Kristienne Jewel Mores Student ID: 129417226 Date: June 3, 2023
*
********************************************************************************/ 

var collegeData = require('./modules/collegeData')

// Initialize the collegeData
collegeData.initialize()
  .then(() => {
    console.log('\n*** Confirming the Output - Successful Data Initialization ***\n');
    return collegeData.getAllStudents();
  })
  .then(students => {
    // Return the number of retrieved students
    console.log(`Successfully retrieved ${students.length} students`);
    return collegeData.getCourses();
  })
  .then(courses => {
    // Return the number of retrieved courses
    console.log(`Successfully retrieved ${courses.length} courses`);
    return collegeData.getTAs();
  })
  .then(tas => {
    // Return the number of retrieved TAs
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })
  .catch(error => {
    // Return any errors that occurred
    console.error(error);
  });

