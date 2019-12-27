import ScrollOut from "scroll-out";
import Splitting from "splitting";

// ########################################## SCROLL-OUT

ScrollOut({
  center: true,
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: ".content h2" });
