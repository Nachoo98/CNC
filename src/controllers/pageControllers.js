const pageControllers={
    home:(req,res)=>{
        res.render('home');
    },
    products:(req,res)=>{
        res.render('products');
    },
    contact:(req,res)=>{
        res.render('contact');
    },
    services:(req,res)=>{
        res.render('services');
    }
}

module.exports=pageControllers;