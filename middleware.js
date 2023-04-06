module.exports = reqFilter = (req,res,next) => {
    console.log("reqFilter");
    if(!req.query.age){
        res.send("Enter your age")   
    }else if(req.query.age<18){
        res.send("You are under age")   
    }else{
        next();
    }
}

