const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./db');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.get('/resourcePage/:resourcetype', (req, res) => {
    const resourceType = req.params.resourcetype;
    connection.query('SELECT * FROM '+resourceType,(error,results)=>{
        if(error){
            res.status(500).json({error:'Error fetching resources'});
        }
        else{
            res.json(results);
        }
    })
});


app.post('/resourcePage/:resourcetype', (req, res) => {
    const resourceType = req.params.resourcetype;
        const {title,link} = req.body;
        connection.query('INSERT INTO '+resourceType+' (title,link) VALUES(?,?)',[title,link],(error,results)=>{
            if(error){
                res.status(500).json({error:'Error creating resource'});
            }
            else{
                res.json({id:results.insertId, ...req.body});
            }
        });
});


app.get('/resourcePage/:resourcetype/:id', (req, res) => {
    const resourceType = req.params.resourcetype;
    const resourceId = req.params.id;
    connection.query('SELECT * FROM '+resourceType+' WHERE id=?',[resourceId],(error,results)=>{
        if(error){
            res.status(500).json({error:'Error fetching resource'});
        }
        else{
            res.json(results[0]);
        }
    })
});


app.put('/resourcePage/:resourcetype/:id', (req, res) => {
    const resourceType = req.params.resourcetype;
    const resourceId = req.params.id;
    const{title,link} = req.body;
    connection.query('UPDATE '+resourceType+' SET title = ?, link = ? WHERE id = ?',[title,link,resourceId],(error,results)=>{
        if(error){
            res.status(500).json({error:'Error updating resource'});
        }
        else{
            res.json({id:results.insertId,title,link});
        }
    })
});


app.delete('/resourcePage/:resourcetype/:id', (req, res) => {
    const resourceType = req.params.resourcetype;
    const resourceId = req.params.id;
    connection.query('DELETE FROM '+resourceType+' WHERE id=?',[resourceId],(error)=>{
        if(error){
            res.status(500).json({error:'Error deleting resource'});
        }
        else{
            res.json({ message: 'Resource deleted successfully' });
        }
    })
});



app.use(express.static(path.join(__dirname,"./build")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./build/index.html"))
});




//listening on port 3000

app.listen(port, () => {
    console.log("Server running on port " + port);
});