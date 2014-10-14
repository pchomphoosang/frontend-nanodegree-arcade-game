
var http = require('http');
express=require('express');
app = express(),
server=http.createServer(app);

app.configure(function(){           // this configuration is set in every environment

    app.use(express.errorHandler());     // if there is no setting, it will be call development by default
    app.use(express.logger());
    app.use(express.errorHandler({
       dumpExceptions : true,
       showStack      : true
    })  );
    app.use(express.favicon());
    app.use(express.urlencoded())
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);   //  i don't know why i use it 
});


server.listen(process.env.PORT);
console.log(
    'Express server listining on port %d in %s mode', 
        server.address().port, app.settings.env
);


