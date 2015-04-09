import Ember from 'ember';

export default Ember.Component.extend({
  label: 'choose a file',
  elName: function() {
    return this.get('name') + '-field';
  }.property('name'),

  actions: {
    chosenFile: function(added_file) {
      this.sendAction('action', added_file);
    }
  }
});
