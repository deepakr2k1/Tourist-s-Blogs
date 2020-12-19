// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require('../Models/blog');

const blog_index = ((req,res) => {
    Blog.find().sort({_id: -1})
    .then(result => {
        res.render('blogs/index',{title: 'Blogs', blogs: result});
    })
    .catch(err => {
        console.log(err);
    })
})

const blog_details = ((req,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blogs/details', {blog: result, title: 'Blog Details' })
    })
    .catch((err) => {
        res.render('404', {title: 'Not Found'})
        console.log(err);
    })
})

const blog_create_get = ((req,res) => {
    res.render('blogs/create', {title: 'Create New Blog'});
})

const blog_create_post = ((req,res) => {
    const blog = new Blog(req.body);
    blog.date = new Date();
    blog.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    })
})

const blog_delete = ((req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'});
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = {
    'blog_index': blog_index,
    'blog_details': blog_details,
    'blog_create_get': blog_create_get,
    'blog_create_post': blog_create_post,
    'blog_delete': blog_delete,
};