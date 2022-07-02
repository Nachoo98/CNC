//requires
const pageRoutes=require('./src/routes/pageRoutes')

const session=require('express-session')
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const express=require('express');
const path=require('path');
const app=express();
app.use(cors());




//middlewares
const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret:"Esto es un secreto",
    resave:false,
    saveUninitialized:false,
}))

app.use(cookies());

app.use('/', pageRoutes);

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});

