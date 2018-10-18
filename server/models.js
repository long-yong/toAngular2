// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var TaskSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required: [true, "Title is required."],
        minlength:2
    },
    description:{
        type:String,
        required:true,
        minlength:2
    },
    completed:{
        type:Boolean,
        default: false,
    },
}, {timestamps:false});


const CmtSchema = new mongoose.Schema({
    star: {
        type: String,
    },
    content:{
        type: String, 
    },
}, {timestamps: true})

var CakeSchema = new mongoose.Schema({
    baker:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    comments: [CmtSchema]
}, {timestamps:true});


var ProductSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required: [true, "Title is required."],
        minlength:4,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    url:{
        type:String,
    },
}, {timestamps:false});

var QuoteSchema = new mongoose.Schema({
    quote:{ 
        type:String,
        required: true,
    },
    rank:{
        type:Number,
        default:0,
    },
}, {timestamps:false});

var AuthorSchema = new mongoose.Schema({
    author:{ 
        type:String,
        required: true,
    },
    quotes:[QuoteSchema],
}, {timestamps:false});


module.exports = {
    Task:     mongoose.model('Task',     TaskSchema),
    Cake:     mongoose.model('Cake',     CakeSchema),
    Cmt:      mongoose.model('Cmt',      CmtSchema),
    Product:  mongoose.model('Product',  ProductSchema),
    Quote:    mongoose.model('Quote',    QuoteSchema),
    Author:   mongoose.model('Author',   AuthorSchema),
}

