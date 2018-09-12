document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    xDown = getTouches(evt)[0].clientX;
    yDown = getTouches(evt)[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
            /* left swipe */

            switch (window.location.pathname) {
                case '/html/calculo.html':
                    window.location.assign("/html/info.html")
                    break;
                    case '/html/info.html':
                    window.location.assign("/html/semana.html")
                    break;
                    case '/html/semana.html':
                    window.location.assign("/html/calculo.html")
                    break;
                    case '/':
                    window.location.assign("/html/semana.html")
                    break;

                default:
                    break;
            }




        } else {
            /* right swipe */
            
            switch (window.location.pathname) {
                case '/html/calculo.html':
                    window.location.assign("/html/semana.html")
                    break;
                    case '/html/info.html':
                    window.location.assign("/html/calculo.html")
                    break;
                    case '/html/semana.html':
                    window.location.assign("/html/info.html")
                    break;
                    case '/':
                    window.location.assign("/html/semana.html")
                default:
                    break;
            }
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};