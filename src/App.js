const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const resources = [];
const blogs = [];
const tutorials = [];
const codes = [];




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//resource page resources get and post

app.get('/resourcePage/resources', (req, res) => {
    if (!resources) {
        return res.status(404).send('The file you were looking for was not found');
    }
    res.send(resources);
});

app.post('/resourcePage/resources', (req, res) => {
    if (!req.body.title || !req.body.link) {
        return res.status(400).send('Bad Request');
    }
    const resource = {
        id: resources.length + 1,
        title: req.body.title,
        link: req.body.link,
    }
    resources.push(resource);
    res.send(resource);
});

//resource page resources get, put and delete for a single resource

app.get('/resourcePage/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (!resource) { return res.status(404).send('The file you were looking for was not found'); }
    res.send(resource);
});

app.put('/resourcePage/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (!resource) { return res.status(404).send('The file you were looking for was not found'); }

    resource.title = req.body.title;
    resource.link = req.body.link;
    res.send(resource);
});

app.delete('/resourcePage/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (!resource) { return res.status(404).send('The file you were looking for was not found'); }

    const index = resources.indexOf(resource);
    resources.splice(index, 1);
    res.send(resource);
});




//blogs page, blogs get and post

app.get('/resourcePage/blogs', (req, res) => {
    if (!blogs) {
        return res.status(404).send('The file you were looking for was not found');
    }
    res.send(blogs);
});

app.post('/resourcePage/blogs', (req, res) => {
    if (!req.body.title || !req.body.link) {
        return res.status(400).send('Bad Request');
    }
    const blog = {
        id: blogs.length + 1,
        title: req.body.title,
        link: req.body.link,
    }
    blogs.push(blog);
    res.send(blog);
});

//blogs page blogs get, put and delete for a single resource

app.get('/resourcePage/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) { return res.status(404).send('The file you were looking for was not found'); }
    res.send(blog);
});

app.put('/resourcePage/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) { return res.status(404).send('The file you were looking for was not found'); }

    blog.title = req.body.title;
    blog.link = req.body.link;
    res.send(blog);
});

app.delete('/resourcePage/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) { return res.status(404).send('The file you were looking for was not found'); }

    const index = blogs.indexOf(blog);
    blogs.splice(index, 1);
    res.send(blog);
});




//useful tutorials pages get and post

app.get('/resourcePage/tutorials', (req, res) => {
    if (!tutorials) {
        return res.status(404).send('The file you were looking for was not found');
    }
    res.send(tutorials);
});

app.post('/resourcePage/tutorials', (req, res) => {
    if (!req.body.title || !req.body.link) {
        return res.status(400).send('Bad Request');
    }
    const tutorial = {
        id: tutorials.length + 1,
        title: req.body.title,
        link: req.body.link,
    }
    tutorials.push(tutorial);
    res.send(tutorials);
});

//useful tutorials page  get, put and delete for a single resource

app.get('/resourcePage/tutorials/:id', (req, res) => {
    const tutorial = tutorials.find(t => t.id === parseInt(req.params.id));
    if (!tutorial) { return res.status(404).send('The file you were looking for was not found'); }
    res.send(tutorial);
});

app.put('/resourcePage/tutorials/:id', (req, res) => {
    const tutorial = tutorials.find(t => t.id === parseInt(req.params.id));
    if (!tutorial) { return res.status(404).send('The file you were looking for was not found'); }

    tutorial.title = req.body.title;
    tutorial.link = req.body.link;
    res.send(tutorial);
});

app.delete('/resourcePage/tutorials/:id', (req, res) => {
    const tutorial = tutorials.find(t => t.id === parseInt(req.params.id));
    if (!tutorial) { return res.status(404).send('The file you were looking for was not found'); }

    const index = tutorials.indexOf(tutorial);
    tutorials.splice(index, 1);
    res.send(tutorial);
});




//Source codes, codes get and post

app.get('/resourcePage/sourcecodes', (req, res) => {
    if (!blogs) {
        return res.status(404).send('The file you were looking for was not found');
    }
    res.send(blogs);
});

app.post('/resourcePage/sourcecodes', (req, res) => {
    if (!req.body.title || !req.body.link) {
        return res.status(400).send('Bad Request');
    }
    const code = {
        id: codes.length + 1,
        title: req.body.title,
        link: req.body.link,
    }
    blogs.push(code);
    res.send(code);
});

//sorce codes , codes get, put and delete for a single resource

app.get('/resourcePage/sourcecodes/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) { return res.status(404).send('The file you were looking for was not found'); }
    res.send(blog);
});

app.put('/resourcePage/sourcecodes/:id', (req, res) => {
    const code = codes.find(b => b.id === parseInt(req.params.id));
    if (!code) { return res.status(404).send('The file you were looking for was not found'); }

    code.title = req.body.title;
    code.link = req.body.link;
    res.send(code);
});

app.delete('/resourcePage/sourcecodes/:id', (req, res) => {
    const code = code.find(b => b.id === parseInt(req.params.id));
    if (!code) { return res.status(404).send('The file you were looking for was not found'); }

    const index = codes.indexOf(code);
    codes.splice(index, 1);
    res.send(code);
});


app.use(express.static(path.join(__dirname,"../build")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../build/index.html"))
});




//listening on port 3000

app.listen(port, () => {
    console.log("Server running on port " + port);
});