import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('image');
  },

  actions: {
    addFile: function(file) {
      var filetype = file.type,
          imageType = /^image\//;

      if (imageType.test(filetype)) {
        this.send('addImage', file);
      } else {
        Ember.Logger.log('file is...', file, 'not an image');
      }
    },

    addImage: function(file) {
      this.store.createRecord('image', {
        file: file
      });
    }
  }
});
