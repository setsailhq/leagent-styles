import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useEscPress() {

	const [ pressed, setPressed ] = useState(false);

	useEffect(() => {
		function handleEscPress(event) {
			setPressed(event && event.keyCode === constants.KEY_ESC);
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('keyup', handleEscPress, false);
		}
		handleEscPress();
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('keyup', handleEscPress, false)
			}
		};
	}, []);

	return pressed;
}
