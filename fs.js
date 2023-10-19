const fs=require("fs")
const qoutes="Hi this content is created in this file using Node js"
const [,,noOffiles]=process.argv
for (let i=1;i<=noOffiles;i++)
{fs.writeFile(`./backup/note-${i}.txt`,qoutes,()=>{
    console.log(`File note-${i}.txt created succesfully`)
}
)
}
//console.log(process.argv)
//const [,,n1,n2]=process.argv
//const double=(n)=>n*2
//console.log(double(n2))