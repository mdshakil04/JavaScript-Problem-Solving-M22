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
console.log(uniqueStudents)