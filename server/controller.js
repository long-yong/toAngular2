// controller.js

const { Task, Cake, Cmt, Product, Quote, Author, Pet} = require('./models')

function errArr(err) {
    arr = [];
    for(var key in err.errors) arr.push (err.errors[key].message);
    if(arr.length==0) arr.push('This name is existed, input a new name!');
    return arr;
}

function all_obj(req,res,model) {
    model.find({})
    .then(data=>{ res.json({allObj:data}); });
}

function one_obj(req,res,model) {
    model.findById(req.params.id)
    .then(data=>{ res.json({oneObj:data}); });
}

function new_obj(req,res,model) {
     model.create(req.body)
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); });
}

function del_obj(req,res,model) {
    model.findByIdAndDelete(req.params.id)
    .then(data=>{ model.find({}).then(data=>{
        res.json({allObj:data}); });
    });
}

function up_obj(req,res,model) {
    model.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); })
}

module.exports = {

    // ejs

    getall:(req,res)=>{
        Task.find({})
        .then(data=>{ res.render('index', {allTasks:data}); })
        .catch(err=>{ res.render('index', {allTasks:['Database find error!']}); })
    },

    getone:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    new:(req,res)=>{
        Task.create({title:req.params.p1})
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    update:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.params.p1,description:req.params.p2,completed:req.params.p3}},{new:true,runValidators:true})
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    delete:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ res.render('index', {allTasks:[data]}); })
        .catch(err=>{ res.render('index', {allTasks:err}); })
    },

    // api

    clear:(req,res)=>{
        Task.deleteMany({},(err)=>{res.json(null)});
    },    

    completed:(req,res)=>{
        Task.find({completed:true},{_id:false, title:true, completed:true})
        .then(data=>{ res.json(data); })
        .catch(err=>{ res.json(err);  })
    },

    // task (cpp,epp)  angular 

    allTask:(req,res)=>{
        Task.find({})
        .then(data=>{ res.json({allTask:data}); })
        .catch(err=>{ res.json({allTask:null}); })
    },
    oneTask:(req,res)=>{
        Task.findById(req.params.id)
        .then(data=>{ res.json({oneTask:data}); })
        .catch(err=>{ res.json({oneTask:null}); })
    },
    newTask:(req,res)=>{
        Task.create({title:req.body.title,description:req.body.description})
        .then(data=>{ res.json({newTask:data}); })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },


    // task (fpp & gpp) angular 

    addTask:(req,res)=>{
        Task.create({title:req.body.title,description:req.body.description})
        .then(data=>{ Task.find({}).then(data=>{ res.json({allTask:data}); }) })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },
    editTask:(req,res)=>{
        Task.findByIdAndUpdate(req.params.id,{$set: {title:req.body.title,description:req.body.description}},{new:true,runValidators:true})
        .then(data=>{ Task.find({}).then(data=>{ res.json({allTask:data}); }) })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },
    delTask:(req,res)=>{
        Task.findByIdAndDelete(req.params.id)
        .then(data=>{ Task.find({}).then(data=>{ res.json({allTask:data}); }) })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },


    // cake (hpp & jpp) angular 

    allCake:(req,res)=>{
        Cake.find({})
        .then(data=>{ res.json({allCake:data}); })
        .catch(err=>{ res.json({allCake:null}); })
    },
    addCake:(req,res)=>{
        Cake.create({ baker:req.body.baker,url:req.body.url })
        .then(data=>{ 
            let cake = data;
            Cake.find({}).then(data=>{ 
                res.json({allCake:data,oneCake:cake}); 
            }) 
        })
        .catch(err=>{
            res.json({errArr:errArr(err)}); 
        })
    },
    delCake:(req,res)=>{
        Cake.findByIdAndDelete(req.params.id)
        .then(data=>{
            Cake.find({}).then(data=>{
                res.json({allCake:data});
            })
        })
    },
    addCmt:(req,res)=>{
        Cmt.create(req.body,(err,data)=>{
            Cake.findByIdAndUpdate(req.params.id,{$push:{comments:data}},(err)=>{
                Cake.find({}).then(data=>{
                    let cakes = data;
                    Cake.findById(req.params.id).then(data=>{
                        res.json({allCake:cakes,oneCake:data});
                    })
                })
            });
        });
    },


    // product  angular 

    allPro:(req,res)=>{ all_obj(req,res,Product); },
    onePro:(req,res)=>{ one_obj(req,res,Product); }, 
    newPro:(req,res)=>{ new_obj(req,res,Product); },
    delPro:(req,res)=>{ del_obj(req,res,Product); },
    upPro:(req,res) =>{ up_obj (req,res,Product); },
    
    
    //  Author

    allAuthor:(req,res)=>{ all_obj(req,res,Author); },
    oneAuthor:(req,res)=>{ one_obj(req,res,Author); },
    newAuthor:(req,res)=>{ new_obj(req,res,Author); },
    delAuthor:(req,res)=>{ del_obj(req,res,Author); },
    upAuthor: (req,res)=>{ up_obj (req,res,Author); },
    addQuote:(req,res)=>{
        Quote.create(req.body).then(data=>{
            Author.findByIdAndUpdate(req.params.id,{$push:{quotes:data}},{new:true})
            .then(data=>{
                let obj =data; Author.find({}).then(data=>{
                    res.json({allObj:data,oneObj:obj});
                })
            })   
        })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },
    delQuote:function(req,res){
        console.log(req.params.id,req.body);
        Author.findOneAndUpdate({"quotes._id":req.body._id}, {
            $pull:{quotes:{_id:req.body._id}}
        }, {new:true, runValidators:true})
            .then(data=>console.log('hi ', data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    addRank:(req,res)=>{
    },
    delRank:(req,res)=>{
    },


    // pet
    allPet:(req,res)=>{ all_obj(req,res,Pet); },
    onePet:(req,res)=>{ one_obj(req,res,Pet); },
    newPet:(req,res)=>{ new_obj(req,res,Pet); },
    delPet:(req,res)=>{ del_obj(req,res,Pet); },
    upPet: (req,res)=>{ up_obj (req,res,Pet); },

    allPetSorted:(req,res)=>{
        Pet.find({}).sort({'type':1})
        .then(data=>{ 
            res.json({allObj:data}); 
        })
    },

};


