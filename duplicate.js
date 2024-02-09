const students = ["Mahfuz", "Tanvir", "Shifat", "Alvi", "Mahfuz", "Sumaiya", "Tanvir", "Shifat", "Alvi"]

function removeDuplicate(name){
    const uniqueName = [];
    for(let i = 0; i < students.length; i++){
        const student = students[i];
        // console.log(student)
        if(uniqueName.includes(student) === false){
            uniqueName.push(student)
        }
    }
    return uniqueName;
}
const uniqueStudents = removeDuplicate(students);
// console.log(uniqueStudents)
// ---------------------------------------------------------------------------------
const marks = [23, 24, 25, 26, 27, 27, 28, 29, 30, 24, 26, 29, 27, 28, 30]
function duplicateRemover(number){
    const uniqueNumber = [];
    for(let i = 0; i < marks.length; i++){
        const newNumber = marks[i];
        if(uniqueNumber.includes(newNumber) === false){
            uniqueNumber.push(newNumber);
        }
    }
    return uniqueNumber;
}
const uniqueNumbers = duplicateRemover(marks)
console.log(uniqueNumbers)