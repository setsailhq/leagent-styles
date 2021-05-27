import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let xDown = 0;
let yDown = 0;

export function useCarouselTouch() {

	React.useEffect(() => {

		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
			if ( !xDown || !yDown ) {
				return;
			}

			const xUp = evt.touches[0].clientX;
			const yUp = evt.touches[0].clientY;

			const xDiff = xDown - xUp;
			const yDiff = yDown - yUp;

			if (document && Math.abs(xDiff) > Math.abs(yDiff)) {
				disableBodyScroll(window);
				disableBodyScroll(document);
				if (xDiff > 0) {
					const event = new Event('swipeLeft');
					document.dispatchEvent(event);
				} else {
					const event = new Event('swipeRight');
					document.dispatchEvent(event);
				}
			} else if (document) {
				if (yDiff > 0) {
					const event = new Event('swipeUp');
					document.dispatchEvent(event);
				} else {
					const event = new Event('swipeDown');
					document.dispatchEvent(event);
				}
			}
			xDown = null;
			yDown = null;
		}

		function handleTouchEnd() {
			if (window && document) {
				enableBodyScroll(window);
				enableBodyScroll(document);
			}
		}

		if (document) {
			document.addEventListener('touchstart', handleTouchStart, false);
			document.addEventListener('touchmove', handleTouchMove, false);
			document.addEventListener('touchend', handleTouchEnd, false);
		}
		return () => {
			if (document) {
				document.removeEventListener('touchstart', handleTouchStart, false);
				document.removeEventListener('touchmove', handleTouchMove, false);
				document.removeEventListener('touchend', handleTouchEnd, false);
			}
		};
	});
}

function getTouches(evt) {
	return evt.touches ||          // browser API
		evt.originalEvent.touches; // jQuery
}
