var url=require("url")
var urladdress="https://learning.edureka.co/classroom/recording/1905/16601/1668871?tab=ClassRecording"
var adr=url.parse(urladdress,true)
console.log(adr.host)
console.log(adr.protocol)
console.log(adr.pathname)
console.log(adr.query)
