const { json } = require("body-parser")
const fs=require("fs")
/* const qoutes="Hi this content is created in this file using Node js"
const [,,noOffiles]=process.argv
for (let i=1;i<=noOffiles;i++)
{fs.writeFile(`./backup/note-${i}.txt`,qoutes,()=>{
    console.log(`File note-${i}.txt created succesfully`)
}
)
} */
//console.log(process.argv)
//const [,,n1,n2]=process.argv
//const double=(n)=>n*2
//console.log(double(n2))
/*fs.readFile("./calculator/cool.txt","utf-8",(err,data)=>{
    if (err){
            console.log("Error is => ",err.message)
            }
    else{
            console.log("The content of the file is => ",data)
        }
})*/

/*fs.readdir("./",(err,files)=>{
    console.log("The files inside current directory are = >",files)
})*/
/*quote="\nMake everday little less ordinary."
fs.appendFile("./calculator/cool.txt",quote,(err)=>{
    console.log("Write complete")
})*/

/*fs.unlink("./toremove.txt",(err)=>{
    if (err) {
        console.log("Error Msg=>",err.message)
    }
    else{
        console.log("File deleted sucessfully")
    }
})*/

/*fs.open("./calculator/cool.txt",(err,file)=>{
    console.log(file)
})

fs.stat("./calculator/cool.txt",(err,stat)=>{
    console.log(stat.isFile())
    console.log(stat.isDirectory())
})*/

const movie={
    name:"The Avenger",
    type:"Hollywood"
}

const moviedata=JSON.stringify(movie)
console.log(moviedata)
const movi=JSON.parse(moviedata)
console.log(movi)
fs.writeFile("movie.json",moviedata,(err)=>{
    console.log("Write file sucessfully")
})