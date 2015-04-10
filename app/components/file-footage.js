import Ember from 'ember';
import CoverScale from '../mixins/cover-scale';

export default Ember.Component.extend(CoverScale, {
  tagName: 'li',
  classNames: ['downloading-asset', 'footage'],

  addFootage: function(video) {
    Ember.Logger.log('adding video...', video);
    this.$().append('<video></video>');
    this.$('video').attr({
      src: video.src,
      width: video.width,
      height: video.height
    });
  },

  getVideoFromFile: function() {
    var file = this.get('file');

    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onload = () => {
        Ember.Logger.log('straight object...', reader.result);

        var video = document.createElement("video");

        video.addEventListener("canplay", () => {
          Ember.Logger.log('can play...', video);
          resolve(video);
        });

        video.onerror = function() {
          reject('cannot play this type of video');
        };

        video.src = reader.result;
      };
      reader.readAsDataURL(file);
    })
  },

  didInsertElement: function() {
    this.getVideoFromFile()
    .then((video) =>{
      this.addFootage(video);
    })
    .catch((error) =>{
      Ember.Logger.log(error);
    })
  }
});
