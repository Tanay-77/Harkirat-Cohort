const express = require('express')
const fs = require('fs')
const app = express()

// get the file folder 

app.get('/files',(req,res)=>{
    fs.readdir('./files',(err,files)=>{
        if(err) return res.status(500).send("error")
            res.json(files)
    })
})

// get the exact file 

app.get('/file/:name',(req,res)=>{
    const filename = req.params.name    

    fs.readFile('./files/' + fileName, 'utf8', (err, data)=>{
        if (err) return res.status(404).send("file not found")
            res.send(data)
    } )
})

// 3. Handle other routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(3000);