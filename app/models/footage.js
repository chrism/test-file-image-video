import DS from 'ember-data';

export default DS.Model.extend({
  file: null,
  assetType: function() {
    return "footage";
  }.property(),
  componentType: function() {
    return "file-" + this.get('assetType');
  }.property('assetType')
});
