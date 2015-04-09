import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',

  change: function(evt) {
    var that = this,
    input = evt.target;
    if (input.files) {
      that.sendAction('action', input.files[0]);
    }
  }
});