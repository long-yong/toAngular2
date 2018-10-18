// controller.js

const { Task, Cake, Cmt, Product} = require('./models')

function errArr(err) {
    arr = [];
    for(var key in err.errors) arr.push (err.errors[key].message);
    return arr;
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

    allPro:(req,res)=>{
        Product.find({})
        .then(data=>{ res.json({allPro:data}); })
    },

    onePro:(req,res)=>{
        Product.findById(req.params.id)
        .then(data=>{ res.json({onePro:data}); })
    },

    newPro:(req,res)=>{
        Product.create({title:req.body.title,price:req.body.price,url:req.body.url})
        .then(data=>{ 
            res.json({onePro:data});
        })
        .catch(err=>{
            res.json({errArr:errArr(err)}); 
        })
    },

    upPro:(req,res)=>{
        Product.findByIdAndUpdate(req.params.id,{$set: {title:req.body.title,price:req.body.price,url:req.body.url}},{new:true,runValidators:true})
        .then(data=>{ res.json({onePro:data}); })
        .catch(err=>{ res.json({errArr:errArr(err)}); })
    },
    
    delPro:(req,res)=>{
        Product.findByIdAndDelete(req.params.id)
        .then(data=>{ Product.find({}).then(data=>{
            res.json({allPro:data}); });
        })
    },


};
