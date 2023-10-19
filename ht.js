var http=require("http")
http.createServer(function(req,res){
res.write("Hello Everyone How are you")
res.end()
})
.listen(5000)