$(window).on("load", function () {

  // automatically open a new tab for links outside of the domain

  var links = document.links;

  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
        links[i].target = '_blank';
    } 
  }

    // set up hamburger stuff
  
    $(".js-hamburger").click(function() {
      $(this).toggleClass("is-active");
      $(".fries").toggleClass("show");
      $("body").toggleClass("modal-open");
      $("body").toggleClass("menu-open");
    })
    
    $(".fries a").click(function() {
      $(".js-hamburger").toggleClass("is-active");
      $(".fries").toggleClass("show");
      $("body").toggleClass("modal-open");
      $("body").toggleClass("menu-open");
    })
  
    $(".does-not-work").click(function(e) {
      alert("This does not work yet");
    })
  
  });
  
  
  // The debounce function receives our function as a parameter
  const debounce = (fn) => {
  
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
  
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
  
        // Call our function and pass any params we received
        fn(...params);
      });
  
    }
  };
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;    
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), {
    passive: true
  });
  
  // Update scroll position for first time
  storeScroll();

  gsap.registerPlugin(ScrollTrigger);

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({

  "(min-width: 1024px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".section2",
          scrub: true,
        }
      });
    tl.to(".section-transition.bgimage", {backgroundPosition: "0px 80%"})
  },
  
  "(min-width: 768px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".section2",
          scrub: true,
        }
      });
    tl.to(".section-transition.bgimage", {backgroundPosition: "0px 100%"})
  }, 
  
  // mobile
  "(max-width: 767px)": function() {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
    let tl = gsap.timeline({ 
        scrollTrigger:{
          trigger: ".section2",
          scrub:true,
        }
      });
      tl.to(".section-transition.bgimage", {
        backgroundPosition: "0 -100px",
      duration: 1})
    }, 
  
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }
  
});
import "./css/main.scss";
