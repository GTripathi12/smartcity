const { Console } = require('console');
const userloginmodel = require('./user');
const path = require('path');
exports.loginReq = async(req , res , next)=>{ 
    const email = req.body.email;
    const pass = req.body.password;
    userloginmodel.findOne({email:email}).then(user =>{
        console.log(pass);
        console.log(email);
        if(!user){
            res.statusCode = 401;
            console.log("not found");
            return res.json('no account exist');
        }
        else{
            if(pass==user.pass){
                console.log("welocme");
                res.redirect("http://localhost:3030/views/")
                // res.sendFile(path.join(__dirname+"/views/index.html"));
            }
            else{
                console.log("error");
                return res.status(301).json("incorrect pass")
            }
        }
    })
}
exports.signup = async(req,res,next)=>{
    const email = req.body.email;
    const pass = req.body.password;
    userloginmodel.findOne({email:email}).then(user=>{
        if(user){
            res.json("already exist pls login");
        }
        else{
            const result = new userloginmodel({
                email : email,
                pass:pass
            });
            result.save();
            console.log("Asda");
            res.redirect("http://localhost:3030/views/");
        }
    })
}