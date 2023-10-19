const path=require("path")
const p="C:/ALOK/BackUp/note-1.txt"
console.log(path.dirname(p))
console.log(path.basename(p))
console.log(path.extname(p))
console.log(path.isAbsolute(p))
console.log(path.parse(p).name)

console.log("hello")