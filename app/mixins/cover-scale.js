import Ember from 'ember';

export default Ember.Mixin.create({
  coverScale: function() {
    var container = this.$();
    var item = this.$('img');
    
    var cW = container.outerWidth();
    var cH = container.outerHeight();
    var iW = item.attr("width");
    var iH = item.attr("height");

    // If image is to narrow scale to match container width
    if (iW < cW) {
      var ratioW = cW / iW;
      iW = cW;
      iH = iH * ratioW;
    }

    // If image is too short scale to match container height
    if (iH < cH) {
      var ratioH = cH / iH;
      iH = cH;
      iW = iW * ratioH;
    }

    // If image is bigger in both dimensions scale down to match an edge
    if (iW > cW && iH > cH) {
      var widthRatio = cW / iW;
      var heightRatio = cH / iH;

      if (widthRatio > heightRatio) {
        iW = cW;
        iH = iH * widthRatio;
      } else {
        iH = cH;
        iW = iW * heightRatio;
      }
    }

    item.width(iW).height(iH);

    if (iH > cH) {
      var shiftH = (iH - cH) / 2;
      item.css('top', -shiftH);
    } else {
      item.css('top', '');
    }

    if (iW > cW) {
      var shiftW = (iW - cW) / 2;
      item.css('left', -shiftW);
    } else {
      item.css('left', '');
    }
  }
});
