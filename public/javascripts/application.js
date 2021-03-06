
require.config({
  paths: {
    'jquery': 'lib/jquery',
    'backbone': 'lib/backbone',
    'text': 'lib/text',
    'underscore': 'lib/underscore',
    'bootstrap' : 'lib/bootstrap',
    'marionette' : 'lib/backbone.marionette',
    'localStorage' : 'lib/backbone.localStorage',
    'less' : 'lib/less',
    'User' : 'models/User',
    "Users" : 'collections/Users',
    "FormView" : 'views/FormView',
    "UsersView" : 'views/UsersView',
    "UserView" : 'views/UserView',
    "NoUserView" : 'views/NoUserView',
    "MyApp" : 'app'

  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    },
    'bootstrap' : {
        deps: ["jquery"]
    },
    'jquery-ui' : {
        deps : ["jquery"]
    },
    'marionette' : {
      deps : ["backbone", "underscore", "jquery"],
      exports: 'Marionette'
    }
  }
});

require(
  ["jquery",
    "underscore",
    "backbone",
    "less",
    "marionette",
    "MyApp"

  ],
  function($, _, Backbone, jqueryui, less, Marionette, MyApp) {

  });