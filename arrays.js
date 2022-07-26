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

const somebobby = studentNames.some((student) => student === "bobby")
console.log("Do we have at least a bobby?", somebobby)

const everybobby = studentNames.every((student) => student === "bobby")
console.log("Everyone's a bobbys", everybobby)