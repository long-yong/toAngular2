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
        required: true,
        minlength:[4,"Title must have 4 or more letters"],
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
        minlength:[4,"Quote must have 4 or more letters"],
    },
    votes:{
        type:Number,
        default:0,
    },
}, {timestamps:false});

var AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:[2,"Name must have 2 or more letters"],
    },
    quotes:[QuoteSchema],
}, {timestamps:false});


var PetSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"This name existed, give a new name!"],
        required: true,
        minlength:[3,"Name must have 3 or more letters"],
    },
    type:{ 
        type:String,
        required: true,
        minlength:[3,"Type must have 3 or more letters"],
    },
    description:{
        type:String,
        required: true,
        minlength:[3,"Description must have 3 or more letters"],
    },
    skill1:{ 
        type:String,
    },
    skill2:{ 
        type:String,
    },
    skill3:{ 
        type:String,
    },
    likes:{
        type:Number,
        default:0,
    },
    
}, {timestamps:true});


module.exports = {
    Task:     mongoose.model('Task',     TaskSchema),
    Cake:     mongoose.model('Cake',     CakeSchema),
    Cmt:      mongoose.model('Cmt',      CmtSchema),
    Product:  mongoose.model('Product',  ProductSchema),
    Quote:    mongoose.model('Quote',    QuoteSchema),
    Author:   mongoose.model('Author',   AuthorSchema),
    Pet:      mongoose.model('Pet',      PetSchema),
}

