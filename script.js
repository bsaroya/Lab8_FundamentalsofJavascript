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
  const studentJSON = JSON.stringify(student);
  console.log("JSON String:", studentJSON);
  
  const studentParsed = JSON.parse(studentJSON);
  console.log("Parsed Object:", studentParsed);
  console.log("Original vs Parsed Equal (Shallow Check):", student.name === studentParsed.name);
  const { name, courses } = student;
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
  
  const scores = [85, 92, 78, 90];
  const [score1, score2] = scores;
  console.log("First Score:", score1);
  console.log("Second Score:", score2);
  const clonedStudent = { ...student, graduationYear: 2025 };
  console.log("Cloned Student with graduationYear:", clonedStudent);
  const newCourses = ["Cloud Computing", "Machine Learning"];
const allCourses = [...student.courses, ...newCourses];
console.log("Merged Courses Array:", allCourses);
student.addCourse = function (course) {
    this.courses.push(course);
  };
  
  student.totalCourses = function () {
    return this.courses.length;
  };
  
  student.addCourse("Node.js");
  console.log("Courses after adding new course:", student.courses);
  console.log("Total Number of Courses:", student.totalCourses());
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  console.log("Average Score:", averageScore.toFixed(2));
    
            