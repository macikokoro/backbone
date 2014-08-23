var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;


var SimpleView = Backbone.View.extend({
  tagName:'article',
  id: 'todo-view',
  className: 'todo'
});
var simpleView = new SimpleView();

console.log(simpleView.el);
