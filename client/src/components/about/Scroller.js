import $ from "jquery";
function isScrolledIntoView(element, perc) {
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  let elementTop = $(element).offset().top;
  let elementBottom = elementTop + $(element).height();

  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();
  //console.log("et", elementTop);
  //console.log("eb", elementBottom);
  //console.log("wh", windowHeight);

  //console.log("dvt", docViewTop);
  //console.log("dvb", docViewBottom);
  console.log("div", elementTop / docViewBottom);
  return elementTop / docViewBottom < perc;
  //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

export default { isScrolledIntoView };
