$(function () {
  let review = $("#reviews");

  fetchtestimonial(function (products) {
    review.empty();
    for (product of products) {
      review.append(createreview(product));
     
    }
     var slideIndex = 0;
     carousel();

     function carousel() {
       var i;
       var x = document.getElementsByClassName("mySlides");
       for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > x.length) {
         slideIndex = 1;
       }
       x[slideIndex - 1].style.display = "block";
       setTimeout(carousel, 4000); // Change image every 2 seconds
     }
  });
});
