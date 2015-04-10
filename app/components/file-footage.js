import Ember from 'ember';
import CoverScale from '../mixins/cover-scale';
/* global FrameGrab */

export default Ember.Component.extend(CoverScale, {
  tagName: 'li',
  classNames: ['downloading-asset', 'footage'],

  didInsertElement: function() {
    var _this = this;

    FrameGrab.blob_to_video(this.get('file'))
    .then(
      function (videoEl) {
        var frameGrabInstance = new FrameGrab({video: videoEl});
        frameGrabInstance.grab("canvas", 1).then(
          function (itemEntry) {
            _this.$().append(itemEntry.container);
            _this.coverScale(_this.$('canvas'));
          },

          function (error) {
            Ember.Logger.log('could not grab an image from the video', error);
          }
        );
      },
      function (error) {
        Ember.Logger.log('frame grab could not load the file', error);
      }
    );
  }
});
