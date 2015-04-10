import Ember from 'ember';
import CoverScale from '../mixins/cover-scale';

export default Ember.Component.extend(CoverScale, {
  tagName: 'li',
  classNames: ['downloading-asset', 'image'],

  addImage: function(src, width, height) {
    this.$().append('<img />');
    this.$('img').addClass('thumbnail').attr({
      src: src,
      width: width,
      height: height
    });
    this.coverScale();
  },

  didInsertElement: function() {
    var reader = new FileReader();
    reader.onload = () => {

      var image = new Image();
      image.onload = () => {
        this.addImage(image.src, image.width, image.height);
      };
      image.src = reader.result;

    };
    reader.readAsDataURL(this.get('file'));
  }
});
