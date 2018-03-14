
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// Main Tabs
var index = require('./routes/index');
var explore = require('./routes/explore');
var surprise = require('./routes/surprise');
var profile = require('./routes/profile');
var mylist = require('./routes/mylist');
var calendar = require('./routes/calendar');
var login = require('./routes/login');


// User Profile Tabs
var user = require('./routes/user');

// Idea Details Tabs
var idea = require('./routes/idea');

// Add new ideas Tabs
var add = require('./routes/add');
var add_new_ideas = require('./routes/add_new_ideas');

// Surprise Me New List tabs
var surprise_list = require('./routes/surprise_list');

// Example route
// var user = require('./routes/user');

var app = express();

var hbs = handlebars.create({
	helpers: {
		ifvalue : function(conditional, options) {
		  if (options.hash.desired === conditional) {
		    return options.fn(this);
		  } else {
		    return options.inverse(this);
		  }
		}
	}
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);//handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/index', explore.defaultView);
// Example route
// app.get('/users', user.list);

// Main Tabs
app.get('/explore', explore.defaultView);
// app.get('/explore2', explore.altView);
app.get('/explore/:section', explore.switchView);
app.get('/surprise', surprise.view);
app.get('/profile', profile.view);
app.get('/calendar', calendar.view);
app.get('/mylist', mylist.view);

// to show explore1, not random page from ab testing
app.get('/explore1', explore.setView1);

// reading calendar data
app.get('/calendarData', calendar.getData);

// deal with mylist in-page nav
app.post('/mylist/:toSection', mylist.updateNavId);
app.get('/mylist/:toSection/:id', mylist.calendarNav);

// User Profile Tabs
app.get('/user/:name', user.view);

// Idea Details Tabs
app.get('/idea/:id', idea.view);

// Idea tried
app.get('/idea/tried/:fromPage/:fromSection/:triedId', mylist.tried);

// Add new ideas Tabs
app.get('/add_new_ideas', add_new_ideas.view);
app.get('/add', add.addIdeas);

// Surprise Me New List tabs
app.get('/surprise_list', surprise_list.view);
app.get('/surprise_list/:filter/:value', surprise_list.badge);

// Quickly add to my list tab
app.get('/add_to_my_list/:stayPage/:id', add.quicklyAdd);
app.post('/add_to_my_list', add.quicklyAdd2);

// delete ideas from my list tab
app.post('/delete_from_my_list', add.quicklyDelete);

// get num of ideas 
app.get('/getNums', explore.count);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
