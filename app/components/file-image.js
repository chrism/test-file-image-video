import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['downloading-asset'],

  didInsertElement: function() {
    var reader = new FileReader();
    reader.onload = (loader) => {
      this.$().append('<img />');
      this.$('img').addClass('thumbnail').attr('src', reader.result);
    };
    reader.readAsDataURL(this.get('file'));
  }
});
