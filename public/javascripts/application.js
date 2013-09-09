
require.config({
  paths: {
    'jquery': 'lib/jquery',
    'backbone': 'lib/backbone',
    'text': 'lib/text',
    'underscore': 'lib/underscore',
    'bootstrap' : 'lib/bootstrap',
    'marrionette' : 'lib/backbone.marrionette'
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
    }
  }
});

require(
  ["jquery",
    "underscore",
    "backbone",
    "less",
    "marrionette"

  ],
  function($, _, B, jqueryui, less, Marrionette) {

        $(function() {
            console.log("hello world");

        });
  }

);