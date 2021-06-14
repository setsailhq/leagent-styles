import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useScrolled() {

	const [ scrollState, setScrollState ] = useState({
		position: typeof window !== 'undefined' ? window.scrollY : 0,
		scrolled: typeof window !== 'undefined' ? window.scrollY > constants.SCROLL_GAP : false,
	});

	useEffect(() => {
		function handleScroll() {
			setScrollState({
				position: typeof window !== 'undefined' ? window.scrollY : 0,
				scrolled: typeof window !== 'undefined' ? window.scrollY > constants.SCROLL_GAP : false,
			});
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
		handleScroll();
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll)
			}
		};
	}, []);

	return scrollState;
}
