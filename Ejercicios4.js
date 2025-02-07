
//Ejercicio 4 = Encontrar cursos comunes
 
let student1Courses = ['Matematicas', 'Ingles', 'Programar'];
let student2Courses = ['Geografia', 'Español', 'Programar'];

function findCommonCourses(courses1, courses2) {
  let commonCourses = courses1.filter(course => courses2.includes(course));
  console.log(commonCourses);
}

findCommonCourses(student1Courses, student2Courses); 