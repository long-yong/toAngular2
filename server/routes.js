// routes.js

var express = require("express");
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {

    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(express.static(__dirname + "/static"));
    app.use(bp.urlencoded({extended:true}));
    app.use(bp.json());

    
    // ejs
    app.get ('/getall',                  controller.getall);
    app.get ('/getone/:id',              controller.getone);
    app.get ('/new/:p1',                 controller.new);    
    app.get ('/update/:id/:p1/:p2/:p3',  controller.update);
    app.get('/delete/:id',               controller.delete);

    
    // api
    app.get('/clear',                    controller.clear);
    app.get ('/completed',               controller.completed);


    // angular cpp
    app.get('/alltask',                  controller.allTask);
    app.get('/onetask/:id',              controller.oneTask);


    // angular epp
    app.post('/newtask',                 controller.newTask);


    // angular task (fpp & gpp)
    app.post('/addtask',                 controller.addTask);
    app.post('/edittask/:id',            controller.editTask);
    app.get('/deltask/:id',              controller.delTask);


    // angular cake (hpp & jpp)
    app.get('/allcake',                  controller.allCake);
    app.post('/addcake',                 controller.addCake);
    app.get('/delcake/:id',              controller.delCake);
    app.post('/addcmt/:id',              controller.addCmt);

        
    // product
    app.get('/allpro',                  controller.allPro);
    app.get('/onepro/:id',              controller.onePro);
    app.post('/newpro',                 controller.newPro);
    app.post('/uppro/:id',              controller.upPro);
    app.get('/delpro/:id',              controller.delPro);


    // author
    app.get('/allauthor',               controller.allAuthor);
    app.get('/oneauthor/:id',           controller.oneAuthor);
    app.post('/newauthor',              controller.newAuthor);
    app.post('/upauthor/:id',           controller.upAuthor);
    app.get ('/delauthor/:id',          controller.delAuthor);
    app.post('/addquote/:id',           controller.addQuote);
    app.post ('/delquote/:id',           controller.delQuote);

    app.get('/allpet',                  controller.allPet);
    app.get('/onepet/:id',              controller.onePet);
    app.post('/newpet',                 controller.newPet);
    app.post('/uppet/:id',              controller.upPet);
    app.get('/delpet/:id',              controller.delPet);
    app.get('/allpetsorted',            controller.allPetSorted);

    return app;
}

