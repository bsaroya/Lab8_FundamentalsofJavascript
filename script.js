const student = {
    name: "Balraj Saroya",
    age: 21,
    enrolled: true,
    courses: ["JavaScript", "Web Development", "Databases"]
  };
  student.displayInfo = function () {
    return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  };
    