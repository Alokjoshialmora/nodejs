console.log(process.argv)
const [,,n1,op,n2]=process.argv
if (op=="+"){
    sum=parseInt(n1)+parseInt(n2)
    console.log("The result is =>",sum)
}