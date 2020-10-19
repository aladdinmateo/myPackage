import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class Revealer {
  constructor(elmnt, ofst) {
    this.revealedItem = elmnt; //$(".features, .testimonial");
    this.offsetPercent = ofst;
    this.hideTheRevealed();
    this.firstWayPoint();
  }

  hideTheRevealed() {
    this.revealedItem.addClass("reveal")
  }

  firstWayPoint() {
    var that = this;
    this.revealedItem.each(function() {
      var singleItem = this;
      new Waypoint({
        element: singleItem,
        handler: function() {
          $(singleItem).addClass("reveal-is-visible");
        },
        offset: that.offsetPercent //"85%"
      });
      // alert("test");
    });
  }
}

export default Revealer;
