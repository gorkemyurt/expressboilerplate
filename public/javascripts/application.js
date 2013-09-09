
require.config({
  paths: {
    'jquery': 'lib/jquery',
    'backbone': 'lib/backbone',
    'text': 'lib/text',
    'underscore': 'lib/underscore',
    'bootstrap' : 'lib/bootstrap',
    'marionette' : 'lib/backbone.marionette',
    'less' : 'lib/less',

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
    "marionette"

  ],
  function($, _, B, jqueryui, less, Marionette) {

        $(function() {
            console.log("hello world");

        });
  }

);