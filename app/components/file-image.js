import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  classNames: ['thumbnail'],

  didInsertElement: function() {
    var reader = new FileReader();
    reader.onload = (loader) => {
      this.get('element').src = reader.result;
    };
    reader.readAsDataURL(this.get('file'));
  }
});
