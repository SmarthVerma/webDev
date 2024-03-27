var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the block
    document.getElementById('hiddenBlock').style.transform = 'translateY(100%)';
  } else {
    // Scrolling up, show the block
    document.getElementById('hiddenBlock').style.transform = 'translateY(0)';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});