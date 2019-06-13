var slideIndex = 0;
var thisTimeout;

        function Slide() {
            var i;
            var slides = document.getElementsByClassName("slideImage");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex-1].className += " active";
            thisTimeout = setTimeout(Slide, 10000);
        }

        function currentSlide(i) {
            slideIndex = i-1;
            clearTimeout(thisTimeout);
            Slide();
        }