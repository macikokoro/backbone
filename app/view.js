var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;


var SimpleView = Backbone.View.extend({tagName: 'li'});
var simpleView = new SimpleView();

console.log(simpleView.el);
