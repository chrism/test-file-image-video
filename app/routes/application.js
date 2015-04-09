import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;

    return Ember.RSVP.hash({
      images: store.find('image'),
      footages: store.find('footage')
    });
  },

  actions: {
    addFile: function(file) {
      var filetype = file.type,
          imageType = /^image\//,
          videoType = /^video\//;

      if (imageType.test(filetype)) {
        this.send('addImage', file);
      } else if (videoType.test(filetype)) {
        this.send('addFootage', file);
      } else {
        Ember.Logger.log('file is...', file, 'not an image');
      }
    },

    addImage: function(file) {
      this.store.createRecord('image', {
        file: file
      });
    },

    addFootage: function(file) {
      this.store.createRecord('footage', {
        file: file
      });
    }
  }
});
