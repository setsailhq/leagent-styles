import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useScrolled() {

	const [ scrollState, setScrollState ] = useState({
		position: window ? window.scrollY : 0,
		scrolled: window ? window.scrollY > constants.SCROLL_GAP : false,
	});

	useEffect(() => {
		if (window) {
			function handleScroll() {
				setScrollState({position: window.scrollY, scrolled: window.scrollY > constants.SCROLL_GAP});
			}

			window.addEventListener('scroll', handleScroll);
			handleScroll();
		}
		return () => {
			if (window) {
				window.removeEventListener('scroll', handleScroll)
			}
		};
	}, []);

	return scrollState;
}
