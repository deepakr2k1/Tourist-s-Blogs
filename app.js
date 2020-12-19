const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://user1:pass123@cluster0.bkgzn.mongodb.net/Node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(80))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/blogs',blogRoutes);
app.get('/',(req,res) => {
    res.redirect('/blogs');
})
app.get('/about',(req,res) => {
    res.render('about', {title: 'About'});
})
app.use((req,res) => {
    res.status(404).render('404', {title: 'Not Found'});
})