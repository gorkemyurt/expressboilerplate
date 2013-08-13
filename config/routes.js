/**
 * Controllers
 */

var posts = require('../app/controllers/posts')



/**
 * Expose routes
 */


module.exports = function (app) {

 // twitter auth
	
	app.get('/', posts.home);
	// app.get('/projects', posts.projects);
	// app.get('/posts', posts.postlist);
}