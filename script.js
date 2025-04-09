const student = {
    name: "Balraj Saroya",
    age: 21,
    enrolled: true,
    courses: ["JavaScript", "Web Development", "Databases"]
  };
  student.displayInfo = function () {
    return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  };
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Display Info:", student.displayInfo());
      