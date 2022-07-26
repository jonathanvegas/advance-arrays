let studentNames = ["jhon", "bobby", "jason"];

let teachers = [
  {
    name: "damian",
    teachers: "arrays, javascript, mongodb",
  },
  {
    name: "jonathan",
    subjects: "arrays, javascript",
  },
]

//sort()
// const sortedStudentNames = teachers.sort();
// console.log(sortedStudentNames)

//filter()
//const filteredStudentNames = studentNames.filter(
	// function (student) {
	// 	return student == "bobby"
	// }
	// (student) => {
	// 	return student === "bobby"
	// }
	//(student) => student === "bobby"
//)
//console.log(filteredStudentNames)

//studentNames = studentNames.filter((student) => true)

//find()
// const bobby = studentNames.find((student) => student === "bobby")
// console.log(bobby)

//some()
// const somebobby = studentNames.some((student) => student === "bobby")
// console.log("Do we have at least a bobby?", somebobby)
// //every()
// const everybobby = studentNames.every((student) => student === "bobby")
// console.log("Everyone's a bobbys", everybobby)

//forEach()
// studentNames.forEach((student) => {
// 	console.log(student)
// })

//map()
// function giveMeTheName(object){
// 	return `${object.name} is a teacher` 
// }
// const justTheNames = teachers.map(giveMeTheName)
// // const justTheNames = teachers.map((teacher) => {
// // 	return teacher.name
// // })
// console.log(justTheNames)

//.reduce()
let numbers = [10,20,30]

let totals = numbers.reduce((accumulator, currentValue , index, array) => {
	return accumulator + currentValue
},0) //0 is total starting point

let total = 0
for(let i = 0; i < numbers.length; i++){
	total += numbers[i]
}
total = numbers.reduce((total,currentNumber) => total + currentNumber,0)

console.log(total)