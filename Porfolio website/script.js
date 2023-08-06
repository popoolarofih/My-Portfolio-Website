document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


