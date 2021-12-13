new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  anchors: ["page1", "page2", "page3", "page4"],

  afterLoad: function (origin, destination, direction) {
    if (origin.anchor == "page1") {
      // var navbar = document.getElementById("navbar");
      document.getElementById("navbar").classList.remove("hidden");
    } else if (destination.anchor == "page1") {
      document.getElementById("navbar").classList.add("hidden");
    }
  },
});
