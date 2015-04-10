import Ember from 'ember';
import CoverScaleMixin from '../../../mixins/cover-scale';
import { module, test } from 'qunit';

module('CoverScaleMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var CoverScaleObject = Ember.Object.extend(CoverScaleMixin);
  var subject = CoverScaleObject.create();
  assert.ok(subject);
});
