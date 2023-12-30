// crate  a folder weathr cites and then create a file called xpressweb and go inside expressweb and then create src file and then go to src file and then create app.js  then come out int expresssweb and then npm init then in expressweb install npm i express then install nodemon 
// then create a folder in express js public and then go toh public and create a csss and js  and then go in cs and then create a  style.css  and then go to js and create a  main.js and then go toh public and then create index.html and about.html
const express=require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();
// if we host localmso its ok but for hosting it needits own port number
const port= process.env.PORT || 8000;
// set a path for static web
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
// const partials_path=path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views',template_path);
// hbs.registerPartials(partials_path);
app.use(express.static(static_path));
// we copy the template command app.set from browser and paste and we have to inform our express taht u run about.hbs first  then we convert send in to render and then in " we can sets a hbs path"

app.get("/", (req,res)=>{
    res.render('index')
    

})
app.get("/about", (req,res)=>{
    res.render('about')
})
app.get("/weather", (req,res)=>{
    res.render('weather')
})
app.get("*", (req,res)=>{
    res.render('404error',{
        errorMsg:'oops! Page Not Found'
    })

})
app.listen(port , ()=>{
    console.log(`listening to the port at ${port}`)
})