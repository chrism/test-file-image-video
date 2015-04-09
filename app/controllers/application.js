import Ember from 'ember';

export default Ember.Controller.extend({
  allAssets: Ember.computed.union('model.images', 'model.footages')
});
