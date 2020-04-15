var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/files', express.static(__dirname + '/public/files'));



// app.use(express.static(__dirname + '/public'));

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
// app.use('/', require(__dirname + '/routes/html-routes'));

// app.use('/public', express.static('./public'));


// require("./routes/api-routes.js")(app);
//router
// var express = require('express');


app.get('/', (req, res) => res.render('home.ejs'));
app.get('/about', (req, res) => res.render('about.ejs'));
app.get('/ourdogs', (req, res) => res.render('ourdogs.ejs'));
app.get('/litters', (req, res) => res.render('litters.ejs'));
app.get('/bredby', (req, res) => res.render('bred_by.ejs')); 
app.get('/bredby/deacon', (req, res) => res.render('deacon.ejs'));
app.get('/bredby/nike', (req, res) => res.render('nike.ejs'));
app.get('/bredby/parker', (req, res) => res.render('parker.ejs'));
app.get('/bredby/taylor', (req, res) => res.render('taylor.ejs'));
app.get('/bredby/bacio', (req, res) => res.render('bacio.ejs'));
app.get('/bredby/wyatt', (req, res) => res.render('wyatt.ejs'));
app.get('/bredby/stout', (req, res) => res.render('stout.ejs'));
app.get('/bredby/bogart', (req, res) => res.render('bogart.ejs'));
app.get('/bredby/layla', (req, res) => res.render('layla.ejs'));
app.get('/gallery', (req, res) => res.render('gallery.ejs'));
app.get('/info', (req, res) => res.render('info.ejs'));
app.get('/contact', (req, res) => res.render('contact.ejs'));
app.get('/ourdogs/allie', (req, res) => res.render('allie.ejs'));
app.get('/ourdogs/lulu', (req, res) => res.render('lulu.ejs'));
app.get('/ourdogs/dela', (req, res) => res.render('dela.ejs'));
app.get('/ourdogs/crush', (req, res) => res.render('crush.ejs'));
app.get('/litters', (req, res) => res.render('litters.ejs'));
app.get('/litters/2020', (req, res) => res.render('lulu_litter.ejs'));
app.get('/litters/development', (req, res) => res.render('litter_raising.ejs'));
app.get('/ourdogs/shimmer', (req, res) => res.render('shimmer.ejs'));
app.get('/litters/past', (req, res) => res.render('past_litters.ejs'));
app.get('/stout', (req, res) => res.render('stout.ejs'));
app.get('*',function (req, res) {
    res.redirect('/');
});



app.listen(PORT, console.log("server start on " + PORT));