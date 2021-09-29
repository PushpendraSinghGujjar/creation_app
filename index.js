const http = require("http");

var MarkovChain = require('markovchain')
,fs = require('fs')
,quotes = new MarkovChain(fs.readFileSync('./data.txt','utf8'));
var server = http.createServer(function(req,res){
    
    var x=quotes.start('घर').end(100).process();
    var y=quotes.start('सब').end(100).process();
    var z=quotes.start('इस').end(100).process();
    var a=quotes.start('मिले').end(100).process();
    var b=quotes.start('जब').end(100).process();
    var c=quotes.start('नशा').end(100).process();
    var d=quotes.start('पीने').end(100).process();
    var e=quotes.start('नहीं').end(100).process();
    var f=quotes.start('प्रेम').end(100).process();
    var g=quotes.start('सदा').end(100).process();
    
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   
    res.write("कर "+x+"</br>"+y+"</br>"+z+"</br>"+a+"</br>"+b+"</br>"+c+"</br>"+d+"</br>"+e+"</br>"+f+"</br>"+g);
    
            res.end();
        }).listen(4040);

   
    

    //module.exports = generateText; 