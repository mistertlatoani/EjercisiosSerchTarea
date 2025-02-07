

// Ejercicio 5 = Manipulacion d Array

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(people.indexOf("Dani"), 1);

people.splice(people.indexOf("Juan"), 1);

people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

people.push("MrTlatoani");

for (let person of people) {
  console.log(person);
  if (person === "Maria") break;
}

console.log(people.indexOf("Maria"));

console.log(people); 
