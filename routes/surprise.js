
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('surprise',{
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
        'class': 'fa fa-lightbulb-o'
      },
      { 'name': 'Profile',
        'id': 'profile',
        'class': 'fa fa-user'
      }
    ]  
  });
};