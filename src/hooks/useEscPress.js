import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useEscPress(resetVal) {

	const [ pressed, setPressed ] = useState(false);

	useEffect(() => setPressed(resetVal), [resetVal]);
	useEffect(() => {
		function handleEscPress(event) {
			setPressed(event && event.keyCode === constants.KEY_ESC);
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('keyup', handleEscPress, false);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('keyup', handleEscPress, false)
			}
		};
	}, []);

	return pressed;
}
