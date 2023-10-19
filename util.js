var util=require("util")
var txt="Congratulation to %s on his %dth Birthday"
var result=util.format(txt,"Abhishek",35)
const inspectOut={
    colors:true
}
console.log(util.inspect(result,inspectOut))
