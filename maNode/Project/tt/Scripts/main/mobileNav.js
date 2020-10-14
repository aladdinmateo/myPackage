import $ from 'jquery';

class Navigat {
  constructor() {
    this.siteHeader = $(".upHeader")
    this.navIcon = $(".upHeader_menu-icon");
    this.navContent = $(".upHeader_menu");
    this.events();
    // $(".upHeader_menu-icon").click(function() {
    //   alert("top right is clicked");
    }

    events() {
      this.navIcon.click(this.toggleNav.bind(this));
    }

    toggleNav() {
      // alert(this);
      this.navContent.toggleClass("upHeader_menu-is-visible")
      // alert("top right is clicked");
      this.siteHeader.toggleClass("upHeader-expand")
      this.navIcon.toggleClass("upHeader_menu-icon-close-x")
    }
  }

export default Navigat;
