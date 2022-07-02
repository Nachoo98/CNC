const pageControllers=require('../controllers/pageControllers');


const express=require('express');
const router=express.Router();

router.get('/', pageControllers.home)


module.exports=router;