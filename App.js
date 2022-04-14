


let http=require('http')
let server=http.createServer(function(req,res){
    let responseHeaders={
        'Content-Type':'text/plain'
    }
    res.writehead=(200,responseHeaders)
    res.write('hello world')
    res.end()

})
    let port= 3000
    server.listen(port,function(){
        console.log(`server listeening on ${port}`)
    })