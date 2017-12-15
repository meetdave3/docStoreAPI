var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(fileUpload());
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/',function(req,res) {
    fs.createReadStream(path.join(__dirname + "/index.html")).pipe(res);  
})

app.post('/upload', function(req, res) {
    
    if(req.files.sampleFile === undefined) {
        res.status(400).send('empty');
    } else {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;
        var extensionName = path.extname(sampleFile.name);
        console.log(extensionName);
        
        if(extensionName == '.png' || extensionName == '.jpg' || extensionName == '.jpeg' || extensionName == '.svg') { 
            // Use the mv() method to place the file somewhere on your server

            var fileName = sampleFile.name;
            var filePath = 'uploads/images/';

            fs.exists(filePath+fileName, function(exists){
                if(exists === true){
                    res.send('filenameexists');
                } else if( exists === false) {
                    sampleFile.mv('uploads/images/'+fileName, function(err) {
                        if (err)
                          return res.status(500).send(err);
                        url = 'http://localhost:3004/uploads/'+sampleFile.name;
                        res.send(url);
                    });
                } else { res.send('error'); }    
            }); 
        } else if (extensionName == '.pdf') {
            // Use the mv() method to place the file somewhere on your server

            fs.exists(filePath+fileName, function(exists){
                if(exists === true){
                    res.send('filenameexists');
                } else if( exists === false) {
                    sampleFile.mv('uploads/pdf/'+sampleFile.name, function(err) {
                        if (err)
                          return res.status(500).send(err);
                        url = 'http://localhost:3004/uploads/'+sampleFile.name;
                        res.send(url);
                    });
                } else { res.send('error'); }    
            }); 
        } else {
            res.send('notsupported');
        }
    }
});

app.get('/uploads/:name', function(req, res){
    var fileName = req.params.name;
    var extensionName = path.extname(fileName);

    if(extensionName == '.png' || extensionName == '.jpg' || extensionName == '.jpeg' || extensionName == '.svg') {
        fs.exists('uploads/images/'+fileName, function(exists){
            if(exists === true){
                res.sendFile(path.resolve('uploads/images/'+fileName)); 
            } else { res.status(404).send('notfound'); }
        })
    } else if(extensionName == '.pdf') {
        fs.exists('uploads/pdf/'+fileName, function(exists){
            if(exists === true){
                res.sendFile(path.resolve('uploads/images/'+fileName)); 
            } else { res.status(404).send('notfound'); }
        })
    } else {
        res.send('noext');
    }
})

app.listen(3004, function() {
    console.log('up and running');
})