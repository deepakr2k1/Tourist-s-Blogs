const mongoose = require('mongoose');
const schema = mongoose.Schema;
// Schema define structure

const blogSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, {timestamp: true})

const Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;