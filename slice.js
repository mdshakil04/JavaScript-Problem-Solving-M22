const marks = [12, 23, 23, 45, 34, 25, 67, 12]
console.log("Original Array : ",marks);
const arrSlice = marks.slice(3, 6); 
console.log("Sliced Array : ", arrSlice);
console.log("Original Array : ",marks);
const arrSplice = marks.splice(3, 4);
console.log("Spliced Array",arrSplice);
console.log("Original Array : ",marks);