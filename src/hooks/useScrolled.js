import { useState, useEffect } from 'react';
import { constants } from '../helpers/constants';

export function useScrolled() {

	const [ scrollState, setScrollState ] = useState({
		position: window.scrollY,
		scrolled: window.scrollY > constants.SCROLL_GAP,
	});

	useEffect(() => {
		function handleScroll() {
			setScrollState({ position: window.scrollY, scrolled: window.scrollY > constants.SCROLL_GAP });
		}
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollState;
}
