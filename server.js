var express = require('express');

var path = require("path");
var app = express();

var PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================

app.use(express.json());
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


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '/views/about.html')));
app.get('/ourdogs', (req, res) => res.sendFile(path.join(__dirname, '/views/ourdogs.html')));
app.get('/litters', (req, res) => res.sendFile(path.join(__dirname, '/views/litters.html')));
app.get('/bredby', (req, res) => res.sendFile(path.join(__dirname, '/views/bred_by.html'))); 
app.get('/bredby/deacon', (req, res) => res.sendFile(path.join(__dirname, '/views/deacon.html')));
app.get('/bredby/nike', (req, res) => res.sendFile(path.join(__dirname, '/views/nike.html')));
app.get('/bredby/parker', (req, res) => res.sendFile(path.join(__dirname, '/views/parker.html')));
app.get('/bredby/taylor', (req, res) => res.sendFile(path.join(__dirname, '/views/taylor.html')));
app.get('/bredby/bacio', (req, res) => res.sendFile(path.join(__dirname, '/views/bacio.html')));
app.get('/bredby/wyatt', (req, res) => res.sendFile(path.join(__dirname, '/views/wyatt.html')));
app.get('/bredby/stout', (req, res) => res.sendFile(path.join(__dirname, '/views/stout.html')));
app.get('/bredby/bogart', (req, res) => res.sendFile(path.join(__dirname, '/views/bogart.html')));
app.get('/bredby/layla', (req, res) => res.sendFile(path.join(__dirname, '/views/layla.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, '/views/gallery.html')));
app.get('/info', (req, res) => res.sendFile(path.join(__dirname, '/views/info.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, '/views/contact.html')));
app.get('/ourdogs/allie', (req, res) => res.sendFile(path.join(__dirname, '/views/allie.html')));
app.get('/ourdogs/lulu', (req, res) => res.sendFile(path.join(__dirname, '/views/lulu.html')));
app.get('/ourdogs/dela', (req, res) => res.sendFile(path.join(__dirname, '/views/dela.html')));
app.get('/ourdogs/crush', (req, res) => res.sendFile(path.join(__dirname, '/views/crush.html')));
app.get('/litters', (req, res) => res.sendFile(path.join(__dirname, '/views/litters.html')));
app.get('/litters/2020', (req, res) => res.sendFile(path.join(__dirname, '/views/lulu_litter.html')));
app.get('/litters/development', (req, res) => res.sendFile(path.join(__dirname, '/views/litter_raising.html')));
app.get('/ourdogs/shimmer', (req, res) => res.sendFile(path.join(__dirname, '/views/shimmer.html')));
app.get('/litters/past', (req, res) => res.sendFile(path.join(__dirname, '/views/past_litters.html')));
app.get('/stout', (req, res) => res.sendFile(path.join(__dirname, '/views/stout.html')));
app.get('*',function (req, res) {
    res.redirect('/');
});



app.listen(PORT, console.log("server start on " + PORT));