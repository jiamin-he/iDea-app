
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('explore',{
  	"bottom-bar": [
      { 'name': 'Index',
        'id': 'index',
        'class': 'fa fa-home'
      },
      { 'name': 'Explore',
        'id': 'explore',
        'class': 'fa fa-globe'
      },
      { 'name': 'Surprise',
        'id': 'surprise',
        'class': 'fa fa-lightbulb'
      },
      { 'name': 'Profile',
        'id': 'profile',
        'class': 'fa fa-user'
      }
    ]  
  });
};