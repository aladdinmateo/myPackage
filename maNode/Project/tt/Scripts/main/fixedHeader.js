import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll'


class FixedHead {
  constructor() {
    this.upHeader = $(".upHeader");
    this.headerTrigger = $(".large-hero_para");
    this.HeaderWaypoint();
    this.section = $(".section");
    this.headerLinks = $(".proper-nav a")
    this.sectionWaypoints();
    this.smoothOnScroll();
  }

  smoothOnScroll() {
    var that = this;
    that.headerLinks.smoothScroll();
  }

  HeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direct) {
        if (direct == "down") {
          that.upHeader.addClass("upHeader-dark");
        } else {
          that.upHeader.removeClass("upHeader-dark");
        }
      }
    });
  }

  sectionWaypoints() {
    var that = this;
    this.section.each(function() {
      var ourSection = this;
      new Waypoint({
        element: ourSection,
        handler: function(direct) {
          if (direct == "down") {
            var matchingHlink = ourSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("oranged-links");
            $(matchingHlink).addClass("oranged-links");
          }
        },
        offset: "40%"
      });

      new Waypoint({
        element: ourSection,
        handler: function(direct) {
          if (direct == "up") {
            var matchingHlink = ourSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("oranged-links");
            $(matchingHlink).addClass("oranged-links");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default FixedHead;
