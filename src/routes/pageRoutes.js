const pageControllers=require('../controllers/pageControllers');


const express=require('express');
const router=express.Router();

router.get('/', pageControllers.home)
router.get('/products', pageControllers.products)
router.get('/contact', pageControllers.contact)
router.get('/services', pageControllers.services)


module.exports=router;