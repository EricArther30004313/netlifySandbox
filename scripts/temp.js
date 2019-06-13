function Call(){
    var innerLogic = document.getElementsByTagName("body")[0].innerHTML;

    document.getElementsByTagName("body")[0].innerHTML = `
    <div class="grid container">
        <div class="grid cell top">
            <!--a href="" class="cell social">
            </a-->
        </div>
    
        <div class="grid cell header eighty">
            <div class="cell logo">
                <a href="index.html"><img src="images/gfab_logo.png"></a>
            </div>
            <div class="cell navigation">
                <div class="cell mobDrop"></div>
                <div class="grid cell nav">
                    <div class="cell navi"><a href="index.html">Home</a></div>
                    <div class="cell navi"><a href="about.html">About</a></div>
                    <div class="cell navi drop">
                        <div class="cell dropTrigger"><a href="products.html#trailers">Trailers</a></div>
                        <div class="cell dropHolder">
                            <div class="cell dropContent"><a href="trailerboat.html">Boat Tailer</a></div>
                            <div class="cell dropContent"><a href="trailerjetski.html">Jetski Tailer</a></div>
                            <div class="cell dropContent"><a href="trailerbox.html">Box Tailer</a></div>
                            <div class="cell dropContent"><a href="trailersports.html">Sports Tailer</a></div>
                            <div class="cell dropContent"><a href="trailerflatdeck.html">Flatdeck Tailer</a></div>
                            <div class="cell dropContent"><a href="trailerroofing.html">Roofing Tailer</a></div>
                            <div class="cell dropContent"><a href="trailersportsdeck.html">Sportsdeck Tailer</a></div>
                            <div class="cell dropContent"><a href="trailerscissorlift.html">Scissor Lift Tailer</a></div>
                        </div>
                    </div>
                    <div class="cell navi drop">
                        <div class="cell dropTrigger"><a href="products.html#boats">Boats</a></div>
                        <div class="cell dropHolder">
                            <div class="cell dropContent"><a href="boatjetboat.html">Jetboat Hulls</a></div>
                            <div class="cell dropContent"><a href="boatskiboat.html">Skiboat Hulls</a></div>
                        </div>
                    </div>
                    <div class="cell navi drop">
                        <div class="cell dropTrigger"><a href="products.html#fabrication">Alloy Fabrication</a></div>
                        <div class="cell dropHolder">
                            <div class="cell dropContent"><a href="fabricationmarine.html">Mairine Fabrication</a></div>
                            <div class="cell dropContent"><a href="fabricationtank.html">Custom Tank</a></div>
                            <div class="cell dropContent"><a href="fabricationbunds.html">Containment Bunds</a></div>
                            <div class="cell dropContent"><a href="fabricationcustom.html">Others</a></div>
                        </div>
                    </div>
                    <div class="cell navi"><a href="contact.html">Contact</a></div>
                </div>
            </div>
        </div>
    
        <div class="grid cell center eighty">
        ` 
        + innerLogic +
        `
        </div>
    
        <div class="grid cell footer eighty">
            <div class="cell links">
                <div class="heading">
                    GFAB Trailers
                </div>
                <div class="contents">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="heading">
                    External Links
                </div>
                <div class="contents">
                    <ul>
                        <li><a href="https://www.facebook.com/GFABTrailers/">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div class="cell links">
                <div class="heading">
                    <a href="products.html#trailers">Trailers</a>
                </div>
                <div class="contents">
                    <ul>
                        <li><a href="trailerboat.html">Boat Trailer</a></li>
                        <li><a href="trailerjetski.html">Jetski Trailer</a></li>
                        <li><a href="trailerbox.html">Box Trailer</a></li>
                        <li><a href="trailersports.html">Sports Trailer</a></li>
                        <li><a href="trailerflatdeck.html">Flatdeck Trailer</a></li>
                        <li><a href="trailerroofing.html">Roofing Trailer</a></li>
                        <li><a href="trailersportsdeck.html">Sportsdeck Trailer</a></li>
                        <li><a href="trailerscissorlift.html">Scissor Lift Trailer</a></li>
                    </ul>
                </div>
            </div>
            <div class="cell links">
                <div class="heading">
                    <a href="products.html#boats">Boats</a>
                </div>
                <div class="contents">
                    <ul>
                        <li><a href="boatjetboat.html">Jetboat Hulls</a></li>
                        <li><a href="boatskiboat.html">Skiboat Hulls</a></li>
                    </ul>
                </div>
                <div class="heading">
                    <a href="products.html#fabrication">Alloy Fabrication</a>
                </div>
                <div class="contents">
                    <ul>
                        <li><a href="fabricationmarine.html">Marine Fabrication</a></li>
                        <li><a href="fabricationtank.html">Custom Tank</a></li>
                        <li><a href="fabricationbunds.html">Containment Bunds</a></li>
                        <li><a href="fabricationcustom.html">Others</a></li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="cell bottom">
            &copy; GFab Ltd 2019
        </div>
    </div>
    `;
}